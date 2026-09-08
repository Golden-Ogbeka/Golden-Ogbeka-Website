import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Intro() {
  const { t } = useTranslation(['common', 'home']);
  return (
    <section className='pt-24 pb-16 sm:pt-28 md:pt-32 md:pb-20 min-h-[80vh] flex flex-col justify-center animate-fade-in-up'>
      <div>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-tight mb-6'>
          {(() => {
            const title = t('home:intro.title');
            const highlightOne = t('home:intro.titleHighlightOne');
            const highlightTwo = t('home:intro.titleHighlightTwo');
            const [pre, rest] = title.split(highlightOne);
            const [mid, post] = rest.split(highlightTwo);
            return (
              <>
                {pre}
                <span className='text-accent'>{highlightOne}</span>
                {mid}
                <span className='text-accent'>{highlightTwo}</span>
                {post}
              </>
            );
          })()}
        </h1>
        <p className='text-lg sm:text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8 md:mb-10 text-justify whitespace-pre-line'>
          {t('home:intro.subtitle')}
        </p>

        <div className='flex flex-wrap gap-3 sm:gap-4'>
          <Link href='/projects'>
            <a className='px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors inline-flex items-center'>
              {t('home:intro.viewWork')}
              <svg
                className='w-5 h-5 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </a>
          </Link>
          <a
            href='#contact'
            className='px-8 py-4 minimal-card rounded-full font-medium text-sm sm:text-base md:text-lg inline-flex items-center'
          >
            {t('home:intro.contactMe')}
          </a>
        </div>
      </div>
    </section>
  );
}
