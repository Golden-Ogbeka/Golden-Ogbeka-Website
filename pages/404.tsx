import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import HeadElement from '../components/layout/HeadElement';
import HighlightedText from '../components/reusable/HighlightedText/HighlightedText';
import { useTranslation } from 'next-i18next';
const Custom404: NextPage = () => {
  const { t } = useTranslation(['common']);
  return (
    <AppLayout>
      <HeadElement
        pageTitle='404 | Golden Ogbeka'
        description='The page you are looking for does not exist.'
      />

      <div className='min-h-[70vh] flex flex-col justify-center py-20'>
        <p className='text-sm text-zinc-500 dark:text-zinc-400 animate-fade-in-up'>404</p>
        <h1 className='mt-4 text-5xl sm:text-6xl md:text-7xl font-light leading-[1] tracking-tight animate-fade-in-up' style={{ animationDelay: '0.08s' }}>
          <HighlightedText text={t('page404.title')} highlight={t('page404.titleHighlight')} />
        </h1>
        <p className='mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl animate-fade-in-up' style={{ animationDelay: '0.16s' }}>
          {t('page404.message')}
        </p>
        <div className='mt-9 animate-fade-in-up' style={{ animationDelay: '0.24s' }}>
          <Link href='/'>
            <a className='inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors'>
              <svg className='w-4 h-4 rtl:-scale-x-100' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 12H5m6 6-6-6 6-6' />
              </svg>
              {t('page404.backHome')}
            </a>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default Custom404;

export async function getStaticProps({ locale }: { locale: string }) {
  const fs = require('fs');
  const path = require('path');

  const fp = path.resolve(process.cwd(), `public/locales/${locale}/common.json`);
  const common = JSON.parse(fs.readFileSync(fp, 'utf8'));

  const initialI18nStore: Record<string, Record<string, unknown>> = {};
  initialI18nStore[locale] = { common };

  return {
    props: {
      _nextI18Next: {
        initialI18nStore,
        initialLocale: locale,
        ns: ['common'],
        userConfig: {
          i18n: { defaultLocale: 'en', locales: ['en', 'zh', 'fr', 'de', 'es', 'ja', 'ko', 'pt', 'ru', 'ar'] },
        },
      },
    },
  };
}
