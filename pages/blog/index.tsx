import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../components/layout/AppLayout';
import HeadElement from '../../components/layout/HeadElement';
import BlogPosts, { BlogCategory, BlogPostType } from '../../data/BlogPosts';
import BlogCard from '../../components/pages/Blog/BlogCard';
import CategoryFilter from '../../components/pages/Blog/CategoryFilter';
import { useTranslation } from 'next-i18next';

const POSTS_PER_PAGE = 6;

type SortOrder = 'newest' | 'oldest';

function sortPosts(posts: BlogPostType[], order: SortOrder): BlogPostType[] {
  const sorted = [...posts].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return order === 'newest' ? sorted.reverse() : sorted;
}

export default function Blog() {
  const { t } = useTranslation(['common', 'blog']);
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [currentPage, setCurrentPage] = useState(1);

  const availableCategories = useMemo(() => {
    const cats = new Set<BlogCategory>(BlogPosts.map((p) => p.category));
    const result: (BlogCategory | 'all')[] = ['all'];
    if (cats.has('ai')) result.push('ai');
    if (cats.has('tips')) result.push('tips');
    if (cats.has('tech')) result.push('tech');
    if (cats.has('faith')) result.push('faith');
    return result;
  }, []);

  const filteredAndSorted = useMemo(() => {
    const filtered = activeCategory === 'all'
      ? BlogPosts
      : BlogPosts.filter((post) => post.category === activeCategory);
    return sortPosts(filtered, sortOrder);
  }, [activeCategory, sortOrder]);

  const totalPages = Math.ceil(filteredAndSorted.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredAndSorted.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (cat: BlogCategory | 'all') => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSortChange = (order: SortOrder) => {
    setSortOrder(order);
    setCurrentPage(1);
  };

  const blogUrl = router.locale === router.defaultLocale
    ? 'https://goldenogbeka.com/blog'
    : `https://goldenogbeka.com/${router.locale}/blog`;

  return (
    <AppLayout>
      <HeadElement
        pageTitle='Blog | Golden Ogbeka'
        description='Thoughts on engineering, AI, and software craft by Golden Ogbeka.'
        siteLink={blogUrl}
        breadcrumb={[
          { name: 'Golden Ogbeka', url: '/' },
          { name: t('common:nav.blog'), url: '/blog' },
        ]}
      />
      <div className='pt-32 min-h-screen'>
        <div className='mb-12 animate-fade-in-up'>
          <h1 className='text-4xl md:text-5xl font-display font-semibold mb-4'>
            {t('blog:page.title')}
          </h1>
          <p className='text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl'>
            {t('blog:page.subtitle')}
          </p>
        </div>

        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10'>
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            availableCategories={availableCategories}
          />
          <div className='flex items-center gap-2'>
            <span className='text-sm text-zinc-500 dark:text-zinc-400'>{t('blog:sort.label')}</span>
            <button
              onClick={() => handleSortChange(sortOrder === 'newest' ? 'oldest' : 'newest')}
              className='minimal-card px-4 py-2 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent flex items-center gap-2'
              aria-label={sortOrder === 'newest' ? t('blog:sort.oldest') : t('blog:sort.newest')}
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                {sortOrder === 'newest' ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4' />
                )}
              </svg>
              {sortOrder === 'newest' ? t('blog:sort.newest') : t('blog:sort.oldest')}
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {paginatedPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {filteredAndSorted.length === 0 && (
          <p className='text-zinc-500 dark:text-zinc-400 text-center py-16'>
            {t('blog:page.noPosts')}
          </p>
        )}

        {totalPages > 1 && (
          <nav className='flex items-center justify-center gap-2 mt-16' aria-label={t('blog:pagination.label')}>
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className='px-4 py-2 rounded-lg text-sm font-medium minimal-card text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-accent'
              aria-label={t('blog:pagination.prev')}
            >
              {t('blog:pagination.prev')}
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-accent ${
                  currentPage === page
                    ? 'bg-accent text-white'
                    : 'minimal-card text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent'
                }`}
                aria-label={`${t('blog:pagination.page')} ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className='px-4 py-2 rounded-lg text-sm font-medium minimal-card text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-accent'
              aria-label={t('blog:pagination.next')}
            >
              {t('blog:pagination.next')}
            </button>
          </nav>
        )}
      </div>
    </AppLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const fs = require('fs');
  const path = require('path');

  function loadNs(ns: string): Record<string, unknown> {
    const fp = path.resolve(process.cwd(), `public/locales/${locale}/${ns}.json`);
    return JSON.parse(fs.readFileSync(fp, 'utf8'));
  }

  const initialI18nStore: Record<string, Record<string, unknown>> = {};
  initialI18nStore[locale] = {
    common: loadNs('common'),
    blog: loadNs('blog'),
  };

  return {
    props: {
      _nextI18Next: {
        initialI18nStore,
        initialLocale: locale,
        ns: ['common', 'blog'],
        userConfig: {
          i18n: { defaultLocale: 'en', locales: ['en', 'zh', 'fr', 'de', 'es', 'ja', 'ko', 'pt', 'ru', 'ar'] },
        },
      },
    },
  };
}
