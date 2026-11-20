import { Dialog } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import { trackEvent } from '../../../utils/analytics';

interface ValueImpactModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  organization: string;
  intro: string;
  points: string[];
  /** Raw date from data, e.g. "October 2026" or "In Progress". */
  date?: string;
  /** Certificate file, if any. */
  link?: string;
}

/** Initials for the seal: the acronym in brackets if present (e.g. AWS), otherwise capitalised words. */
function sealInitials(organization: string): string {
  const bracket = organization.match(/\(([^)]+)\)/);
  if (bracket) {
    const letters = bracket[1].replace(/[^A-Za-z]/g, '');
    if (letters.length >= 2 && letters.length <= 5) return letters.toUpperCase();
  }
  const words = organization
    .replace(/\([^)]*\)/g, '')
    .split(/[\s,:-]+/)
    .filter((w) => /^[A-Z]/.test(w));
  return words
    .map((w) => w[0])
    .join('')
    .slice(0, 4);
}

function ValueImpactModal({ open, onClose, title, organization, intro, points, date, link }: ValueImpactModalProps) {
  const { t } = useTranslation(['certifications']);
  const inProgress = date === 'In Progress';

  return (
    <Dialog open={open} onClose={onClose} className='relative z-50'>
      <div className='fixed inset-0 bg-darkBg/60 backdrop-blur-sm modal-backdrop-in' aria-hidden='true' />

      <div className='fixed inset-0 flex items-end sm:items-center justify-center sm:p-6'>
        <Dialog.Panel className='modal-panel-in relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-[28px] sm:rounded-[24px] bg-lightBg dark:bg-darkCard border border-zinc-200 dark:border-zinc-800 shadow-2xl'>
          {/* Soft gold glow and grab handle (mobile sheet) */}
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -top-24 -right-24 rtl:right-auto rtl:-left-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl'
          />
          <div aria-hidden='true' className='sm:hidden mx-auto mt-3 w-10 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700' />

          <button
            type='button'
            onClick={onClose}
            aria-label={t('certifications:close')}
            className='absolute top-4 right-4 rtl:right-auto rtl:left-4 z-10 w-10 h-10 grid place-items-center rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d='M6 18 18 6M6 6l12 12' />
            </svg>
          </button>

          <div className='relative px-6 sm:px-10 pt-6 sm:pt-10 pb-8'>
            {/* Header */}
            <div className='flex items-start gap-5 pr-10 rtl:pr-0 rtl:pl-10'>
              <div
                aria-hidden='true'
                className='modal-seal-in shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full grid place-items-center border-2 border-accent/60 outline outline-1 outline-offset-4 outline-accent/30 text-accent font-display text-lg sm:text-xl tracking-wide'
              >
                {sealInitials(organization)}
              </div>
              <div className='min-w-0'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.14em] text-accent'>
                  {t('certifications:benefitHeading')}
                </p>
                <Dialog.Title className='mt-2 text-2xl sm:text-3xl font-light leading-tight'>{title}</Dialog.Title>
                <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>
                  {organization}
                  {date && (
                    <>
                      <span aria-hidden='true'> · </span>
                      <span className={inProgress ? 'text-accent font-medium' : ''}>
                        {inProgress ? t('certifications:inProgress') : date}
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Intro as a pull quote */}
            <blockquote className='mt-8 border-l-2 rtl:border-l-0 rtl:border-r-2 border-accent pl-5 rtl:pl-0 rtl:pr-5 font-display italic text-lg sm:text-xl leading-relaxed text-zinc-800 dark:text-zinc-200'>
              {intro}
            </blockquote>

            {/* Benefits as ledger rows */}
            <ol className='mt-8 border-t border-zinc-200 dark:border-zinc-800'>
              {points.map((point, i) => (
                <li
                  key={i}
                  className='grid grid-cols-[3rem_1fr] gap-3 py-4 border-b border-zinc-200 dark:border-zinc-800 animate-fade-in-up'
                  style={{ animationDelay: `${0.15 + i * 0.08}s` }}
                >
                  <span className='font-display text-2xl font-light text-accent tabular-nums leading-none pt-0.5' aria-hidden='true'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className='text-zinc-700 dark:text-zinc-300 leading-relaxed'>{point}</span>
                </li>
              ))}
            </ol>

            {link && link !== '#' && (
              <div className='mt-8 flex justify-end'>
                <a
                  href={link}
                  target='_blank'
                  rel='noreferrer'
                  onClick={() => trackEvent('click', 'certification', `${title} - from value impact`)}
                  className='inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors'
                >
                  {t('certifications:viewCertificate')}
                  <svg className='w-4 h-4 rtl:-scale-x-100' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 17 17 7M9 7h8v8' />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default ValueImpactModal;
