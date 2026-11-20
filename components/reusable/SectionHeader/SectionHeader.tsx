import React from 'react';
import HighlightedText from '../HighlightedText/HighlightedText';

interface SectionHeaderProps {
  id?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  action?: React.ReactNode;
}

/** Homepage section heading: serif title with an italic accent word, optional subtitle and action. */
function SectionHeader({ id, title, highlight, subtitle, action }: SectionHeaderProps) {
  return (
    <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12'>
      <div className='max-w-2xl'>
        <h2 id={id} className='text-4xl sm:text-5xl font-light leading-[1.05]'>
          <HighlightedText text={title} highlight={highlight} />
        </h2>
        {subtitle && (
          <p className='mt-4 text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed'>{subtitle}</p>
        )}
      </div>
      {action && <div className='hidden md:block shrink-0'>{action}</div>}
    </div>
  );
}

export default SectionHeader;
