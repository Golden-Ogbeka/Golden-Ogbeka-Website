import type { NextPage } from 'next';
import React, { useState } from 'react';
import AppLayout from '../../components/layout/AppLayout';
import HeadElement from '../../components/layout/HeadElement';
import SectionDivider from '../../components/layout/SectionDivider';
import OpenSourceData from '../../data/OpenSource';
import { useTranslation } from 'next-i18next';
import { trackEvent } from '../../utils/analytics';
import { reveal } from '../../functions/animation';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const OpenSourcePage: NextPage = () => {
  const { t } = useTranslation(['common', 'openSource']);
  const [filterTech, setFilterTech] = useState<string>('');
  const [sortBy, setSortBy] = useState<'stars' | 'forks'>('stars');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', reveal);
      reveal();
    }
  }, []);

  // Get all unique technologies from repositories
  const allTechs = Array.from(
    new Set(OpenSourceData.flatMap((repo) => repo.technologies)),
  ).sort();

  // Filter and sort repositories
  const filteredRepos = OpenSourceData.filter((repo) => {
    if (!filterTech) return true;
    return repo.technologies.includes(filterTech);
  }).sort((a, b) => {
    if (sortBy === 'stars') {
      return b.stars - a.stars;
    } else if (sortBy === 'forks') {
      return b.forks - a.forks;
    }
    return 0;
  });

  return (
    <AppLayout>
      <HeadElement
        pageTitle='Open Source Projects | Golden Ogbeka'
        description='A collection of open source repositories, libraries, and templates built and shared by Golden Ogbeka with the developer community.'
      />

      {/* Hero Section */}
      <div className='min-h-screen pt-32 pb-12'>
        <div className='mb-12'>
          <h1 className='text-5xl md:text-6xl font-outfit font-bold text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight'>
            {t('openSource:title')}
          </h1>
          <p className='text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed'>
            {t('openSource:subtitle')}
          </p>
        </div>

        {/* Filters Section */}
        <div className='mb-12 p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Technology Filter */}
            <div>
              <label className='block text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3'>
                {t('openSource:filterByTech')}
              </label>
              <select
                value={filterTech}
                onChange={(e) => setFilterTech(e.target.value)}
                className='w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-accent'
              >
                <option value=''>{t('openSource:allTechs')}</option>
                {allTechs.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className='block text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3'>
                {t('openSource:sortBy')}
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'stars' | 'forks')}
                className='w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-accent'
              >
                <option value='stars'>{t('openSource:mostStars')}</option>
                <option value='forks'>{t('openSource:mostForks')}</option>
              </select>
            </div>
          </div>

          {/* Active Filter Badge */}
          {filterTech && (
            <div className='mt-4 flex items-center gap-2'>
              <span className='text-sm text-zinc-600 dark:text-zinc-400'>
                {t('openSource:activeFilter')}
              </span>
              <span className='inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium'>
                {filterTech}
                <button
                  onClick={() => setFilterTech('')}
                  className='hover:opacity-75 transition-opacity'
                >
                  ×
                </button>
              </span>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className='mb-8'>
          <p className='text-sm text-zinc-600 dark:text-zinc-400'>
            {t('openSource:showingResults')
              .replace('{count}', String(filteredRepos.length))
              .replace('{total}', String(OpenSourceData.length))}
          </p>
        </div>

        {/* Repositories Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredRepos.map((repo) => (
            <a
              key={repo.id}
              href={repo.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group block p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/10'
              onClick={() => trackEvent('click', 'open_source', repo.name)}
            >
              <div className='flex justify-between items-start mb-4 gap-2'>
                <h2 className='text-lg font-bold font-outfit text-zinc-900 dark:text-zinc-100 group-hover:text-accent transition-colors truncate flex-1'>
                  {t(`openSource:${repo.id}.name`, repo.name)}
                </h2>
                <svg
                  className='w-5 h-5 text-zinc-400 group-hover:text-accent transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </div>

              <p className='text-zinc-600 dark:text-zinc-400 mb-6 text-sm leading-relaxed line-clamp-3'>
                {t(`openSource:${repo.id}.description`, repo.description)}
              </p>

              <div className='flex flex-wrap gap-2 mb-6'>
                {repo.technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className='px-2.5 py-1 text-xs font-medium bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md'
                  >
                    {tech}
                  </span>
                ))}
                {repo.technologies.length > 3 && (
                  <span className='px-2.5 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-400'>
                    +{repo.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className='flex items-center gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400'>
                <div className='flex items-center gap-1.5'>
                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                  <span>{repo.stars}</span>
                </div>
                <div className='flex items-center gap-1.5'>
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
                    />
                  </svg>
                  <span>{repo.forks}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-zinc-600 dark:text-zinc-400 text-lg'>
              {t('openSource:noResults')}
            </p>
          </div>
        )}
      </div>

      <SectionDivider />
    </AppLayout>
  );
};

export default OpenSourcePage;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'openSource'])),
    },
  };
}
