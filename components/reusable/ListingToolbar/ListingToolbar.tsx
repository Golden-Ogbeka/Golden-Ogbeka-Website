import React from 'react';

export type ListingView = 'grid' | 'index';

interface FilterOption {
  value: string;
  label: string;
}

interface ListingToolbarProps {
  filterLabel: string;
  options: FilterOption[];
  active: string;
  onFilter: (value: string) => void;
  view: ListingView;
  onView: (view: ListingView) => void;
  viewGroupLabel: string;
  gridLabel: string;
  indexLabel: string;
  /** e.g. "38 projects" — announced politely when it changes. */
  resultText: string;
  /** Extra controls placed before the view switch (e.g. sort). */
  extra?: React.ReactNode;
}

function GridIcon() {
  return (
    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
      <rect x='4' y='4' width='7' height='7' rx='1.5' strokeWidth={1.75} />
      <rect x='13' y='4' width='7' height='7' rx='1.5' strokeWidth={1.75} />
      <rect x='4' y='13' width='7' height='7' rx='1.5' strokeWidth={1.75} />
      <rect x='13' y='13' width='7' height='7' rx='1.5' strokeWidth={1.75} />
    </svg>
  );
}

function IndexIcon() {
  return (
    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
      <path strokeLinecap='round' strokeWidth={1.75} d='M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01' />
    </svg>
  );
}

/**
 * One-line listing toolbar: a horizontally scrolling filter rail on the left,
 * result count + optional extra control + icon-only view switch on the right.
 */
function ListingToolbar({
  filterLabel,
  options,
  active,
  onFilter,
  view,
  onView,
  viewGroupLabel,
  gridLabel,
  indexLabel,
  resultText,
  extra,
}: ListingToolbarProps) {
  return (
    <div className='-mt-4 md:-mt-6 mb-8 md:mb-10 pb-3 border-b border-zinc-200 dark:border-zinc-800'>
      <div className='flex flex-col md:flex-row md:items-center gap-3 md:gap-6'>
        <div role='group' aria-label={filterLabel} className='min-w-0 flex-1 -mx-1'>
          <div className='no-scrollbar fade-x flex gap-1 overflow-x-auto px-1 pr-8 rtl:pr-1 rtl:pl-8'>
            {options.map((option) => {
              const isActive = active === option.value;
              return (
                <button
                  key={option.value || 'all'}
                  type='button'
                  aria-pressed={isActive}
                  onClick={() => onFilter(option.value)}
                  className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 rounded-full text-sm transition-colors ${
                    isActive
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className='flex items-center justify-between md:justify-end gap-3 shrink-0'>
          <span className='text-sm text-zinc-500 dark:text-zinc-400 tabular-nums' aria-live='polite'>
            {resultText}
          </span>
          <div className='flex items-center gap-2'>
            {extra}
            <div
              role='group'
              aria-label={viewGroupLabel}
              className='inline-flex p-0.5 rounded-full border border-zinc-200 dark:border-zinc-700'
            >
              {(
                [
                  ['grid', gridLabel, <GridIcon key='g' />],
                  ['index', indexLabel, <IndexIcon key='i' />],
                ] as [ListingView, string, React.ReactNode][]
              ).map(([value, label, icon]) => (
                <button
                  key={value}
                  type='button'
                  aria-pressed={view === value}
                  aria-label={label}
                  title={label}
                  onClick={() => onView(value)}
                  className={`w-9 h-9 grid place-items-center rounded-full transition-colors ${
                    view === value
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingToolbar;
