import React from 'react';
import HighlightedText from '../HighlightedText/HighlightedText';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

/** Top-of-page header for inner pages, matching the homepage hero typography. */
function PageHeader({ eyebrow, title, highlight, subtitle, children }: PageHeaderProps) {
  return (
    <header className='pt-14 sm:pt-20 md:pt-24 pb-10 md:pb-14 border-b border-zinc-200 dark:border-zinc-800 mb-10 md:mb-14 animate-fade-in-up'>
      {eyebrow && <p className='text-sm text-zinc-500 dark:text-zinc-400 mb-4'>{eyebrow}</p>}
      <h1 className='text-5xl sm:text-6xl md:text-7xl font-light leading-[1] tracking-tight'>
        <HighlightedText text={title} highlight={highlight} />
      </h1>
      {subtitle && (
        <p className='mt-6 text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl'>{subtitle}</p>
      )}
      {children}
    </header>
  );
}

export default PageHeader;
