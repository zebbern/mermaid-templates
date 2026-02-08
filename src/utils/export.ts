/**
 * Export utilities for Mermaid diagrams
 */

export interface ExportOptions {
  filename: string;
  scale?: number;
  backgroundColor?: string;
}

/**
 * Extract SVG element from a container
 */
export function getSvgFromContainer(container: HTMLElement): SVGSVGElement | null {
  return container.querySelector('svg');
}

/**
 * Convert SVG element to a clean SVG string with proper namespace
 */
export function prepareSvgForExport(svg: SVGSVGElement, backgroundColor?: string): string {
  // Clone the SVG to avoid modifying the original
  const clonedSvg = svg.cloneNode(true) as SVGSVGElement;
  
  // Set proper xmlns if not present
  if (!clonedSvg.getAttribute('xmlns')) {
    clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  }
  clonedSvg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
  
  // Add background if specified
  if (backgroundColor) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', '100%');
    rect.setAttribute('height', '100%');
    rect.setAttribute('fill', backgroundColor);
    clonedSvg.insertBefore(rect, clonedSvg.firstChild);
  }
  
  // Get the SVG dimensions
  const bbox = svg.getBBox();
  const padding = 20;
  
  // Set viewBox if not present
  if (!clonedSvg.getAttribute('viewBox')) {
    clonedSvg.setAttribute(
      'viewBox',
      `${bbox.x - padding} ${bbox.y - padding} ${bbox.width + padding * 2} ${bbox.height + padding * 2}`
    );
  }
  
  // Ensure width and height are set
  if (!clonedSvg.getAttribute('width')) {
    clonedSvg.setAttribute('width', String(bbox.width + padding * 2));
  }
  if (!clonedSvg.getAttribute('height')) {
    clonedSvg.setAttribute('height', String(bbox.height + padding * 2));
  }
  
  return new XMLSerializer().serializeToString(clonedSvg);
}

/**
 * Download SVG file
 */
export async function exportAsSvg(
  container: HTMLElement,
  options: ExportOptions
): Promise<void> {
  const svg = getSvgFromContainer(container);
  if (!svg) {
    throw new Error('No SVG element found');
  }
  
  const svgString = prepareSvgForExport(svg, options.backgroundColor);
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  downloadFile(url, `${options.filename}.svg`);
  
  // Clean up
  URL.revokeObjectURL(url);
}

/**
 * Convert SVG to PNG and download
 */
export async function exportAsPng(
  container: HTMLElement,
  options: ExportOptions
): Promise<void> {
  const svg = getSvgFromContainer(container);
  if (!svg) {
    throw new Error('No SVG element found');
  }
  
  const scale = options.scale ?? 2; // Default 2x scale for better quality
  const backgroundColor = options.backgroundColor ?? '#0a0a0a'; // Dark background
  
  const svgString = prepareSvgForExport(svg, backgroundColor);
  
  // Get SVG dimensions
  const bbox = svg.getBBox();
  const padding = 20;
  const width = bbox.width + padding * 2;
  const height = bbox.height + padding * 2;
  
  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.width = width * scale;
  canvas.height = height * scale;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to get canvas context');
  }
  
  // Scale for higher resolution
  ctx.scale(scale, scale);
  
  // Create image from SVG
  const img = new Image();
  const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);
  
  return new Promise((resolve, reject) => {
    img.onload = () => {
      try {
        // Fill background
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
        
        // Draw image
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convert to PNG
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Failed to create PNG blob'));
              return;
            }
            
            const pngUrl = URL.createObjectURL(blob);
            downloadFile(pngUrl, `${options.filename}.png`);
            
            // Clean up
            URL.revokeObjectURL(url);
            URL.revokeObjectURL(pngUrl);
            resolve();
          },
          'image/png',
          1.0
        );
      } catch (err) {
        URL.revokeObjectURL(url);
        reject(err);
      }
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load SVG image'));
    };
    
    img.src = url;
  });
}

/**
 * Trigger file download
 */
function downloadFile(url: string, filename: string): void {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
