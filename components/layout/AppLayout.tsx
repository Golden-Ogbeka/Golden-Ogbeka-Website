import React from 'react';
import dynamic from 'next/dynamic';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setDarkMode } from '../../app/slices/darkModeSlice';
import { useTranslation } from 'next-i18next';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const AntigravityCanvas = dynamic(() => import('../pages/Home/AntigravityCanvas'), { ssr: false });

function AppLayout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation(['common']);
  const { isDark } = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();
  const [showCanvas, setShowCanvas] = React.useState(false);

  React.useEffect(() => {
    const htmlHasDark = document.documentElement.classList.contains('dark');
    if (htmlHasDark !== isDark) {
      dispatch(setDarkMode(htmlHasDark));
    }
    // Defer Three.js canvas mount until idle to reduce TBT / LCP impact
    const id = 'requestIdleCallback' in window
      ? requestIdleCallback(() => setShowCanvas(true), { timeout: 3000 })
      : setTimeout(() => setShowCanvas(true), 3000);
    return () => {
      if ('requestIdleCallback' in window) {
        cancelIdleCallback(id as number);
      } else {
        clearTimeout(id as number);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='min-h-screen bg-lightBg dark:bg-darkBg text-zinc-900 dark:text-zinc-100 flex flex-col transition-colors duration-300 relative'>
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:outline-none'
      >
        {t('a11y.skipToContent')}
      </a>
      {showCanvas && <AntigravityCanvas />}
      <div className='relative z-10 flex flex-col flex-grow w-full'>
        <Navbar />
        <main id='main-content' className='flex-grow w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8'>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
