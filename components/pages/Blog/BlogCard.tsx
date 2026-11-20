import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { BlogPostType } from '../../../data/BlogPosts';
import { trackEvent } from '../../../utils/analytics';

interface BlogCardProps {
  post: BlogPostType;
  index: number;
}

function BlogCard({ post, index }: BlogCardProps) {
  const { t } = useTranslation(['blog']);
  const { locale } = useRouter();

  return (
    <Link href={`/blog/${post.slug}`}>
      <a
        className='minimal-card flex flex-col group overflow-hidden animate-fade-in-up'
        style={{ animationDelay: `${Math.min(index, 6) * 0.06}s` }}
        onClick={() => trackEvent('click', 'blog_card', post.slug)}
      >
        <div className='relative w-full aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden border-b border-zinc-200 dark:border-zinc-800'>
          <Image
            src={post.image}
            alt={t(`blog:post.${post.slug}.title`, post.slug)}
            layout='fill'
            objectFit='cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
            className='transform group-hover:scale-105 transition-transform duration-500'
            priority={index < 3}
          />
        </div>
        <div className='p-6 flex-1 flex flex-col'>
          <p className='text-xs mb-2 text-zinc-500 dark:text-zinc-400'>
            <span className='font-semibold uppercase tracking-[0.1em] text-accent'>{t(`blog:category.${post.category}`)}</span>
            <span aria-hidden='true'> · </span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(locale || 'en', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </p>
          <h2 className='text-2xl leading-snug mb-2 group-hover:text-accent transition-colors'>
            {t(`blog:post.${post.slug}.title`, post.slug)}
          </h2>
          <p className='text-sm sm:text-base text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4'>
            {t(`blog:post.${post.slug}.summary`, post.slug)}
          </p>
          <span className='mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-zinc-100'>
            <span className='link-underline'>{t('blog:readMore')}</span>
            <svg className='w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 12h14m-6-6 6 6-6 6' />
            </svg>
          </span>
        </div>
      </a>
    </Link>
  );
}

export default BlogCard;
