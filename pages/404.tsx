import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import HeadElement from '../components/layout/HeadElement';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const Custom404: NextPage = () => {
  const { t } = useTranslation(['common']);
  return (
    <AppLayout>
      <HeadElement
        pageTitle='404 | Golden Ogbeka'
        description='The page you are looking for does not exist.'
      />

      <div className='min-h-[80vh] flex flex-col items-center justify-center text-center px-4'>
        <div className='animate-fade-in-up'>
          <h1
            className='mb-20 text-[12rem] sm:text-[16rem] font-display font-bold leading-none tracking-tighter text-zinc-300 dark:text-zinc-500 select-none'
            aria-hidden='true'
          >
            404
          </h1>
        </div>

        <div
          className='-mt-8 sm:-mt-12 animate-fade-in-up'
          style={{ animationDelay: '0.15s' }}
        >
          <div className='glass-panel rounded-2xl px-8 py-6 sm:px-12 sm:py-8 inline-block'>
            <p className='text-xl sm:text-2xl text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed'>
              {t('page404.message')}
            </p>
            <Link href='/'>
              <a className='px-8 py-4 gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors inline-flex items-center'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
                {t('page404.backHome')}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Custom404;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
