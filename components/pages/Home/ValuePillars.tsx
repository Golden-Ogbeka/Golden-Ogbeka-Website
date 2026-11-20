import { useTranslation } from 'next-i18next';
import ValuePillarsData from '../../../data/ValuePillars';
import SectionHeader from '../../reusable/SectionHeader/SectionHeader';

/** "How I add value": leadership, governance and engineering pillars. */
export default function ValuePillars() {
  const { t } = useTranslation(['home']);

  return (
    <section aria-labelledby='pillars-title' className='reveal pt-24 md:pt-32'>
      <SectionHeader
        id='pillars-title'
        title={t('home:pillars.title')}
        highlight={t('home:pillars.highlight')}
        subtitle={t('home:pillars.subtitle')}
      />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {ValuePillarsData.map((pillar) => {
          const points = t(`home:pillars.${pillar.id}.points`, {
            returnObjects: true,
            defaultValue: pillar.points,
          }) as string[];
          return (
            <article key={pillar.id} className='soft-card p-7 md:p-8'>
              <p className='text-xs font-semibold uppercase tracking-[0.1em] text-accent'>
                {t(`home:pillars.${pillar.id}.eyebrow`, pillar.eyebrow)}
              </p>
              <h3 className='text-[1.75rem] leading-tight mt-3 mb-3'>{t(`home:pillars.${pillar.id}.title`, pillar.title)}</h3>
              <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed'>
                {t(`home:pillars.${pillar.id}.description`, pillar.description)}
              </p>
              <ul className='mt-5 border-t border-zinc-200 dark:border-zinc-800'>
                {(Array.isArray(points) ? points : pillar.points).map((point) => (
                  <li key={point} className='py-2.5 text-sm text-zinc-700 dark:text-zinc-300 border-b border-zinc-200 dark:border-zinc-800'>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
