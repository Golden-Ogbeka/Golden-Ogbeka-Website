import { useTranslation } from 'next-i18next';
import CareerMilestones from '../../../data/CareerMilestones';

const BAR_COUNT = 140;
const HIGHLIGHT_FROM = 126;

// Deterministic bar heights so server and client render the same waveform.
const BARS = Array.from({ length: BAR_COUNT }, (_, i) => {
  const envelope = 0.3 + 0.7 * Math.pow(i / BAR_COUNT, 0.7);
  const wave = Math.abs(Math.sin(i * 0.55) * 0.6 + Math.sin(i * 0.17) * 0.4);
  return Math.max(6, Math.round(wave * envelope * 56));
});

/** Decorative waveform of the career from 2019 to today, with milestone labels underneath. */
export default function CareerSignal() {
  const { t } = useTranslation(['home']);

  return (
    <section aria-label={t('home:signal.label')} className='reveal border-t border-zinc-200 dark:border-zinc-800 pt-7'>
      <div className='flex items-center gap-[3px] h-14' aria-hidden='true'>
        {BARS.map((h, i) => (
          <span
            key={i}
            className={`signal-bar flex-1 rounded-sm ${i >= HIGHLIGHT_FROM ? 'bg-accent' : 'bg-zinc-300 dark:bg-zinc-700'} ${
              i % 2 === 1 ? 'hidden sm:block' : ''
            }`}
            style={{ height: `${h}px`, animationDelay: `${(i * 0.03).toFixed(2)}s` }}
          />
        ))}
      </div>
      <ol className='mt-3 flex justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400'>
        {CareerMilestones.map((m, i) => (
          <li key={m.year} className={i % 2 === 1 ? 'hidden sm:block' : ''}>
            <span className='tabular-nums'>{m.year}</span> · {m.labelKey ? t(`home:signal.${m.labelKey}`, m.label) : m.label}
          </li>
        ))}
      </ol>
    </section>
  );
}
