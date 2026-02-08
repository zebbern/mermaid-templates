import { ExternalLink, Github, Pencil } from 'lucide-react';

interface FooterLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const footerLinks: FooterLink[] = [
  {
    href: 'https://excalidraw.com/',
    label: 'Convert to Excalidraw',
    icon: <Pencil size={14} />,
  },
  {
    href: 'https://mermaid.live/',
    label: 'Edit in Mermaid Live',
    icon: <ExternalLink size={14} />,
  },
  {
    href: 'https://github.com/zebbern',
    label: 'Created by zebbern',
    icon: <Github size={14} />,
  },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-3 px-4">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
        {footerLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
