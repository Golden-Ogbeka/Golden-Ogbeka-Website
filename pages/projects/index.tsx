import Image from 'next/image';
import Link from 'next/link';
import AppLayout from '../../components/layout/AppLayout';
import HeadElement from '../../components/layout/HeadElement';
import ProjectsData from '../../data/Projects';
import { useTranslation } from 'next-i18next';
import { trackEvent } from '../../utils/analytics';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function Projects() {
  const { t } = useTranslation(['common', 'projects']);
  return (
    <AppLayout>
      <HeadElement
        pageTitle='All Projects | Golden Ogbeka'
        description='A complete list of projects built by Golden Ogbeka'
      />
      <div className='pt-32 min-h-screen'>
        <div className='mb-12 animate-fade-in-up'>
          <h1 className='text-4xl md:text-5xl font-display font-semibold mb-4'>
            {t('projects:projects.title')}
          </h1>
          <p className='text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl'>
            {t('projects:projects.subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {ProjectsData.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <a
                className='minimal-card flex flex-col group overflow-hidden animate-fade-in-up'
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => trackEvent('click', 'project_card', project.title)}
              >
                <div className='relative w-full aspect-video bg-zinc-200 dark:bg-zinc-800 overflow-hidden'>
                  {project.screenshots && project.screenshots.length > 0 ? (
                    <Image
                      src={project.screenshots[0]}
                      alt={`${t(`projects:project.${project.slug}.title`, project.title)} thumbnail`}
                      layout='fill'
                      objectFit='cover'
                      className='transform group-hover:scale-105 transition-transform duration-500'
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={`${t(`projects:project.${project.slug}.title`, project.title)} thumbnail`}
                      layout='fill'
                      objectFit='cover'
                      className='transform group-hover:scale-105 transition-transform duration-500'
                    />
                  )}
                </div>
                <div className='p-6 flex-1 flex flex-col'>
                  <h2 className='text-xl font-semibold mb-2 group-hover:text-accent transition-colors'>
                    {t(`projects:project.${project.slug}.title`, project.title)}
                  </h2>
                  <p
                    className='text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4 flex-1'
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {t(`projects:project.${project.slug}.description`, project.description)}
                  </p>
                  <div className='flex flex-wrap gap-2 mt-auto'>
                    {project.coreTools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className='text-xs font-medium pr-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-300'
                      >
                        {tool}
                      </span>
                    ))}
                    {project.coreTools.length > 3 && (
                      <span className='text-xs font-medium px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-300'>
                        +{project.coreTools.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'projects'])),
    },
  };
}
