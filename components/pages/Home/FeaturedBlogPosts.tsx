import Image from 'next/image';
import Link from 'next/link';
import FeaturedBlogPostsData from '../../../data/FeaturedBlogPosts';
import { useTranslation } from 'next-i18next';
import { trackEvent } from '../../../utils/analytics';

export default function FeaturedBlogPosts() {
  const { t } = useTranslation(['common', 'home', 'blog']);

  return (
    <section className='py-20'>
      <div className='flex flex-col md:flex-row md:items-end justify-between mb-12'>
        <div className='max-w-2xl'>
          <h2 className='text-3xl md:text-4xl font-display font-semibold mb-4'>
            {t('home:featuredBlog.title')}
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400 text-lg'>
            {t('home:featuredBlog.subtitle')}
          </p>
        </div>
        <Link href='/blog'>
          <a
            className='hidden md:inline-flex justify-center mt-6 md:mt-0 items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors'
            onClick={() => trackEvent('click', 'navigation', 'View All Blog Posts')}
          >
            {t('home:featuredBlog.viewAll')}
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </a>
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {FeaturedBlogPostsData.map((post, index) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <a
              className='minimal-card flex flex-col group overflow-hidden'
              onClick={() => trackEvent('click', 'featured_blog_card', post.slug)}
            >
              <div className='relative w-full aspect-video bg-zinc-200 dark:bg-zinc-800 overflow-hidden'>
                <Image
                  src={post.image}
                  alt={t(`blog:post.${post.slug}.title`, post.slug)}
                  layout='fill'
                  objectFit='cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  className='transform group-hover:scale-105 transition-transform duration-500'
                  priority={index === 0}
                />
                <span className='absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-accent text-white'>
                  {t(`blog:category.${post.category}`)}
                </span>
              </div>
              <div className='p-6 flex-1 flex flex-col'>
                <h3 className='text-xl font-semibold mb-2 group-hover:text-accent transition-colors'>
                  {t(`blog:post.${post.slug}.title`, post.slug)}
                </h3>
                <p
                  className='text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4 flex-1 text-sm'
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {t(`blog:post.${post.slug}.summary`, post.slug)}
                </p>
                <div className='flex items-center justify-between mt-auto'>
                  <time className='text-sm text-zinc-600 dark:text-zinc-400' dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className='text-sm font-medium text-accent group-hover:underline'>
                    {t('blog:readMore')}
                  </span>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>

      <Link href='/blog'>
        <a
          className='md:hidden inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors'
          onClick={() => trackEvent('click', 'navigation', 'View All Blog Posts')}
        >
          {t('home:featuredBlog.viewAll')}
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 8l4 4m0 0l-4 4m4-4H3'
            />
          </svg>
        </a>
      </Link>
    </section>
  );
}
