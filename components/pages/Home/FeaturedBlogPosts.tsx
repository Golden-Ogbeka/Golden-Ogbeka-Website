import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import FeaturedBlogPostsData from '../../../data/FeaturedBlogPosts';
import BlogPosts from '../../../data/BlogPosts';
import { useTranslation } from 'next-i18next';
import { trackEvent } from '../../../utils/analytics';
import SectionHeader from '../../reusable/SectionHeader/SectionHeader';
import ViewAllLink from '../../reusable/ViewAllLink/ViewAllLink';

export default function FeaturedBlogPosts() {
  const { t } = useTranslation(['common', 'home', 'blog']);
  const { locale } = useRouter();

  const viewAll = (
    <ViewAllLink href='/blog' label={t('home:featuredBlog.viewAll')} count={BlogPosts.length} trackLabel='View All Blog Posts' />
  );

  return (
    <section aria-labelledby='notes-title' className='reveal pt-24 md:pt-32'>
      <SectionHeader
        id='notes-title'
        title={t('home:featuredBlog.title')}
        highlight={t('home:featuredBlog.highlight')}
        subtitle={t('home:featuredBlog.subtitle')}
        action={viewAll}
      />

      <ul className='border-t border-zinc-200 dark:border-zinc-800'>
        {FeaturedBlogPostsData.map((post) => {
          const title = t(`blog:post.${post.slug}.title`, post.slug);
          return (
            <li key={post.slug} className='border-b border-zinc-200 dark:border-zinc-800'>
              <Link href={`/blog/${post.slug}`}>
                <a
                  className='group grid grid-cols-[1fr_auto] md:grid-cols-[140px_1fr_auto] gap-x-6 gap-y-1 py-6 items-center rounded-sm'
                  onClick={() => trackEvent('click', 'featured_blog_card', post.slug)}
                >
                  <span className='col-span-2 md:col-span-1 text-xs text-zinc-500 dark:text-zinc-400'>
                    <span className='block font-semibold uppercase tracking-[0.1em] text-accent'>
                      {t(`blog:category.${post.category}`)}
                    </span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(locale || 'en', { year: 'numeric', month: 'short' })}
                    </time>
                  </span>
                  <span className='min-w-0'>
                    <span className='block font-display text-2xl leading-snug group-hover:text-accent transition-colors'>
                      {title}
                    </span>
                    <span className='block mt-1 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-1'>
                      {t(`blog:post.${post.slug}.summary`, post.slug)}
                    </span>
                  </span>
                  <span className='relative hidden sm:block w-28 h-[72px] rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800'>
                    <Image
                      src={post.image}
                      alt=''
                      aria-hidden='true'
                      layout='fill'
                      objectFit='cover'
                      sizes='112px'
                      className='transition-transform duration-500 group-hover:scale-105'
                    />
                  </span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className='mt-10 md:hidden'>{viewAll}</div>
    </section>
  );
}
