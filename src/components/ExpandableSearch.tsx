import { Search, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface ExpandableSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function ExpandableSearch({
  value,
  onChange,
  placeholder = 'Search...',
}: ExpandableSearchProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleExpand = useCallback(() => {
    setIsExpanded(true);
  }, []);

  const handleCollapse = useCallback(() => {
    setIsExpanded(false);
    onChange('');
  }, [onChange]);

  // Auto-focus input when expanded
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  // Handle click outside to collapse
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleCollapse();
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded, handleCollapse]);

  // Handle Escape key to collapse
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCollapse();
      }
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isExpanded, handleCollapse]);

  return (
    <div ref={containerRef} className="relative flex items-center">
      <div
        className={`
          flex items-center overflow-hidden transition-all duration-300 ease-in-out
          bg-card border border-border rounded-full
          ${isExpanded ? 'w-64 sm:w-80' : 'w-10'}
        `}
      >
        {/* Search icon button (visible when collapsed) */}
        <button
          type="button"
          onClick={handleExpand}
          className={`
            flex-shrink-0 flex items-center justify-center
            w-10 h-10 rounded-full
            text-gray-400 hover:text-white hover:bg-border
            transition-colors duration-200
            ${isExpanded ? 'pointer-events-none' : ''}
          `}
          aria-label="Open search"
        >
          <Search size={18} />
        </button>

        {/* Input field (visible when expanded) */}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`
            flex-1 bg-transparent border-none outline-none
            text-white placeholder-gray-500
            transition-all duration-300 ease-in-out
            ${isExpanded ? 'w-full px-1 opacity-100' : 'w-0 p-0 opacity-0'}
          `}
          tabIndex={isExpanded ? 0 : -1}
        />

        {/* Close button (visible when expanded) */}
        <button
          type="button"
          onClick={handleCollapse}
          className={`
            flex-shrink-0 flex items-center justify-center
            w-8 h-8 mr-1 rounded-full
            text-gray-400 hover:text-white hover:bg-border
            transition-all duration-200
            ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-0 w-0 mr-0'}
          `}
          aria-label="Close search"
          tabIndex={isExpanded ? 0 : -1}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
