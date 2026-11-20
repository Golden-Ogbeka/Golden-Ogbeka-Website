import OpenSourceData, { rankByUsefulness } from '../../../data/OpenSource';
import { trackEvent } from '../../../utils/analytics';
import { useTranslation } from 'next-i18next';
import SectionHeader from '../../reusable/SectionHeader/SectionHeader';
import ViewAllLink from '../../reusable/ViewAllLink/ViewAllLink';

function OpenSourceSection() {
  const { t } = useTranslation(['common', 'home', 'openSource']);
  const topRepos = rankByUsefulness(OpenSourceData).slice(0, 8);

  const viewAll = (
    <ViewAllLink
      href='/open-source'
      label={t('home:openSource.viewAll')}
      count={OpenSourceData.length}
      trackLabel='View All Open Source'
    />
  );

  return (
    <section id='opensource' aria-labelledby='opensource-title' className='reveal pt-24 md:pt-32'>
      <SectionHeader
        id='opensource-title'
        title={t('home:openSource.title')}
        highlight={t('home:openSource.highlight')}
        subtitle={t('home:openSource.subtitle')}
        action={viewAll}
      />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {topRepos.map((repo) => (
          <a
            key={repo.id}
            href={repo.url}
            target='_blank'
            rel='noopener noreferrer'
            className='minimal-card group flex flex-col p-6'
            onClick={() => trackEvent('click', 'open_source', repo.name)}
          >
            <div className='flex justify-between items-start gap-3 mb-3'>
              <h3 className='text-xl leading-snug break-words group-hover:text-accent transition-colors'>
                {t(`openSource:${repo.id}.name`, repo.name)}
              </h3>
              <svg
                className='w-4 h-4 mt-1.5 shrink-0 text-zinc-400 group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 17 17 7M9 7h8v8' />
              </svg>
            </div>
            <p className='text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-5'>
              {t(`openSource:${repo.id}.description`, repo.description)}
            </p>
            <div className='mt-auto flex items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400'>
              <span className='truncate'>{repo.technologies.slice(0, 2).join(' · ')}</span>
              <span className='flex items-center gap-3 shrink-0 tabular-nums'>
                <span className='flex items-center gap-1' aria-label={`${repo.stars} ${t('openSource:stars', 'stars')}`}>
                  <svg className='w-3.5 h-3.5' fill='currentColor' viewBox='0 0 20 20' aria-hidden='true'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                  {repo.stars}
                </span>
                <span className='flex items-center gap-1' aria-label={`${repo.forks} ${t('openSource:forks', 'forks')}`}>
                  <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 3v6a3 3 0 003 3h6a3 3 0 003-3V3M12 12v9M6 3a1.5 1.5 0 100 .01M18 3a1.5 1.5 0 100 .01M12 21a1.5 1.5 0 100-.01'
                    />
                  </svg>
                  {repo.forks}
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className='mt-10 md:hidden'>{viewAll}</div>
    </section>
  );
}

export default OpenSourceSection;
