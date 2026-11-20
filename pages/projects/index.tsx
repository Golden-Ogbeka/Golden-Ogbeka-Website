import AppLayout from '../../components/layout/AppLayout';
import HeadElement from '../../components/layout/HeadElement';
import PageHeader from '../../components/reusable/PageHeader/PageHeader';
import ProjectsData from '../../data/Projects';
import { useTranslation } from 'next-i18next';
import ProjectsExplorer from '../../components/pages/Project/ProjectsExplorer';
export default function Projects() {
  const { t } = useTranslation(['common', 'projects']);
  return (
    <AppLayout>
      <HeadElement
        pageTitle='All Projects | Golden Ogbeka'
        description='A complete list of projects built by Golden Ogbeka'
        breadcrumb={[
          { name: 'Golden Ogbeka', url: '/' },
          { name: t('common:nav.projects'), url: '/projects' },
        ]}
      />
      <div className='min-h-screen'>
        <PageHeader
          eyebrow={t('projects:count', { count: ProjectsData.length })}
          title={t('projects:title')}
          highlight={t('projects:titleHighlight')}
          subtitle={t('projects:subtitle')}
        />

        <ProjectsExplorer projects={ProjectsData} />
      </div>
    </AppLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const fs = require('fs');
  const path = require('path');

  function loadNs(ns: string): Record<string, unknown> {
    const fp = path.resolve(process.cwd(), `public/locales/${locale}/${ns}.json`);
    return JSON.parse(fs.readFileSync(fp, 'utf8'));
  }

  const initialI18nStore: Record<string, Record<string, unknown>> = {};
  initialI18nStore[locale] = {
    common: loadNs('common'),
    projects: loadNs('projects'),
  };

  return {
    props: {
      _nextI18Next: {
        initialI18nStore,
        initialLocale: locale,
        ns: ['common', 'projects'],
        userConfig: {
          i18n: { defaultLocale: 'en', locales: ['en', 'zh', 'fr', 'de', 'es', 'ja', 'ko', 'pt', 'ru', 'ar'] },
        },
      },
    },
  };
}
