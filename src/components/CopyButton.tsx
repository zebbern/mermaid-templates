import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'icon' | 'full';
}

export function CopyButton({ text, className = '', size = 'md', variant = 'full' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  const iconSize = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleCopy}
        className={`p-2 rounded-lg transition-all duration-200 ${
          copied 
            ? 'bg-success/20 text-success' 
            : 'bg-card hover:bg-card-hover text-gray-400 hover:text-white'
        } ${className}`}
        title={copied ? 'Copied!' : 'Copy code'}
      >
        {copied ? <Check size={iconSize[size]} /> : <Copy size={iconSize[size]} />}
      </button>
    );
  }

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 ${
        copied 
          ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400' 
          : 'bg-card-hover border border-border text-gray-300 hover:text-white hover:border-gray-500'
      } ${sizeClasses[size]} ${className}`}
    >
      {copied ? (
        <>
          <Check size={iconSize[size]} />
          Copied!
        </>
      ) : (
        <>
          <Copy size={iconSize[size]} />
          Copy Code
        </>
      )}
    </button>
  );
}
