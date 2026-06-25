import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggleDarkMode } from '../../../app/slices/darkModeSlice';
import { useTranslation } from 'next-i18next';
import AvatarImage from '../../../public/brand/golden-ogbeka.jpg';
import { trackEvent } from '../../../utils/analytics';

interface LocaleInfo {
  code: string;
  label: string;
  flag: string;
}

const LOCALES: LocaleInfo[] = [
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'zh', label: '中文', flag: 'https://flagcdn.com/w40/cn.png' },
  { code: 'fr', label: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'de', label: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
  { code: 'es', label: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'ja', label: '日本語', flag: 'https://flagcdn.com/w40/jp.png' },
  { code: 'ko', label: '한국어', flag: 'https://flagcdn.com/w40/kr.png' },
  { code: 'pt', label: 'Português', flag: 'https://flagcdn.com/w40/pt.png' },
  { code: 'ru', label: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
  { code: 'ar', label: 'العربية', flag: 'https://flagcdn.com/w40/sa.png' },
];

function Navbar() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { t } = useTranslation(['common']);
  const { isDark } = useAppSelector((state) => state.darkMode);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLocale = LOCALES.find((l) => l.code === router.locale) || LOCALES[0];

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
          href='/brand/Golden%20Ogbeka%20Resume.pdf'
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
              <span className='relative inline-flex items-center justify-center w-5 h-[14px] shrink-0 overflow-hidden rounded-sm'>
                <Image
                  src={currentLocale.flag}
                  alt=''
                  aria-hidden='true'
                  layout='fill'
                  className='object-cover'
                  unoptimized
                />
              </span>
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
              {LOCALES.map((l) => (
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
                  <span className='relative inline-flex items-center justify-center w-5 h-[14px] shrink-0 overflow-hidden rounded-sm'>
                    <Image
                      src={l.flag}
                      alt=''
                      aria-hidden='true'
                      layout='fill'
                      className='object-cover'
                      unoptimized
                    />
                  </span>
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

        <button
          onClick={() => {
            dispatch(toggleDarkMode());
            trackEvent('toggle', 'preference', isDark ? 'light' : 'dark');
          }}
          aria-label={t('a11y.toggleDarkMode')}
          className='p-1 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-accent'
        >
          {isDark ? (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#f4f4f5' width='24' height='24' aria-hidden='true'>
              <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z' />
            </svg>
          ) : (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#09090b' width='24' height='24' aria-hidden='true'>
              <path d='M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75zM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0zM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59zM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75zM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591zM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18zM7.758 16.243a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59zM6.166 5.106a.75.75 0 0 0-1.06 1.061l1.59 1.591a.75.75 0 0 0 1.061-1.06l-1.591-1.592z' />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
