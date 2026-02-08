import { useState, useMemo, useCallback } from 'react';
import { Menu, X, GitFork, Bug } from 'lucide-react';
import { templates, categories, Template } from './data/templates';
import { Sidebar } from './components/Sidebar';
import { ExpandableSearch } from './components/ExpandableSearch';
import { TemplateGrid } from './components/TemplateGrid';
import { CodeModal } from './components/CodeModal';
import { Footer } from './components/Footer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Filter templates based on category and search
  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      // Category filter
      if (selectedCategory && template.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const category = categories.find(c => c.id === template.category);
        return (
          template.title.toLowerCase().includes(query) ||
          template.description.toLowerCase().includes(query) ||
          template.category.toLowerCase().includes(query) ||
          (category && category.name.toLowerCase().includes(query))
        );
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleCategorySelect = useCallback((categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setSearchQuery('');
    setIsMobileMenuOpen(false);
  }, []);

  const handleTemplateSelect = useCallback((template: Template) => {
    setSelectedTemplate(template);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedTemplate(null);
  }, []);

  const currentCategoryName = selectedCategory 
    ? categories.find(c => c.id === selectedCategory)?.name 
    : 'All Templates';

  return (
    <div className="flex h-screen bg-deep">
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity duration-300"
          onClick={closeMobileMenu}
        />
      )}

      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
        totalCount={templates.length}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-surface border-b border-border p-4 sm:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <button
                  onClick={toggleMobileMenu}
                  className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-card text-gray-400 hover:text-white transition-colors touch-target"
                  aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-white truncate">{currentCategoryName}</h2>
                  <p className="text-gray-400 text-sm mt-0.5">
                    {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} available
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <ExpandableSearch onChange={handleSearch} value={searchQuery} />
                <a
                  href="https://github.com/zebbern/mermaid-templates/fork"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Fork this repo"
                  className="p-2 rounded-lg bg-card hover:bg-elevated text-gray-400 hover:text-emerald-400 transition-all duration-200 hover:scale-105"
                >
                  <GitFork size={20} />
                </a>
                <a
                  href="https://github.com/zebbern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <img
                    src="/zebbernicon.png"
                    alt="GitHub Profile"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-transparent hover:ring-emerald-500/50 transition-all duration-200"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="max-w-7xl mx-auto">
            <TemplateGrid 
              templates={filteredTemplates} 
              onSelectTemplate={handleTemplateSelect}
            />
            <Footer />
          </div>
        </div>
      </main>

      <CodeModal
        template={selectedTemplate}
        isOpen={selectedTemplate !== null}
        onClose={handleCloseModal}
      />

      {/* Floating Issues Link */}
      <a
        href="https://github.com/zebbern/mermaid-templates/issues"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-surface/80 backdrop-blur-sm border border-border rounded-full text-gray-400 text-xs hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-card transition-all duration-200 z-50"
      >
        <Bug size={14} />
        <span>Report Issue</span>
      </a>
    </div>
  );
}

export default App;
