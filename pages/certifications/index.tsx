import AppLayout from '../../components/layout/AppLayout';
import HeadElement from '../../components/layout/HeadElement';
import PageHeader from '../../components/reusable/PageHeader/PageHeader';
import ValueImpactModal from '../../components/reusable/ValueImpactModal/ValueImpactModal';
import CertificationsData from '../../data/Certifications';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { trackEvent } from '../../utils/analytics';
export default function Certifications() {
  const { t } = useTranslation(['common', 'certifications']);
  const [benefitIndex, setBenefitIndex] = useState<number | null>(null);
  // Last opened certificate stays rendered while the modal plays its exit animation.
  const [shownIndex, setShownIndex] = useState(0);
  return (
    <AppLayout>
      <HeadElement
        pageTitle='Certifications & Education | Golden Ogbeka'
        description='Academic degrees, professional certifications, and training achievements by Golden Ogbeka, Senior Software Engineer.'
        breadcrumb={[
          { name: 'Golden Ogbeka', url: '/' },
          { name: t('common:certifications.title'), url: '/certifications' },
        ]}
      />
      <div className='min-h-screen'>
        <PageHeader
          eyebrow={t('certifications:count', { count: CertificationsData.length })}
          title={t('common:certifications.title')}
          highlight={t('common:certifications.titleHighlight')}
          subtitle={t('common:certifications.subtitle')}
        />

        <ul className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {CertificationsData.map((cert, index) => {
            const title = t(`certifications:certification.${index}.title`, cert.title);
            const inProgress = cert.date === 'In Progress';
            return (
              <li
                key={index}
                className='minimal-card p-6 md:p-7 flex flex-col h-full animate-fade-in-up'
                style={{ animationDelay: `${Math.min(index, 8) * 0.05}s` }}
              >
                <span
                  className={`text-sm mb-3 ${inProgress ? 'text-accent font-medium' : 'text-zinc-500 dark:text-zinc-400'}`}
                >
                  {inProgress ? t('certifications:inProgress') : cert.date}
                </span>
                <h2 className='text-2xl leading-snug mb-1.5'>{title}</h2>
                <p className='text-zinc-600 dark:text-zinc-400 mb-6 flex-1'>
                  {t(`certifications:certification.${index}.organization`, cert.organization)}
                </p>

                <div className='mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800'>
                  {cert.link && cert.link !== '#' && (
                    <a
                      href={cert.link}
                      target='_blank'
                      rel='noreferrer'
                      aria-label={t('a11y.viewCertificate').replace('{title}', title)}
                      className='group inline-flex items-center gap-1.5 py-1.5 text-sm font-medium text-accent rounded-sm'
                      onClick={() => trackEvent('click', 'certification', cert.title)}
                    >
                      <span className='link-underline'>{t('certifications:viewCertificate')}</span>
                      <svg className='w-4 h-4 rtl:-scale-x-100' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 17 17 7M9 7h8v8' />
                      </svg>
                    </a>
                  )}
                  <button
                    type='button'
                    className='group inline-flex items-center gap-1.5 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors rounded-sm'
                    aria-label={`${t('certifications:viewValueImpact')}: ${title}`}
                    onClick={() => {
                      setBenefitIndex(index);
                      setShownIndex(index);
                      trackEvent('click', 'certification-benefit', cert.title);
                    }}
                  >
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                    </svg>
                    <span className='link-underline'>{t('certifications:viewValueImpact')}</span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

          <ValueImpactModal
            open={benefitIndex !== null}
            onClose={() => setBenefitIndex(null)}
            title={t(`certifications:certification.${shownIndex}.title`, CertificationsData[shownIndex].title)}
            organization={t(`certifications:certification.${shownIndex}.organization`, CertificationsData[shownIndex].organization)}
            intro={t(`certifications:certification.${shownIndex}.benefit.intro`, CertificationsData[shownIndex].benefits.intro)}
            date={CertificationsData[shownIndex].date}
            link={CertificationsData[shownIndex].link}
            points={
              t(`certifications:certification.${shownIndex}.benefit.points`, {
                returnObjects: true,
                defaultValue: CertificationsData[shownIndex].benefits.points,
              }) as string[]
            }
          />
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
    certifications: loadNs('certifications'),
  };

  return {
    props: {
      _nextI18Next: {
        initialI18nStore,
        initialLocale: locale,
        ns: ['common', 'certifications'],
        userConfig: {
          i18n: { defaultLocale: 'en', locales: ['en', 'zh', 'fr', 'de', 'es', 'ja', 'ko', 'pt', 'ru', 'ar'] },
        },
      },
    },
  };
}
