import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setDarkMode } from '../../app/slices/darkModeSlice';
import { useTranslation } from 'next-i18next';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function AppLayout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation(['common']);
  const { isDark } = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const htmlHasDark = document.documentElement.classList.contains('dark');
    if (htmlHasDark !== isDark) {
      dispatch(setDarkMode(htmlHasDark));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='min-h-screen bg-lightBg dark:bg-darkBg text-zinc-900 dark:text-zinc-100 flex flex-col transition-colors duration-300'>
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-zinc-900 focus:text-white dark:focus:bg-zinc-100 dark:focus:text-zinc-900 focus:rounded-lg focus:outline-none'
      >
        {t('a11y.skipToContent')}
      </a>
      <Navbar />
      <main id='main-content' className='flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
