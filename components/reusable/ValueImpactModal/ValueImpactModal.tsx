import { Dialog } from '@headlessui/react';
import { useTranslation } from 'next-i18next';

interface ValueImpactModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  organization: string;
  intro: string;
  points: string[];
}

function ValueImpactModal({ open, onClose, title, organization, intro, points }: ValueImpactModalProps) {
  const { t } = useTranslation(['certifications']);

  return (
    <Dialog open={open} onClose={onClose} className='relative z-50'>
      <div className='fixed inset-0 bg-black/60 backdrop-blur-sm' aria-hidden='true' />

      <div className='fixed inset-0 flex items-center justify-center p-4 overflow-y-auto'>
        <Dialog.Panel className='minimal-card relative w-full max-w-2xl my-8 p-6 sm:p-8 max-h-[85vh] overflow-y-auto'>
          <button
            type='button'
            onClick={onClose}
            aria-label={t('certifications:close')}
            className='absolute top-4 right-4 p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-md transition-colors'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>

          <span className='inline-block text-xs font-semibold uppercase tracking-wide text-accent mb-3 pr-10'>
            {t('certifications:benefitHeading')}
          </span>

          <Dialog.Title className='text-xl sm:text-2xl font-display font-semibold mb-1 pr-10'>
            {title}
          </Dialog.Title>
          <p className='text-sm text-zinc-600 dark:text-zinc-400 mb-5'>{organization}</p>

          <p className='text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6'>{intro}</p>

          <ul className='space-y-3'>
            {points.map((point: string, pointIndex: number) => (
              <li key={pointIndex} className='flex items-start gap-3'>
                <svg
                  className='w-5 h-5 mt-0.5 shrink-0 text-accent'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <span className='text-zinc-700 dark:text-zinc-300 leading-relaxed'>{point}</span>
              </li>
            ))}
          </ul>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default ValueImpactModal;
