import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppLayout from '../../components/layout/AppLayout';
import HeadElement from '../../components/layout/HeadElement';
import dynamic from 'next/dynamic';
import VideoDemo from '../../components/pages/Project/VideoDemo';

const ImageGallery = dynamic(
  () => import('../../components/pages/Project/ImageGallery'),
  { ssr: false }
);
import ProjectsData, { ProjectType } from '../../data/Projects';
import { useTranslation } from 'next-i18next';
import { trackEvent } from '../../utils/analytics';

interface ProjectDetailsProps {
  project: ProjectType;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const { t } = useTranslation(['common', 'projects']);
  const router = useRouter();
  if (!project) return null;

  const projectUrl = `${router.locale === router.defaultLocale ? '' : '/' + router.locale}/projects/${project.slug}`;

  return (
    <AppLayout>
      <HeadElement
        pageTitle={`${t(`projects:project.${project.slug}.title`, project.title)} | Golden Ogbeka`}
        description={t(`projects:project.${project.slug}.description`, project.description)}
        breadcrumb={[
          { name: 'Golden Ogbeka', url: '/' },
          { name: t('common:nav.projects'), url: '/projects' },
          { name: t(`projects:project.${project.slug}.title`, project.title), url: projectUrl },
        ]}
        softwareApplication={{
          name: t(`projects:project.${project.slug}.title`, project.title),
          description: t(`projects:project.${project.slug}.description`, project.description),
          url: projectUrl,
          image: typeof project.image === 'string' ? project.image : project.image.src,
        }}
      />

      <article className='pt-32 min-h-screen'>
        <Link href='/projects'>
          <a className='inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 mb-8 transition-colors' onClick={() => trackEvent('click', 'navigation', 'Back to Projects')}>
            <svg
              className='w-4 h-4 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
            {t('projectDetail.back')}
          </a>
        </Link>

        <header className='mb-12 animate-fade-in-up'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6'>
            {t(`projects:project.${project.slug}.title`, project.title)}
          </h1>
          <p className='text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed'>
            {t(`projects:project.${project.slug}.description`, project.description)}
          </p>

          <div className='flex flex-wrap gap-4 mt-8'>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center px-5 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors'
                onClick={() => trackEvent('click', 'project_link', `${project.title} - Live Preview`)}
              >
                <svg
                  className='w-4 h-4 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
                {t('projectDetail.livePreview')}
              </a>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center px-5 py-2.5 minimal-card font-medium'
                onClick={() => trackEvent('click', 'project_link', `${project.title} - Code`)}
              >
                <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 24 24'>
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                  />
                </svg>
                {t('projectDetail.code')}
              </a>
            )}
            {project.designLink && (
              <a
                href={project.designLink}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center px-5 py-2.5 minimal-card font-medium'
                onClick={() => trackEvent('click', 'project_link', `${project.title} - Design`)}
              >
                {t('projectDetail.design')}
              </a>
            )}
            {project.apiLink && (
              <a
                href={project.apiLink}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center px-5 py-2.5 minimal-card font-medium'
                onClick={() => trackEvent('click', 'project_link', `${project.title} - API Docs`)}
              >
                {t('projectDetail.apiDocs')}
              </a>
            )}
          </div>
        </header>

        <div
          className='grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in-up'
          style={{ animationDelay: '0.1s' }}
        >
          <div className='md:col-span-2 space-y-12'>
            <section>
              <h2 className='text-2xl font-display font-semibold mb-4'>{t('projectDetail.keyFeatures')}</h2>
              <ul className='space-y-3'>
                {project.features.map((feature, idx) => (
                  <li key={idx} className='flex items-start'>
                    <svg
                      className='w-5 h-5 text-zinc-400 mt-1 mr-3 shrink-0'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span className='text-zinc-700 dark:text-zinc-300'>{t(`projects:project.${project.slug}.features.${idx}`, feature)}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className='space-y-8'>
            <div className='p-6 minimal-card'>
              <h3 className='text-lg font-semibold mb-4'>{t('projectDetail.coreTools')}</h3>
              <div className='grid grid-cols-3 gap-5'>
                {project.coreTools.map((tool, idx) => (
                  <span
                    key={tool}
                    className='bg-zinc-100 dark:bg-zinc-800 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300'
                  >
                    {t(`projects:project.${project.slug}.coreTools.${idx}`, tool)}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <ImageGallery screenshots={project.screenshots} projectName={project.title} />
        )}

        <VideoDemo videoLink={project.videoDemoLink} />
      </article>
    </AppLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = locales!.flatMap((locale) =>
    ProjectsData.map((project) => ({
      params: { slug: project.slug },
      locale,
    }))
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const project = ProjectsData.find((p) => p.slug === params?.slug);
  const lng = locale || 'en';

  const fs = require('fs');
  const path = require('path');

  function loadNs(ns: string): Record<string, unknown> {
    const fp = path.resolve(process.cwd(), `public/locales/${lng}/${ns}.json`);
    return JSON.parse(fs.readFileSync(fp, 'utf8'));
  }

  const common = loadNs('common');
  const projects = loadNs('projects');

  // keep only the current project's keys
  const prefix = `project.${project?.slug}.`;
  for (const key of Object.keys(projects)) {
    if (key.startsWith('project.') && !key.startsWith(prefix)) {
      delete projects[key];
    }
  }

  const initialI18nStore: Record<string, Record<string, unknown>> = {};
  initialI18nStore[lng] = { common, projects };

  return {
    props: {
      project,
      _nextI18Next: {
        initialI18nStore,
        initialLocale: lng,
        ns: ['common', 'projects'],
        userConfig: {
          i18n: { defaultLocale: 'en', locales: ['en', 'zh', 'fr', 'de', 'es', 'ja', 'ko', 'pt', 'ru', 'ar'] },
        },
      },
    },
  };
};
