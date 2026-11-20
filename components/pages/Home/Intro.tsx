import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import HighlightedText from '../../reusable/HighlightedText/HighlightedText';
import Portrait from '../../../public/brand/golden-ogbeka.jpg';
import { trackEvent } from '../../../utils/analytics';

export default function Intro() {
  const { t } = useTranslation(['common', 'home']);

  return (
    <section className='grid grid-cols-1 md:grid-cols-[1.35fr_0.75fr] gap-10 md:gap-16 items-center pt-12 sm:pt-16 md:pt-24 pb-14 md:pb-20'>
      <div>
        <p className='text-sm text-zinc-500 dark:text-zinc-400 animate-fade-in-up'>{t('home:hero.eyebrow')}</p>
        <h1
          className='mt-5 mb-7 text-[3.5rem] sm:text-7xl lg:text-[7rem] font-light leading-[0.95] tracking-[-0.035em] max-w-[11ch] animate-fade-in-up'
          style={{ animationDelay: '0.08s' }}
        >
          <HighlightedText text={t('home:hero.title')} highlight={t('home:hero.highlight')} />
        </h1>
        <p
          className='text-lg md:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-xl animate-fade-in-up'
          style={{ animationDelay: '0.16s' }}
        >
          {t('home:hero.lede')}
        </p>
        <div className='flex flex-wrap gap-2.5 sm:gap-3 mt-8 sm:mt-9 animate-fade-in-up' style={{ animationDelay: '0.24s' }}>
          <Link href='/projects'>
            <a
              className='inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-[15px] sm:text-base rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors'
              onClick={() => trackEvent('click', 'navigation', 'Hero - Selected work')}
            >
              {t('home:hero.ctaWork')}
              <svg className='w-4 h-4 rtl:-scale-x-100' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 12h14m-6-6 6 6-6 6' />
              </svg>
            </a>
          </Link>
          <a
            href='/brand/Golden%20Ogbeka%20Resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download='Golden_Ogbeka_Resume'
            className='inline-flex items-center px-5 sm:px-6 py-3 sm:py-3.5 text-[15px] sm:text-base rounded-full border border-zinc-300 dark:border-zinc-700 font-medium hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors'
            onClick={() => trackEvent('download', 'engagement', 'Hero - Resume Download')}
          >
            {t('home:hero.ctaCv')}
          </a>
        </div>
      </div>

      <figure className='animate-fade-in-up max-w-sm md:max-w-none w-full' style={{ animationDelay: '0.32s' }}>
        <div className='relative w-full aspect-square md:aspect-[4/5] rounded-[20px] overflow-hidden bg-zinc-100 dark:bg-zinc-800'>
          <Image
            src={Portrait}
            alt={t('home:hero.photoAlt')}
            layout='fill'
            objectFit='cover'
            objectPosition='50% 20%'
            priority
            placeholder='blur'
            sizes='(max-width: 768px) 90vw, 400px'
          />
        </div>
        <figcaption className='flex justify-between mt-3 text-sm text-zinc-500 dark:text-zinc-400'>
          <span className='font-medium text-zinc-900 dark:text-zinc-100'>Golden Ogbeka</span>
          <span>{t('home:hero.location')}</span>
        </figcaption>
      </figure>
    </section>
  );
}
