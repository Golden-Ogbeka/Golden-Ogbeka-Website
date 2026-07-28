import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { BlogPostType } from '../../../data/BlogPosts';
import { trackEvent } from '../../../utils/analytics';

interface BlogCardProps {
  post: BlogPostType;
  index: number;
}

function BlogCard({ post, index }: BlogCardProps) {
  const { t } = useTranslation(['blog']);

  return (
    <Link href={`/blog/${post.slug}`}>
      <a
        className='minimal-card flex flex-col group overflow-hidden animate-fade-in-up'
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={() => trackEvent('click', 'blog_card', post.slug)}
      >
        <div className='relative w-full aspect-video bg-zinc-200 dark:bg-zinc-800 overflow-hidden'>
          <Image
            src={post.image}
            alt={t(`blog:post.${post.slug}.title`, post.slug)}
            layout='fill'
            objectFit='cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
            className='transform group-hover:scale-105 transition-transform duration-500'
          />
          <span className='absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-accent text-white'>
            {t(`blog:category.${post.category}`)}
          </span>
        </div>
        <div className='p-6 flex-1 flex flex-col'>
          <h2 className='text-xl font-semibold mb-2 group-hover:text-accent transition-colors'>
            {t(`blog:post.${post.slug}.title`, post.slug)}
          </h2>
          <p
            className='text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4 flex-1'
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
            <time className='text-sm text-zinc-500 dark:text-zinc-500' dateTime={post.date}>
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
  );
}

export default BlogCard;
