import { Template } from '../data/templates';
import { TemplateCard } from './TemplateCard';

interface TemplateGridProps {
  templates: Template[];
  onSelectTemplate: (template: Template) => void;
}

export function TemplateGrid({ templates, onSelectTemplate }: TemplateGridProps) {
  if (templates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <span className="text-6xl mb-4">🔍</span>
        <h3 className="text-xl font-medium text-white mb-2">No templates found</h3>
        <p className="text-sm">Try adjusting your search or selecting a different category</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          template={template}
          onViewCode={onSelectTemplate}
        />
      ))}
    </div>
  );
}
