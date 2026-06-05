import React from 'react';
import { useAppSelector } from '../../app/hooks';
import AntigravityCanvas from '../pages/Home/AntigravityCanvas';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function AppLayout({ children }: { children: React.ReactNode }) {
  const { isDark } = useAppSelector((state) => state.darkMode);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className='min-h-screen bg-lightBg dark:bg-darkBg text-zinc-900 dark:text-zinc-100 flex flex-col transition-colors duration-300 relative'>
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:outline-none'
        >
          Skip to main content
        </a>
        <AntigravityCanvas />
        <div className='relative z-10 flex flex-col flex-grow w-full'>
          <Navbar />
          <main id='main-content' className='flex-grow w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8'>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
