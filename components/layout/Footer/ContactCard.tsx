import React from 'react';
import { trackEvent } from '../../../utils/analytics';

function ContactCard({ text, value, href }: { text: string; value: string; href: string }) {
  const external = href.startsWith('http');
  return (
    <a
      className='group flex items-center justify-between gap-4 py-4 border-b border-zinc-200 dark:border-zinc-800 rounded-sm'
      href={href}
      target={external ? '_blank' : undefined}
      rel='noreferrer'
      onClick={() => trackEvent('click', 'contact', text)}
    >
      <span className='text-zinc-900 dark:text-zinc-100'>{text}</span>
      <span className='flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-accent transition-colors'>
        <span className='link-underline' dir='ltr'>{value}</span>
        <svg
          className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 17 17 7M9 7h8v8' />
        </svg>
      </span>
    </a>
  );
}

export default ContactCard;
