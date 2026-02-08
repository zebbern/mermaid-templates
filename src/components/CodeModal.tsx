import { X, Image, FileCode, Loader2, RotateCcw, AlertTriangle, ZoomIn, ZoomOut, ExternalLink, Play, Pencil } from 'lucide-react';
import { Template, categories } from '../data/templates';
import { MermaidRenderer } from './MermaidRenderer';
import { CopyButton } from './CopyButton';
import { useEffect, useRef, useState, useCallback } from 'react';
import { exportAsPng, exportAsSvg } from '../utils/export';
import { useDebounce } from '../hooks/useDebounce';
import mermaid from 'mermaid';

interface CodeModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CodeModal({ template, isOpen, onClose }: CodeModalProps) {
  const category = template ? categories.find(c => c.id === template.category) : null;
  const diagramRef = useRef<HTMLDivElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const [exportingPng, setExportingPng] = useState(false);
  const [exportingSvg, setExportingSvg] = useState(false);
  const [editedCode, setEditedCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const debouncedCode = useDebounce(editedCode, 300);
  
  // Use original template code until user starts editing, then use debounced
  const displayCode = template && editedCode === template.code ? template.code : debouncedCode;

  // Initialize edited code when template changes
  useEffect(() => {
    if (template) {
      setEditedCode(template.code);
      setError(null);
      setZoom(1); // Reset zoom when template changes
      setPan({ x: 0, y: 0 }); // Reset pan when template changes
    }
  }, [template]);

  // Validate mermaid syntax when debounced code changes
  useEffect(() => {
    const validateCode = async () => {
      if (!debouncedCode.trim()) {
        setError('Code cannot be empty');
        return;
      }

      try {
        await mermaid.parse(debouncedCode);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          const message = err.message.split('\n')[0] || 'Invalid mermaid syntax';
          setError(message);
        } else {
          setError('Invalid mermaid syntax');
        }
      }
    };

    validateCode();
  }, [debouncedCode]);

  const handleCodeChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedCode(e.target.value);
  }, []);

  const handleReset = useCallback(() => {
    if (template) {
      setEditedCode(template.code);
      setError(null);
    }
  }, [template]);

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom(prev => Math.max(prev - 0.25, 0.25));
  }, []);

  const handleZoomReset = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  // Mouse wheel zoom handler
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setZoom(prev => Math.min(Math.max(prev + delta, 0.25), 3));
    }
  }, []);

  // Drag/pan handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  }, [pan]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const isModified = template && editedCode !== template.code;

  const handleOpenMermaidLive = useCallback(() => {
    const base64Code = btoa(unescape(encodeURIComponent(editedCode)));
    window.open(`https://mermaid.live/edit#base64:${base64Code}`, '_blank');
  }, [editedCode]);

  const handleOpenExcalidraw = useCallback(() => {
    window.open('https://excalidraw.com/', '_blank');
  }, []);

  const handleExportPng = async () => {
    if (!diagramRef.current || !template) return;
    setExportingPng(true);
    try {
      await exportAsPng(diagramRef.current, {
        filename: template.title.replace(/\s+/g, '-').toLowerCase(),
        scale: 2,
        backgroundColor: '#0a0a0a',
      });
    } catch (err) {
      console.error('Failed to export PNG:', err);
    } finally {
      setExportingPng(false);
    }
  };

  const handleExportSvg = async () => {
    if (!diagramRef.current || !template) return;
    setExportingSvg(true);
    try {
      await exportAsSvg(diagramRef.current, {
        filename: template.title.replace(/\s+/g, '-').toLowerCase(),
        backgroundColor: '#0a0a0a',
      });
    } catch (err) {
      console.error('Failed to export SVG:', err);
    } finally {
      setExportingSvg(false);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !template) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative bg-surface border border-border rounded-xl sm:rounded-2xl w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl mx-2 sm:mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            {category && (
              <category.icon size={20} className="text-accent flex-shrink-0 sm:w-6 sm:h-6" />
            )}
            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl font-bold text-white truncate">{template.title}</h2>
              <p className="text-xs sm:text-sm text-gray-400 truncate">{template.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-card text-gray-400 hover:text-white transition-colors touch-target flex-shrink-0"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Mobile Tabs */}
        <div className="flex md:hidden border-b border-border bg-card">
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'preview'
                ? 'text-accent border-b-2 border-accent bg-accent/5'
                : 'text-gray-400 hover:text-white hover:bg-card-hover'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'code'
                ? 'text-accent border-b-2 border-accent bg-accent/5'
                : 'text-gray-400 hover:text-white hover:bg-card-hover'
            }`}
          >
            Code
          </button>
        </div>
        
        {/* Content */}
        <div className="flex flex-col md:grid md:grid-cols-2 h-[calc(95vh-180px)] sm:h-[calc(90vh-140px)] overflow-hidden">
          {/* Code Editor */}
          <div className={`flex-col flex-1 min-h-0 overflow-hidden border-b md:border-b-0 md:border-r border-border md:order-1 ${activeTab === 'code' ? 'flex' : 'hidden md:flex'}`}>
            <div className="flex items-center justify-between p-3 border-b border-border bg-card flex-shrink-0">
              <span className="text-sm font-medium text-gray-300">Mermaid Code</span>
              <div className="flex items-center gap-2">
                {isModified && (
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 px-2 py-1 text-xs rounded-lg bg-card-hover border border-border text-gray-400 hover:text-white hover:border-gray-500 transition-all"
                    title="Reset to original"
                  >
                    <RotateCcw size={12} />
                    Reset
                  </button>
                )}
                <CopyButton text={editedCode} size="sm" />
              </div>
            </div>
            <div className="flex-1 overflow-hidden bg-deep">
              <textarea
                value={editedCode}
                onChange={handleCodeChange}
                className="w-full h-full p-3 sm:p-4 bg-[#0a0a0a] text-gray-300 font-mono text-xs sm:text-sm resize-none focus:outline-none"
                spellCheck={false}
                placeholder="Enter mermaid code..."
                style={{
                  lineHeight: '1.6',
                  tabSize: 2,
                }}
              />
            </div>
          </div>
          
          {/* Diagram Preview */}
          <div className={`flex-col bg-deep min-h-[200px] sm:min-h-[300px] flex-shrink-0 md:flex-shrink md:order-2 ${activeTab === 'preview' ? 'flex' : 'hidden md:flex'}`}>
            <div className="flex items-center justify-between p-3 border-b border-border bg-card flex-shrink-0">
              <span className="text-sm font-medium text-gray-300">Preview</span>
              <div className="flex items-center gap-2">
                {!error && debouncedCode !== editedCode && (
                  <span className="text-xs text-gray-500 italic">Updating...</span>
                )}
                {/* Zoom controls */}
                <div className="flex items-center gap-1 border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={handleZoomOut}
                    className="p-1.5 hover:bg-card-hover text-gray-400 hover:text-white transition-colors"
                    title="Zoom out"
                  >
                    <ZoomOut size={14} />
                  </button>
                  <button
                    onClick={handleZoomReset}
                    className="px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-card-hover transition-colors min-w-[48px]"
                    title="Reset zoom"
                  >
                    {Math.round(zoom * 100)}%
                  </button>
                  <button
                    onClick={handleZoomIn}
                    className="p-1.5 hover:bg-card-hover text-gray-400 hover:text-white transition-colors"
                    title="Zoom in"
                  >
                    <ZoomIn size={14} />
                  </button>
                </div>
              </div>
            </div>
            <div 
              ref={previewContainerRef}
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              className={`flex-1 p-4 sm:p-6 overflow-hidden cursor-grab ${isDragging ? '!cursor-grabbing' : ''}`}
            >
              <div 
                ref={diagramRef} 
                className="flex items-center justify-center min-h-full transition-transform duration-150"
                style={{ 
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`, 
                  transformOrigin: 'center center',
                  pointerEvents: isDragging ? 'none' : 'auto',
                }}
              >
                {error ? (
                  <div className="text-center text-gray-500">
                    <AlertTriangle size={48} className="mx-auto mb-3 text-red-400/50" />
                    <p className="text-sm">Fix the syntax error to see preview</p>
                  </div>
                ) : (
                  <MermaidRenderer 
                    key={template.id} 
                    code={displayCode} 
                    id={`modal-${template.id}`}
                    liveUpdate
                  />
                )}
              </div>
            </div>
            {error && (
              <div className="flex items-start gap-2 p-3 bg-red-500/10 border-t border-red-500/30 text-red-400">
                <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-xs font-mono break-all">{error}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-t border-border bg-card flex-shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenMermaidLive}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg font-medium text-xs sm:text-sm px-2 sm:px-3 py-1.5 bg-card hover:bg-card-hover text-gray-300 hover:text-white border border-border transition-all duration-200"
              title="Edit in Mermaid Live"
            >
              <Play size={16} />
              <span className="hidden xs:inline">Mermaid Live</span>
              <ExternalLink size={12} className="hidden sm:inline opacity-50" />
            </button>
            <button
              onClick={handleOpenExcalidraw}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg font-medium text-xs sm:text-sm px-2 sm:px-3 py-1.5 bg-card hover:bg-card-hover text-gray-300 hover:text-white border border-border transition-all duration-200"
              title="Open in Excalidraw"
            >
              <Pencil size={16} />
              <span className="hidden xs:inline">Excalidraw</span>
              <ExternalLink size={12} className="hidden sm:inline opacity-50" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportSvg}
              disabled={exportingSvg}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg font-medium text-xs sm:text-sm px-2 sm:px-3 py-1.5 bg-card hover:bg-card-hover text-gray-300 hover:text-white border border-border transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Export as SVG"
            >
              {exportingSvg ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <FileCode size={16} />
              )}
              <span className="hidden xs:inline">SVG</span>
            </button>
            <button
              onClick={handleExportPng}
              disabled={exportingPng}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg font-medium text-xs sm:text-sm px-2 sm:px-3 py-1.5 bg-card hover:bg-card-hover text-gray-300 hover:text-white border border-border transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Export as PNG"
            >
              {exportingPng ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Image size={16} />
              )}
              <span className="hidden xs:inline">PNG</span>
            </button>
            <CopyButton text={editedCode} size="md" />
          </div>
        </div>
      </div>
    </div>
  );
}
