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

const NAV_LINKS = [
  { href: '/projects', key: 'nav.projects', track: 'Projects' },
  { href: '/experiences', key: 'nav.experience', track: 'Experience' },
  { href: '/certifications', key: 'nav.certifications', track: 'Certifications' },
  { href: '/blog', key: 'nav.blog', track: 'Blog' },
];

function Navbar() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { t } = useTranslation(['common']);
  const { isDark } = useAppSelector((state) => state.darkMode);
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

  // Mobile menu: close on navigation, close on Escape (returning focus), lock page scroll while open.
  useEffect(() => {
    const close = () => setMenuOpen(false);
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router.events]);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const linkClass =
    'text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors rounded-md';

  return (
    <>
      <header className='sticky top-0 z-40 bg-lightBg/80 dark:bg-darkBg/80 backdrop-blur-md border-b border-zinc-200/70 dark:border-zinc-800/70'>
        <nav
          aria-label='Main navigation'
          className='h-16 md:h-20 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto flex flex-row items-center justify-between gap-4'
        >
          <Link href='/'>
            <a className='flex-shrink-0 flex items-center gap-3 rounded-full'>
              <Image
                src={AvatarImage}
                alt='Golden Ogbeka'
                width={32}
                height={32}
                objectFit='cover'
                priority
                className='rounded-full'
              />
              <span className='font-semibold text-[15px] tracking-tight'>Golden Ogbeka</span>
            </a>
          </Link>

          <div className='flex flex-row items-center gap-1 sm:gap-3 md:gap-7'>
            {NAV_LINKS.map((link) => {
              const active = router.pathname.startsWith(link.href);
              return (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`${linkClass} hidden md:block ${active ? '!text-zinc-900 dark:!text-zinc-100 font-medium' : ''}`}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => trackEvent('click', 'navigation', link.track)}
                  >
                    {t(link.key)}
                  </a>
                </Link>
              );
            })}
            <a
              href='/brand/Golden%20Ogbeka%20Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              download='Golden_Ogbeka_Resume'
              onClick={() => trackEvent('download', 'engagement', 'Resume Download')}
              className='hidden md:inline-block text-sm font-medium px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors'
            >
              {t('nav.resume')}
            </a>

            <div className='relative' ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className='flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
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
                  aria-hidden='true'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
                </svg>
              </button>

              {langOpen && (
                <div
                  className='absolute right-0 rtl:right-auto rtl:left-0 top-full mt-2 w-44 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-xl z-50'
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
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-start transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                        l.code === router.locale
                          ? 'font-semibold text-zinc-900 dark:text-zinc-100'
                          : 'text-zinc-600 dark:text-zinc-400'
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
                      <span>{l.label}</span>
                      {l.code === router.locale && (
                        <svg
                          className='w-4 h-4 ml-auto rtl:ml-0 rtl:mr-auto text-accent'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
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
              className='p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
            >
              {isDark ? (
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.75} strokeLinecap='round' strokeLinejoin='round' width='20' height='20' aria-hidden='true'>
                <path d='M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401' />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.75} strokeLinecap='round' strokeLinejoin='round' width='20' height='20' aria-hidden='true'>
                <circle cx='12' cy='12' r='4' />
                <path d='M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41' />
              </svg>
            )}
            </button>

            <button
              ref={menuButtonRef}
              type='button'
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls='mobile-menu'
              aria-label={menuOpen ? t('a11y.closeMenu') : t('a11y.openMenu')}
              className='md:hidden p-2 -mr-2 rtl:mr-0 rtl:-ml-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                {menuOpen ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d='M6 18 18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d='M4 8h16M4 16h16' />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div
          id='mobile-menu'
          className='md:hidden fixed inset-x-0 top-16 bottom-0 z-30 bg-lightBg dark:bg-darkBg border-t border-zinc-200 dark:border-zinc-800 overflow-y-auto animate-fade-in-up'
        >
          <ul className='px-4 sm:px-6 pt-4'>
            {[{ href: '/', key: 'nav.home', track: 'Home' }, ...NAV_LINKS].map((link) => {
              const active = link.href === '/' ? router.pathname === '/' : router.pathname.startsWith(link.href);
              return (
                <li key={link.href} className='border-b border-zinc-200 dark:border-zinc-800'>
                  <Link href={link.href}>
                    <a
                      className={`flex items-center justify-between py-5 font-display text-3xl font-light ${
                        active ? 'text-accent' : 'text-zinc-900 dark:text-zinc-100'
                      }`}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => {
                        trackEvent('click', 'navigation', `Mobile - ${link.track}`);
                        setMenuOpen(false);
                      }}
                    >
                      {t(link.key)}
                      <svg
                        className='w-5 h-5 text-zinc-400 rtl:-scale-x-100'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 12h14m-6-6 6 6-6 6' />
                      </svg>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className='px-4 sm:px-6 py-8'>
            <a
              href='/brand/Golden%20Ogbeka%20Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              download='Golden_Ogbeka_Resume'
              onClick={() => trackEvent('download', 'engagement', 'Mobile - Resume Download')}
              className='flex justify-center w-full px-6 py-3.5 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium'
            >
              {t('nav.resume')}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
