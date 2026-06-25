import Image from 'next/image';
import Link from 'next/link';
import FeaturedProjectsData from '../../../data/FeaturedProjects';
import { useTranslation } from 'next-i18next';
import { trackEvent } from '../../../utils/analytics';

export default function FeaturedProjects() {
  const { t } = useTranslation(['common', 'home', 'projects']);
  const featuredProjects = FeaturedProjectsData;

  return (
    <section className='py-20'>
      <div className='flex flex-col md:flex-row md:items-end justify-between mb-12'>
        <div className='max-w-2xl'>
          <h2 className='text-3xl md:text-4xl font-display font-semibold mb-4'>
            {t('home:featured.title')}
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400 text-lg'>
            {t('home:featured.subtitle')}
          </p>
        </div>
        <Link href='/projects'>
          <a className='hidden md:inline-flex justify-center mt-6 md:mt-0 items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors' onClick={() => trackEvent('click', 'navigation', 'View All Projects')}>
            {t('home:featured.viewAll')}
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </a>
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {featuredProjects.map((project, index) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <a className='minimal-card flex flex-col group overflow-hidden'>
              <div className='relative w-full aspect-video bg-zinc-200 dark:bg-zinc-800 overflow-hidden'>
                {project.screenshots && project.screenshots.length > 0 ? (
                  <Image
                    src={project.screenshots[0]}
                    alt={t('home:featured.thumbnailAlt', { title: t(`projects:project.${project.slug}.title`, project.title) })}
                    className='object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500'
                    layout='fill'
                    sizes='(max-width: 768px) 100vw, 50vw'
                    priority={index === 0}
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={t('home:featured.thumbnailAlt', { title: t(`projects:project.${project.slug}.title`, project.title) })}
                    layout='fill'
                    objectFit='cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                    className='transform group-hover:scale-105 transition-transform duration-500'
                    priority={index === 0}
                  />
                )}
              </div>
              <div className='p-8 flex-1 flex flex-col'>
                <h3 className='text-2xl font-semibold mb-3 group-hover:text-accent transition-colors'>
                  {t(`projects:project.${project.slug}.title`, project.title)}
                </h3>
                <p className='text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-6 flex-1 text-lg'>
                  {t(`projects:project.${project.slug}.description`, project.description)}
                </p>
                <div className='flex flex-wrap gap-2 mt-auto'>
                  {project.coreTools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className='text-sm font-medium pr-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300'
                    >
                      {tool}
                    </span>
                  ))}
                  {project.coreTools.length > 3 && (
                    <span className='text-sm font-medium px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300'>
                      {t('home:featured.moreTools', { count: project.coreTools.length - 3 })}
                    </span>
                  )}
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>

      <Link href='/projects'>
        <a className='md:hidden inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors' onClick={() => trackEvent('click', 'navigation', 'View All Projects')}>
          {t('home:featured.viewAll')}
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 8l4 4m0 0l-4 4m4-4H3'
            />
          </svg>
        </a>
      </Link>
    </section>
  );
}
