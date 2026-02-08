import { Eye } from 'lucide-react';
import { Template, categories } from '../data/templates';
import { MermaidRenderer } from './MermaidRenderer';
import { CopyButton } from './CopyButton';

interface TemplateCardProps {
  template: Template;
  onViewCode: (template: Template) => void;
}

export function TemplateCard({ template, onViewCode }: TemplateCardProps) {
  const category = categories.find(c => c.id === template.category);
  
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 group">
      {/* Diagram Preview */}
      <div 
        className="h-48 bg-deep p-4 cursor-pointer relative overflow-hidden"
        onClick={() => onViewCode(template)}
      >
        <div className="w-full h-full flex items-center justify-center">
          <MermaidRenderer code={template.code} id={template.id} scaleToFit />
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <span className="text-white font-medium flex items-center gap-2">
            <Eye size={18} />
            View & Copy Code
          </span>
        </div>
      </div>
      
      {/* Card Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-white group-hover:text-accent transition-colors">
            {template.title}
          </h3>
          {category && (
            <span className="text-xs px-2 py-1 rounded-full bg-border text-gray-400 whitespace-nowrap flex items-center gap-1">
              <category.icon size={12} />
              {category.name}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {template.description}
        </p>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          <CopyButton text={template.code} size="md" className="flex-1" />
          <button
            onClick={() => onViewCode(template)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg bg-card-hover border border-border text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
          >
            <Eye size={16} />
            View Code
          </button>
        </div>
      </div>
    </div>
  );
}
