import Image from 'next/image';
import Link from 'next/link';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggleDarkMode } from '../../../app/slices/darkModeSlice';
import AvatarImage from '../../../public/brand/golden-ogbeka.jpg';
import { trackEvent } from '../../../utils/analytics';

function Navbar() {
  const dispatch = useAppDispatch();

  const { isDark } = useAppSelector((state) => state.darkMode);

  return (
    <nav
      aria-label='Main navigation'
      className='py-6 px-4 sm:px-6 lg:px-8 w-full max-w-screen-2xl mx-auto flex flex-row items-center justify-between'
    >
      <Link href='/'>
        <a className='flex-shrink-0 flex items-center gap-3'>
          <Image
            src={AvatarImage}
            alt='Golden Ogbeka'
            width={48}
            height={48}
            objectFit='cover'
            className='rounded-full cursor-pointer'
          />
          <span className='font-display font-semibold lg:text-3xl text-xl hidden md:block'>
            Golden Ogbeka
          </span>
        </a>
      </Link>
      <div className='flex flex-row items-center gap-6'>
        <Link href='/projects'>
          <a
            className='text-zinc-600 dark:text-zinc-300 hover:text-accent dark:hover:text-accent font-medium hidden md:block'
            onClick={() => trackEvent('click', 'navigation', 'Projects')}
          >
            Projects
          </a>
        </Link>
        <Link href='/experiences'>
          <a
            className='text-zinc-600 dark:text-zinc-300 hover:text-accent dark:hover:text-accent font-medium hidden md:block'
            onClick={() => trackEvent('click', 'navigation', 'Experience')}
          >
            Experience
          </a>
        </Link>
        <Link href='/open-source'>
          <a
            className='text-zinc-600 dark:text-zinc-300 hover:text-accent dark:hover:text-accent font-medium hidden md:block'
            onClick={() => trackEvent('click', 'navigation', 'Open Source')}
          >
            Open Source
          </a>
        </Link>
        <a
          href='/brand/Golden Ogbeka Resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          download='Golden_Ogbeka_Resume'
          onClick={() => trackEvent('download', 'engagement', 'Resume Download')}
          className='text-zinc-600 dark:text-zinc-300 hover:text-accent dark:hover:text-accent font-medium'
        >
          Resume
        </a>
        <DarkModeSwitch
          checked={!isDark}
          onChange={() => {
            dispatch(toggleDarkMode());
            trackEvent('toggle', 'preference', isDark ? 'light' : 'dark');
          }}
          moonColor={isDark ? '#f4f4f5' : '#09090b'}
          sunColor={isDark ? '#f4f4f5' : '#09090b'}
          size={24}
          aria-label='Toggle dark mode'
        />
      </div>
    </nav>
  );
}

export default Navbar;
