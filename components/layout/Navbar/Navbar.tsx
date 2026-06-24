import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggleDarkMode } from '../../../app/slices/darkModeSlice';
import { useTranslation } from '../../../context/LocaleContext';
import AvatarImage from '../../../public/brand/golden-ogbeka.jpg';
import { trackEvent } from '../../../utils/analytics';

function Navbar() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { t, locales } = useTranslation();
  const { isDark } = useAppSelector((state) => state.darkMode);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find((l) => l.code === router.locale) || locales[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

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
            priority
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
            {t('nav.projects')}
          </a>
        </Link>
        <Link href='/experiences'>
          <a
            className='text-zinc-600 dark:text-zinc-300 hover:text-accent dark:hover:text-accent font-medium hidden md:block'
            onClick={() => trackEvent('click', 'navigation', 'Experience')}
          >
            {t('nav.experience')}
          </a>
        </Link>
        <Link href='/open-source'>
          <a
            className='text-zinc-600 dark:text-zinc-300 hover:text-accent dark:hover:text-accent font-medium hidden md:block'
            onClick={() => trackEvent('click', 'navigation', 'Open Source')}
          >
            {t('nav.openSource')}
          </a>
        </Link>
        <a
          href='/brand/Golden-Ogbeka-Resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          download='Golden_Ogbeka_Resume'
          onClick={() => trackEvent('download', 'engagement', 'Resume Download')}
          className='text-zinc-600 dark:text-zinc-300 hover:text-accent dark:hover:text-accent font-medium'
        >
          {t('nav.resume')}
        </a>

        <div className='relative' ref={langRef}>
          <button
            onClick={() => setLangOpen(!langOpen)}
            className='flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-accent border border-zinc-200 dark:border-zinc-700'
            aria-haspopup='listbox'
            aria-expanded={langOpen}
            aria-label={t('nav.language')}
          >
            <Image
              src={currentLocale.flag}
              alt=''
              aria-hidden='true'
              width={20}
              height={15}
              className='rounded-sm'
              unoptimized
            />
            <svg
              className={`w-3 h-3 transition-transform ${langOpen ? '' : 'rotate-180'}`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 15l7-7 7 7'
              />
            </svg>
          </button>

          {langOpen && (
            <div
              className='absolute right-0 top-full mt-1.5 w-44 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-xl z-50'
              role='listbox'
              aria-label={t('nav.language')}
            >
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    router.push(router.asPath, router.asPath, { locale: l.code });
                    trackEvent('change', 'preference', `Language: ${l.code}`);
                    setLangOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                    l.code === router.locale
                      ? 'font-semibold text-zinc-900 dark:text-zinc-100'
                      : 'font-medium text-zinc-600 dark:text-zinc-400'
                  }`}
                  role='option'
                  aria-selected={l.code === router.locale}
                >
                  <Image
                    src={l.flag}
                    alt=''
                    aria-hidden='true'
                    width={20}
                    height={15}
                    className='rounded-sm object-cover'
                    unoptimized
                  />
                  <span className='tracking-wide'>{l.label.toUpperCase()}</span>
                  {l.code === router.locale && (
                    <svg
                      className='w-4 h-4 ml-auto text-green-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2.5}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <DarkModeSwitch
          checked={!isDark}
          onChange={() => {
            dispatch(toggleDarkMode());
            trackEvent('toggle', 'preference', isDark ? 'light' : 'dark');
          }}
          moonColor={isDark ? '#f4f4f5' : '#09090b'}
          sunColor={isDark ? '#f4f4f5' : '#09090b'}
          size={24}
          aria-label={t('a11y.toggleDarkMode')}
        />
      </div>
    </nav>
  );
}

export default Navbar;
