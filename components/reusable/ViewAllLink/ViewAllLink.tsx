import Link from 'next/link';
import { trackEvent } from '../../../utils/analytics';

interface ViewAllLinkProps {
  href: string;
  label: string;
  count?: number;
  trackLabel: string;
  className?: string;
}

/**
 * Quiet "view all" link used in section headers: animated underline,
 * an item-count pill and an arrow in a circle that fills on hover.
 */
function ViewAllLink({ href, label, count, trackLabel, className = '' }: ViewAllLinkProps) {
  return (
    <Link href={href}>
      <a
        className={`group inline-flex items-center gap-3 text-sm font-medium text-zinc-900 dark:text-zinc-100 rounded-full ${className}`}
        onClick={() => trackEvent('click', 'navigation', trackLabel)}
      >
        <span className='link-underline pb-0.5'>{label}</span>
        {typeof count === 'number' && (
          <span className='text-xs tabular-nums px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'>
            {count}
          </span>
        )}
        <span
          aria-hidden='true'
          className='w-9 h-9 shrink-0 rounded-full border border-zinc-300 dark:border-zinc-700 grid place-items-center transition-colors duration-300 group-hover:bg-zinc-900 group-hover:border-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:border-zinc-100 dark:group-hover:text-zinc-900'
        >
          <svg
            className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 12h14m-6-6 6 6-6 6' />
          </svg>
        </span>
      </a>
    </Link>
  );
}

export default ViewAllLink;
