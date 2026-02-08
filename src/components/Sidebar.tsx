import { LayoutGrid, X } from 'lucide-react';
import { Category } from '../data/templates';

interface SidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  totalCount: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ categories, selectedCategory, onSelectCategory, totalCount, isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={`
        fixed lg:relative inset-y-0 left-0 z-50
        w-72 sm:w-64 bg-surface border-r border-border flex flex-col h-full
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
    >
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <LayoutGrid size={24} className="text-accent" />
            Mermaid Templates
          </h1>
          <button
            onClick={onClose}
            className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-card text-gray-400 hover:text-white transition-colors touch-target"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <p className="text-sm text-gray-400 mt-1">Quick access diagram templates</p>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-3">
        <button
          onClick={() => onSelectCategory(null)}
          className={`w-full flex items-center gap-3 px-3 py-3 sm:py-2.5 rounded-lg transition-all duration-200 mb-1 touch-target ${
            selectedCategory === null
              ? 'bg-accent text-white'
              : 'text-gray-300 hover:bg-card hover:text-white'
          }`}
        >
          <LayoutGrid size={18} />
          <span className="flex-1 text-left">All Templates</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            selectedCategory === null ? 'bg-white/20' : 'bg-border'
          }`}>
            {totalCount}
          </span>
        </button>
        
        <div className="h-px bg-border my-3" />
        
        <div className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 sm:py-2.5 rounded-lg transition-all duration-200 touch-target ${
                selectedCategory === category.id
                  ? 'bg-accent text-white'
                  : 'text-gray-300 hover:bg-card hover:text-white'
              }`}
            >
              <category.icon size={18} />
              <span className="flex-1 text-left text-sm">{category.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                selectedCategory === category.id ? 'bg-white/20' : 'bg-border'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
