import { Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  value: string;
}

export function SearchBar({ onSearch, value }: SearchBarProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(localValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [localValue, onSearch]);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleClear = () => {
    setLocalValue('');
    onSearch('');
  };

  return (
    <div className="relative">
      <Search 
        size={18} 
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
      />
      <input
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder="Search templates by name, description, or type..."
        className="w-full bg-card border border-border rounded-xl pl-11 pr-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
      />
      {localValue && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-border text-gray-400 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
