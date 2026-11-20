import AppLayout from '../../components/layout/AppLayout';
import HeadElement from '../../components/layout/HeadElement';
import PageHeader from '../../components/reusable/PageHeader/PageHeader';
import Image from 'next/image';
import ExperiencesData from '../../data/Experiences';
import { useTranslation } from 'next-i18next';
import { trackEvent } from '../../utils/analytics';

function slugify(str: string): string {
  return str.toLowerCase().replace(/[()&]/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function slugifyCompany(str: string): string {
  return str.toLowerCase().replace(/\([^)]*\)/g, '').replace(/\s+/g, '-').replace(/\./g, '').replace(/-$/g, '');
}

function getExpKey(role: string, company: string): string {
  return `${slugify(role)}-${slugifyCompany(company)}`;
}

export default function Experiences() {
  const { t } = useTranslation(['common', 'experiences']);
  return (
    <AppLayout>
      <HeadElement
        pageTitle='Professional Experience | Golden Ogbeka'
        description='My professional work experience and roles.'
        breadcrumb={[
          { name: 'Golden Ogbeka', url: '/' },
          { name: t('common:nav.experience'), url: '/experiences' },
        ]}
      />
      <div className='min-h-screen'>
        <PageHeader
          eyebrow={t('experiences:count', { count: ExperiencesData.length })}
          title={t('experiences:title')}
          highlight={t('experiences:titleHighlight')}
          subtitle={t('experiences:subtitle')}
        />

        <ol>
          {ExperiencesData.map((exp, index) => {
            const key = getExpKey(exp.role, exp.company);
            const company = t(`experiences:experience.${key}.company`, exp.company);
            const isCurrent = /present/i.test(exp.date);
            const logo = (
              <span
                className={`relative w-10 h-10 shrink-0 rounded-lg overflow-hidden flex items-center justify-center ${
                  exp.logoDarkBackground ? 'bg-zinc-800' : 'bg-zinc-100 dark:bg-zinc-800'
                }`}
              >
                <Image
                  src={exp.companyLogo}
                  alt=''
                  width={40}
                  height={40}
                  className={`object-contain ${exp.invertCompanyLogoInDarkMode ? 'dark:invert' : ''}`}
                />
              </span>
            );
            return (
              <li
                key={index}
                className='grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-b border-zinc-200 dark:border-zinc-800 first:pt-0 animate-fade-in-up'
                style={{ animationDelay: `${Math.min(index, 6) * 0.06}s` }}
              >
                <div className='md:pt-2'>
                  <p className='text-sm text-zinc-500 dark:text-zinc-400 tabular-nums'>{exp.date}</p>
                  {isCurrent && (
                    <span className='inline-block mt-2 text-[11px] font-semibold uppercase tracking-wide text-accent border border-accent rounded-full px-2 py-0.5'>
                      {t('experiences:now')}
                    </span>
                  )}
                </div>
                <article>
                  <h2 className='text-3xl leading-tight'>{t(`experiences:experience.${key}.role`, exp.role)}</h2>
                  {exp.companyLink ? (
                    <a
                      href={exp.companyLink}
                      target='_blank'
                      rel='noreferrer'
                      className='mt-3 inline-flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors rounded-md'
                      onClick={() => trackEvent('click', 'company_link', exp.company)}
                    >
                      {logo}
                      {company}
                    </a>
                  ) : (
                    <div className='mt-3 inline-flex items-center gap-3 text-zinc-600 dark:text-zinc-400'>
                      {logo}
                      {company}
                    </div>
                  )}
                  <ul className='mt-6 space-y-3'>
                    {exp.tasksAchieved.map((task, idx) => (
                      <li key={idx} className='flex items-start gap-3'>
                        <span aria-hidden='true' className='w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0'></span>
                        <span className='text-zinc-700 dark:text-zinc-300 leading-relaxed'>
                          {t(`experiences:experience.${key}.tasks.${idx}`, task)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ol>
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
    experiences: loadNs('experiences'),
  };

  return {
    props: {
      _nextI18Next: {
        initialI18nStore,
        initialLocale: locale,
        ns: ['common', 'experiences'],
        userConfig: {
          i18n: { defaultLocale: 'en', locales: ['en', 'zh', 'fr', 'de', 'es', 'ja', 'ko', 'pt', 'ru', 'ar'] },
        },
      },
    },
  };
}
