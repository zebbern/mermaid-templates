import { useEffect, useRef, useState, useId } from 'react';
import mermaid from 'mermaid';

interface MermaidRendererProps {
  code: string;
  id: string;
  scaleToFit?: boolean; // When true, scales diagram to fit container (for card previews)
  liveUpdate?: boolean; // When true, re-renders when code changes (for modal editor)
}

// Initialize mermaid with dark theme
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  themeVariables: {
    primaryColor: '#3b82f6',
    primaryTextColor: '#ffffff',
    primaryBorderColor: '#333333',
    lineColor: '#6b7280',
    secondaryColor: '#1a1a1a',
    tertiaryColor: '#141414',
    background: '#0a0a0a',
    mainBkg: '#1a1a1a',
    nodeBorder: '#333333',
    clusterBkg: '#141414',
    titleColor: '#ffffff',
    nodeTextColor: '#ffffff',
  },
  flowchart: {
    htmlLabels: true,
    curve: 'basis',
  },
  securityLevel: 'loose',
});

// Counter for unique IDs
let renderCounter = 0;

// Render queue to serialize mermaid renders (prevents concurrent render issues)
const renderQueue: (() => Promise<void>)[] = [];
let isRendering = false;

async function processQueue() {
  if (isRendering || renderQueue.length === 0) return;
  isRendering = true;
  const task = renderQueue.shift()!;
  await task();
  isRendering = false;
  processQueue();
}

function queueRender(task: () => Promise<void>) {
  renderQueue.push(task);
  processQueue();
}

// Helper to clean up orphaned mermaid elements from DOM
function cleanupMermaidOrphans() {
  // Mermaid leaves orphaned elements in body when rendering fails or component unmounts
  document.querySelectorAll(
    '[id^="mermaid-"]:not([data-processed]), [id^="d"]:not(div):not(defs):not(desc)[id*="mermaid"], .error-icon, .error-text, svg[id^="mermaid-"]'
  ).forEach((el) => {
    // Only remove if it's directly in body (orphaned)
    if (el.parentElement === document.body) {
      el.remove();
    }
  });
}

// Custom hook for Intersection Observer
function useIntersectionObserver(
  options: IntersectionObserverInit = {}
): [React.RefObject<HTMLDivElement>, boolean] {
  const elementRef = useRef<HTMLDivElement>(null!);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set to true, never back to false (for caching purposes)
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after first intersection to save resources
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '100px', // Start loading slightly before element enters viewport
        threshold: 0,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.root, options.rootMargin, options.threshold]);

  return [elementRef, isVisible];
}

// Skeleton placeholder component
function DiagramSkeleton() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-full h-full min-h-[120px] bg-gray-800/50 animate-pulse rounded flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 opacity-50">
          <div className="w-16 h-16 bg-gray-700/50 rounded-lg" />
          <div className="w-24 h-2 bg-gray-700/50 rounded" />
        </div>
      </div>
    </div>
  );
}

export function MermaidRenderer({ code, id, scaleToFit = false, liveUpdate = false }: MermaidRendererProps) {
  const [observerRef, isVisible] = useIntersectionObserver();
  const [svgContent, setSvgContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasRendered, setHasRendered] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const lastCodeRef = useRef(code);
  const reactId = useId();

  // Reset hasRendered when code changes and liveUpdate is enabled
  useEffect(() => {
    if (liveUpdate && code !== lastCodeRef.current) {
      setHasRendered(false);
      setShowContent(false);
      lastCodeRef.current = code;
    }
  }, [code, liveUpdate]);

  // Render diagram only when visible and not already rendered
  useEffect(() => {
    // Skip if not visible yet or already rendered
    if (!isVisible || hasRendered) return;

    let mounted = true;
    
    const renderDiagram = async () => {
      if (!code.trim()) {
        if (mounted) {
          setIsLoading(false);
          setSvgContent('');
          setHasRendered(true);
          setShowContent(true);
        }
        return;
      }
      
      setIsLoading(true);
      
      // Queue the render to serialize mermaid.render() calls
      await new Promise<void>((resolve) => {
        queueRender(async () => {
          try {
            // Skip if component unmounted while waiting in queue
            if (!mounted) {
              resolve();
              return;
            }
            
            // Generate unique ID for each render to avoid mermaid caching issues
            const uniqueId = `mermaid-${id}-${reactId.replace(/:/g, '')}-${++renderCounter}`;
            
            const { svg } = await mermaid.render(uniqueId, code);
            
            if (mounted && svg) {
              setSvgContent(svg);
              setHasRendered(true);
              setShowContent(true);
            }
          } catch (err) {
            // Silently fail for card previews - don't show error text
            if (mounted) {
              setSvgContent('');
              setHasRendered(true);
              setShowContent(true);
            }
            // Clean up any error elements mermaid may have left behind
            cleanupMermaidOrphans();
          } finally {
            if (mounted) {
              setIsLoading(false);
            }
            resolve();
          }
        });
      });
    };

    renderDiagram();
    
    return () => {
      mounted = false;
    };
  }, [code, id, reactId, isVisible, hasRendered]);

  // Clean up orphaned mermaid elements on unmount
  useEffect(() => {
    return () => {
      // Delayed cleanup to catch any elements mermaid creates during unmount
      setTimeout(cleanupMermaidOrphans, 0);
    };
  }, []);

  // Show skeleton while not visible or loading
  if (!isVisible || (isLoading && !hasRendered)) {
    return (
      <div ref={observerRef} className="w-full h-full">
        <DiagramSkeleton />
      </div>
    );
  }

  // Don't show anything if render failed (graceful error handling for cards)
  if (!svgContent && hasRendered) {
    return (
      <div 
        ref={observerRef}
        className="flex items-center justify-center w-full h-full"
      >
        <div className="text-gray-600 text-sm">Preview unavailable</div>
      </div>
    );
  }

  return (
    <div 
      ref={observerRef} 
      className={`mermaid flex items-center justify-center w-full h-full overflow-hidden p-2 transition-opacity duration-300 ${
        showContent ? 'opacity-100' : 'opacity-0'
      } ${scaleToFit ? 'scale-to-fit-container' : ''}`}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
