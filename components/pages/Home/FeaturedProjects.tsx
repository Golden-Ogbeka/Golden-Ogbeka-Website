import Image from 'next/image';
import Link from 'next/link';
import FeaturedProjectsData from '../../../data/FeaturedProjects';
import ProjectsData from '../../../data/Projects';
import { useTranslation } from 'next-i18next';
import { trackEvent } from '../../../utils/analytics';
import SectionHeader from '../../reusable/SectionHeader/SectionHeader';
import ViewAllLink from '../../reusable/ViewAllLink/ViewAllLink';

function ArrowUpRight() {
  return (
    <svg
      className='w-5 h-5 shrink-0 text-zinc-400 group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:-scale-x-100'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d='M7 17 17 7M9 7h8v8' />
    </svg>
  );
}

export default function FeaturedProjects() {
  const { t } = useTranslation(['common', 'home', 'projects']);

  const viewAll = (
    <ViewAllLink
      href='/projects'
      label={t('home:featured.viewAll')}
      count={ProjectsData.length}
      trackLabel='View All Projects'
    />
  );

  return (
    <section aria-labelledby='work-title' className='reveal pt-24 md:pt-32'>
      <SectionHeader
        id='work-title'
        title={t('home:featured.title')}
        highlight={t('home:featured.highlight')}
        subtitle={t('home:featured.subtitle')}
        action={viewAll}
      />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {FeaturedProjectsData.map((project, index) => {
          const title = t(`projects:project.${project.slug}.title`, project.title);
          const big = index === 0;
          const src = project.screenshots && project.screenshots.length > 0 ? project.screenshots[0] : project.image;
          return (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <a
                className={`minimal-card group flex flex-col overflow-hidden ${big ? 'md:col-span-2 md:row-span-2' : ''}`}
                onClick={() => trackEvent('click', 'project_card', project.title)}
              >
                <div
                  className={`relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-800 ${
                    big ? 'aspect-[16/10] md:aspect-auto md:flex-1 md:min-h-[360px]' : 'aspect-[16/10]'
                  }`}
                >
                  <Image
                    src={src}
                    alt={t('home:featured.thumbnailAlt', { title })}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    sizes={big ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
                    className='transition-transform duration-500 group-hover:scale-105'
                    priority={index === 0}
                  />
                </div>
                <div className='p-6 flex gap-4 justify-between'>
                  <div className='min-w-0'>
                    <p className='text-xs text-zinc-500 dark:text-zinc-400 mb-1.5 truncate'>
                      {project.coreTools.slice(0, 3).join(' · ')}
                    </p>
                    <h3
                      className={`leading-snug group-hover:text-accent transition-colors ${big ? 'text-2xl md:text-3xl' : 'text-xl'}`}
                    >
                      {title}
                    </h3>
                    <p className={`mt-2 text-sm text-zinc-600 dark:text-zinc-400 ${big ? 'line-clamp-3' : 'line-clamp-2'}`}>
                      {t(`projects:project.${project.slug}.description`, project.description)}
                    </p>
                  </div>
                  <ArrowUpRight />
                </div>
              </a>
            </Link>
          );
        })}
      </div>

      <div className='mt-10 md:hidden'>{viewAll}</div>
    </section>
  );
}
