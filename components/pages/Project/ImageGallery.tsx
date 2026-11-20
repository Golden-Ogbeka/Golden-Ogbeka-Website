import { Dialog } from '@headlessui/react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { trackEvent } from '../../../utils/analytics';

interface ImageGalleryProps {
  screenshots: StaticImageData[];
  projectName: string;
}

const AUTOPLAY_MS = 5000;
const SWIPE_PX = 50;

type Direction = 'next' | 'prev';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function Chevron({ dir }: { dir: Direction }) {
  return (
    <svg className='w-5 h-5 rtl:-scale-x-100' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d={dir === 'next' ? 'm9 5 7 7-7 7' : 'm15 19-7-7 7-7'} />
    </svg>
  );
}

/** Wraps a screenshot in a browser window (landscape) or a phone (portrait). */
function DeviceFrame({ src, alt, label, priority }: { src: StaticImageData; alt: string; label: string; priority?: boolean }) {
  const portrait = src.height > src.width;
  if (portrait) {
    return (
      <div
        className='relative h-full max-w-full rounded-[2rem] border-[6px] border-zinc-900 dark:border-zinc-700 bg-zinc-900 shadow-2xl overflow-hidden'
        style={{ aspectRatio: `${src.width} / ${src.height}` }}
      >
        <span aria-hidden='true' className='absolute top-1.5 left-1/2 -translate-x-1/2 z-10 w-16 h-4 rounded-full bg-zinc-900' />
        <Image src={src} alt={alt} layout='fill' objectFit='cover' sizes='(max-width: 768px) 60vw, 320px' priority={priority} draggable={false} />
      </div>
    );
  }
  return (
    <div className='w-full max-h-full flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-2xl overflow-hidden'>
      <div aria-hidden='true' className='flex items-center gap-3 px-3 sm:px-4 h-8 sm:h-9 border-b border-zinc-200 dark:border-zinc-700 shrink-0'>
        <span className='flex gap-1.5'>
          <span className='w-2.5 h-2.5 rounded-full bg-[#ff5f57]' />
          <span className='w-2.5 h-2.5 rounded-full bg-[#febc2e]' />
          <span className='w-2.5 h-2.5 rounded-full bg-[#28c840]' />
        </span>
        <span className='flex-1 max-w-xs mx-auto truncate text-center text-[11px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-md px-3 py-0.5'>
          {label}
        </span>
        <span className='w-[46px]' />
      </div>
      <div className='relative w-full' style={{ aspectRatio: `${src.width} / ${src.height}` }}>
        <Image src={src} alt={alt} layout='fill' objectFit='contain' sizes='(max-width: 768px) 100vw, 900px' priority={priority} draggable={false} />
      </div>
    </div>
  );
}

export default function ImageGallery({ screenshots, projectName }: ImageGalleryProps) {
  const { t } = useTranslation(['common', 'projects']);
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const total = screenshots?.length ?? 0;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>('next');
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const pointerStart = useRef<number | null>(null);
  const [dragX, setDragX] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);

  // Autoplay only when motion is welcome; it can always be started or stopped with the button.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setPlaying(!reduce && total > 1);
    const onVisibility = () => setPageHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [total]);

  const go = useCallback(
    (target: number, dir: Direction) => {
      setDirection(dir);
      setIndex(((target % total) + total) % total);
    },
    [total]
  );
  const next = useCallback(() => go(index + 1, 'next'), [go, index]);
  const prev = useCallback(() => go(index - 1, 'prev'), [go, index]);

  // Keep the active thumbnail visible without scrolling the page.
  useEffect(() => {
    const strip = stripRef.current;
    const thumb = strip?.children[index] as HTMLElement | undefined;
    if (!strip || !thumb) return;
    const left = thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
    strip.scrollTo({ left, behavior: 'smooth' });
  }, [index]);

  if (!screenshots || total === 0) return null;

  const paused = !playing || hovered || focused || pageHidden || lightbox;
  const alt = (n: number) => t('projectDetail.screenshotAlt', { project: projectName, number: n });

  const onKey = (e: React.KeyboardEvent) => {
    const forward = isRtl ? 'ArrowLeft' : 'ArrowRight';
    const back = isRtl ? 'ArrowRight' : 'ArrowLeft';
    if (e.key === forward) {
      e.preventDefault();
      next();
    } else if (e.key === back) {
      e.preventDefault();
      prev();
    }
  };

  // Swipe / drag: the slide follows the finger or mouse, then snaps to the next or previous one.
  const endDrag = (clientX: number | null) => {
    if (pointerStart.current === null) return;
    const dx = clientX === null ? 0 : clientX - pointerStart.current;
    pointerStart.current = null;
    setDragX(0);
    if (Math.abs(dx) < SWIPE_PX) return;
    const towardsNext = isRtl ? dx > 0 : dx < 0;
    if (towardsNext) next();
    else prev();
  };
  const swipeHandlers = {
    onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => {
      if (total < 2 || (e.target as HTMLElement).closest('button')) return;
      pointerStart.current = e.clientX;
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    onPointerMove: (e: React.PointerEvent) => {
      if (pointerStart.current !== null) setDragX(e.clientX - pointerStart.current);
    },
    onPointerUp: (e: React.PointerEvent) => endDrag(e.clientX),
    onPointerCancel: () => endDrag(null),
  };
  const dragStyle: React.CSSProperties = {
    transform: `translateX(${dragX}px)`,
    opacity: 1 - Math.min(Math.abs(dragX) / 600, 0.35),
    transition: dragX === 0 ? 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s' : 'none',
  };
  const mostlyPortrait = screenshots.filter((s) => s.height > s.width).length > total / 2;

  const current = screenshots[index];

  return (
    <section className='mt-16 md:mt-24' aria-labelledby='gallery-heading'>
      <div className='flex items-end justify-between gap-6 mb-6'>
        <h2 id='gallery-heading' className='text-3xl font-light'>
          {t('projectDetail.gallery')}
        </h2>
        <p className='font-display font-light tabular-nums leading-none text-zinc-400 dark:text-zinc-500' aria-hidden='true'>
          <span className='text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100'>{pad(index + 1)}</span>
          <span className='text-2xl md:text-3xl'> / {pad(total)}</span>
        </p>
      </div>

      <div
        role='region'
        aria-roledescription={t('projectDetail.carousel')}
        aria-label={t('projectDetail.carouselLabel', { project: projectName })}
        tabIndex={0}
        onKeyDown={onKey}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false);
        }}
        className='relative rounded-[20px] outline-none'
      >
        {/* Stage */}
        <div
          {...swipeHandlers}
          className={`relative ${mostlyPortrait ? 'aspect-[4/5]' : 'aspect-[4/3]'} sm:aspect-[16/10] rounded-[20px] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 select-none touch-pan-y ${
            total > 1 ? 'cursor-grab active:cursor-grabbing' : ''
          }`}
        >
          {/* Ambient backdrop: a blurred copy of the current screenshot */}
          <div key={`bg-${index}`} aria-hidden='true' className='absolute inset-0 gallery-ambient'>
            <Image src={current} alt='' layout='fill' objectFit='cover' sizes='20vw' className='scale-125 blur-3xl opacity-40 dark:opacity-30' />
          </div>

          <div className='absolute inset-0 flex items-center justify-center p-4 sm:p-10 md:p-14' style={dragStyle}>
            <div
              key={index}
              className={`w-full h-full flex items-center justify-center ${direction === 'next' ? 'gallery-in-next' : 'gallery-in-prev'}`}
            >
              <DeviceFrame src={current} alt={alt(index + 1)} label={projectName} priority={index === 0} />
            </div>
          </div>

          {/* Controls */}
          {total > 1 && (
            <>
              <button
                type='button'
                onClick={prev}
                aria-label={t('a11y.prevImage')}
                className='absolute top-1/2 -translate-y-1/2 left-2 sm:left-3 rtl:left-auto rtl:right-2 sm:rtl:right-3 w-9 h-9 sm:w-11 sm:h-11 grid place-items-center rounded-full bg-white/85 dark:bg-zinc-900/85 backdrop-blur border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800 transition-colors'
              >
                <Chevron dir='prev' />
              </button>
              <button
                type='button'
                onClick={next}
                aria-label={t('a11y.nextImage')}
                className='absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 rtl:right-auto rtl:left-2 sm:rtl:left-3 w-9 h-9 sm:w-11 sm:h-11 grid place-items-center rounded-full bg-white/85 dark:bg-zinc-900/85 backdrop-blur border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800 transition-colors'
              >
                <Chevron dir='next' />
              </button>
            </>
          )}

          <div className='absolute bottom-3 right-3 rtl:right-auto rtl:left-3 flex gap-2'>
            {total > 1 && (
              <button
                type='button'
                onClick={() => {
                  setPlaying((p) => !p);
                  trackEvent('click', 'gallery', playing ? 'pause' : 'play');
                }}
                aria-label={playing ? t('a11y.pauseSlideshow') : t('a11y.playSlideshow')}
                aria-pressed={!playing}
                className='w-10 h-10 grid place-items-center rounded-full bg-white/85 dark:bg-zinc-900/85 backdrop-blur border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800 transition-colors'
              >
                {playing ? (
                  <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                    <rect x='6' y='5' width='4' height='14' rx='1' />
                    <rect x='14' y='5' width='4' height='14' rx='1' />
                  </svg>
                ) : (
                  <svg className='w-4 h-4 rtl:-scale-x-100' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                    <path d='M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z' />
                  </svg>
                )}
              </button>
            )}
            <button
              type='button'
              onClick={() => {
                setLightbox(true);
                trackEvent('click', 'gallery', `${projectName} - fullscreen ${index + 1}`);
              }}
              aria-label={t('a11y.expandImage')}
              className='w-10 h-10 grid place-items-center rounded-full bg-white/85 dark:bg-zinc-900/85 backdrop-blur border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800 transition-colors'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5' />
              </svg>
            </button>
          </div>
        </div>

        {/* Autoplay progress: advancing happens when the bar finishes */}
        {total > 1 && (
          <div className='mt-3 h-[3px] rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden' aria-hidden='true'>
            {playing && (
              <div
                key={`p-${index}`}
                className='gallery-progress h-full bg-accent'
                style={{ animationDuration: `${AUTOPLAY_MS}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                onAnimationEnd={next}
              />
            )}
          </div>
        )}

        <p className='sr-only' aria-live={playing && !paused ? 'off' : 'polite'}>
          {t('projectDetail.slideOf', { current: index + 1, total })}
        </p>

        {/* Thumbnail strip */}
        {total > 1 && (
          <div ref={stripRef} className='mt-4 flex gap-3 overflow-x-auto pb-2 snap-x'>
            {screenshots.map((src, i) => (
              <button
                key={i}
                type='button'
                onClick={() => go(i, i > index ? 'next' : 'prev')}
                aria-label={t('a11y.showSlide', { number: i + 1 })}
                aria-current={i === index ? 'true' : undefined}
                className={`relative shrink-0 snap-start w-28 sm:w-36 aspect-[16/10] rounded-lg overflow-hidden border transition-all duration-300 ${
                  i === index
                    ? 'border-accent ring-2 ring-accent/40 opacity-100'
                    : 'border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={src} alt='' layout='fill' objectFit='cover' objectPosition='center' sizes='144px' />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Full-screen view */}
      <Dialog open={lightbox} onClose={() => setLightbox(false)} className='relative z-50'>
        <div className='fixed inset-0 bg-darkBg/95 backdrop-blur-sm' aria-hidden='true' />
        <div className='fixed inset-0 flex flex-col'>
          <Dialog.Panel className='relative flex flex-col h-full w-full' onKeyDown={onKey}>
            <div className='flex items-center justify-between px-4 sm:px-6 h-16 text-white shrink-0'>
              <Dialog.Title className='font-display text-lg sm:text-xl truncate pr-4'>{projectName}</Dialog.Title>
              <div className='flex items-center gap-4'>
                <span className='font-display tabular-nums text-white/70' aria-live='polite'>
                  {pad(index + 1)} / {pad(total)}
                </span>
                <button
                  type='button'
                  onClick={() => setLightbox(false)}
                  aria-label={t('a11y.closeGallery')}
                  className='w-10 h-10 grid place-items-center rounded-full hover:bg-white/10 transition-colors'
                >
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d='M6 18 18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>
            </div>

            <div {...swipeHandlers} className='relative flex-1 min-h-0 mx-2 sm:mx-16 select-none touch-pan-y'>
              <div className='absolute inset-0' style={dragStyle}>
              <div key={`lb-${index}`} className={`absolute inset-0 ${direction === 'next' ? 'gallery-in-next' : 'gallery-in-prev'}`}>
                <Image src={current} alt={alt(index + 1)} layout='fill' objectFit='contain' sizes='100vw' draggable={false} />
              </div>
              </div>
            </div>

            {total > 1 && (
              <>
                <button
                  type='button'
                  onClick={prev}
                  aria-label={t('a11y.prevImage')}
                  className='absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 rtl:left-auto rtl:right-2 sm:rtl:right-4 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors'
                >
                  <Chevron dir='prev' />
                </button>
                <button
                  type='button'
                  onClick={next}
                  aria-label={t('a11y.nextImage')}
                  className='absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 rtl:right-auto rtl:left-2 sm:rtl:left-4 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors'
                >
                  <Chevron dir='next' />
                </button>
                <div className='flex justify-center gap-2 py-4 px-4 overflow-x-auto shrink-0'>
                  {screenshots.map((src, i) => (
                    <button
                      key={i}
                      type='button'
                      onClick={() => go(i, i > index ? 'next' : 'prev')}
                      aria-label={t('a11y.showSlide', { number: i + 1 })}
                      aria-current={i === index ? 'true' : undefined}
                      className={`relative shrink-0 w-16 sm:w-20 aspect-[16/10] rounded-md overflow-hidden transition-opacity ${
                        i === index ? 'ring-2 ring-accent opacity-100' : 'opacity-40 hover:opacity-80'
                      }`}
                    >
                      <Image src={src} alt='' layout='fill' objectFit='cover' sizes='80px' />
                    </button>
                  ))}
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
