import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

export interface PreviewIndexItem {
  key: string;
  href: string;
  title: string;
  /** Short line under/next to the title, e.g. tools or "Faith · Oct 2026". */
  meta: string;
  image: StaticImageData | string;
  onClick?: () => void;
}

function ArrowUpRight({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 rtl:-scale-x-100 ${className}`} fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d='M7 17 17 7M9 7h8v8' />
    </svg>
  );
}

/**
 * Editorial numbered list. On large screens a tilted preview of the hovered item follows the cursor;
 * on smaller screens each row shows a small inline thumbnail instead.
 */
function PreviewIndexList({ items, startNumber = 1 }: { items: PreviewIndexItem[]; startNumber?: number }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const previewRef = useRef<HTMLLIElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = previewRef.current;
    const list = listRef.current;
    if (!el || !list) return;
    const box = list.getBoundingClientRect();
    el.style.transform = `translate(${e.clientX - box.left + 24}px, ${e.clientY - box.top - 110}px) rotate(-3deg)`;
  };

  const active = hovered !== null ? items[hovered] : null;

  return (
    <ol ref={listRef} onMouseMove={onMove} onMouseLeave={() => setHovered(null)} className='relative'>
      <li
        ref={previewRef}
        aria-hidden='true'
        className={`pointer-events-none absolute left-0 top-0 z-20 hidden lg:block w-80 aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 transition-opacity duration-200 list-none ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {active && <Image key={active.key} src={active.image} alt='' layout='fill' objectFit='cover' sizes='320px' className='gallery-ambient' />}
      </li>

      {items.map((item, i) => (
        <li
          key={item.key}
          className='border-b border-zinc-200 dark:border-zinc-800 animate-fade-in-up'
          style={{ animationDelay: `${Math.min(i, 10) * 0.04}s` }}
        >
          <Link href={item.href}>
            <a
              className='group grid grid-cols-[2.25rem_1fr_auto] md:grid-cols-[3.5rem_1fr_minmax(0,16rem)_auto] items-center gap-3 sm:gap-4 md:gap-6 py-5 md:py-7 rounded-sm'
              onMouseEnter={() => setHovered(i)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              onClick={item.onClick}
            >
              <span className='font-display text-base sm:text-lg md:text-xl font-light text-zinc-400 tabular-nums group-hover:text-accent transition-colors'>
                {String(startNumber + i).padStart(2, '0')}
              </span>
              <span className='min-w-0'>
                <span className='block font-display text-lg sm:text-2xl md:text-[2rem] font-light leading-tight transition-transform duration-300 group-hover:translate-x-2 rtl:group-hover:-translate-x-2'>
                  {item.title}
                </span>
                <span className='md:hidden block mt-1 text-xs text-zinc-500 dark:text-zinc-400 truncate'>{item.meta}</span>
              </span>
              <span className='hidden md:block text-sm text-zinc-500 dark:text-zinc-400 truncate'>{item.meta}</span>
              <span className='flex items-center gap-3'>
                <span className='relative lg:hidden w-14 h-10 sm:w-20 sm:h-14 rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700'>
                  <Image src={item.image} alt='' layout='fill' objectFit='cover' sizes='80px' />
                </span>
                <ArrowUpRight className='hidden sm:block text-zinc-400 group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
              </span>
            </a>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default PreviewIndexList;
