import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../components/layout/AppLayout';
import HeadElement from '../../components/layout/HeadElement';
import BlogPosts, { BLOG_CATEGORIES, BlogCategory, BlogPostType } from '../../data/BlogPosts';
import BlogCard from '../../components/pages/Blog/BlogCard';
import PageHeader from '../../components/reusable/PageHeader/PageHeader';
import ListingToolbar, { ListingView } from '../../components/reusable/ListingToolbar/ListingToolbar';
import PreviewIndexList from '../../components/reusable/PreviewIndexList/PreviewIndexList';
import { useTranslation } from 'next-i18next';
import { trackEvent } from '../../utils/analytics';

const POSTS_PER_PAGE = 9;
const VIEW_KEY = 'blog-view';
const VALID_CATEGORIES: BlogCategory[] = BLOG_CATEGORIES;

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
  const [view, setView] = useState<ListingView>('grid');
  const hasInitialized = useRef(false);

  // Remember the visitor's preferred view (convenience only).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(VIEW_KEY);
      if (saved === 'index' || saved === 'grid') setView(saved);
    } catch {
      /* storage unavailable */
    }
  }, []);
  const chooseView = (v: ListingView) => {
    setView(v);
    trackEvent('click', 'blog_view', v);
    try {
      localStorage.setItem(VIEW_KEY, v);
    } catch {
      /* storage unavailable */
    }
  };

  // Only offer categories that have posts, in the configured order.
  const availableCategories = useMemo(() => {
    const cats = new Set<BlogCategory>(BlogPosts.map((p) => p.category));
    return BLOG_CATEGORIES.filter((c) => cats.has(c));
  }, []);

  useEffect(() => {
    if (!router.isReady || hasInitialized.current) return;
    hasInitialized.current = true;
    const { category, sort, page } = router.query;
    if (category && typeof category === 'string' && VALID_CATEGORIES.includes(category as BlogCategory)) {
      setActiveCategory(category as BlogCategory);
    }
    if (sort && (sort === 'newest' || sort === 'oldest')) {
      setSortOrder(sort);
    }
    if (page && typeof page === 'string') {
      const p = parseInt(page, 10);
      if (p > 0) setCurrentPage(p);
    }
  }, [router.isReady, router.query]);

  const filteredAndSorted = useMemo(() => {
    const filtered = activeCategory === 'all'
      ? BlogPosts
      : BlogPosts.filter((post) => post.category === activeCategory);
    return sortPosts(filtered, sortOrder);
  }, [activeCategory, sortOrder]);

  const totalPages = Math.ceil(filteredAndSorted.length / POSTS_PER_PAGE);
  const safePage = Math.min(currentPage, Math.max(1, totalPages));
  const paginatedPosts = filteredAndSorted.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE
  );

  const syncUrl = useCallback((cat: BlogCategory | 'all', sort: SortOrder, page: number) => {
    const params = new URLSearchParams();
    if (cat !== 'all') params.set('category', cat);
    if (sort !== 'newest') params.set('sort', sort);
    if (page > 1) params.set('page', String(page));
    const qs = params.toString();
    const href = qs ? `/blog?${qs}` : '/blog';
    router.replace(href, undefined, { shallow: true });
  }, [router]);

  const handleCategoryChange = (cat: BlogCategory | 'all') => {
    setActiveCategory(cat);
    setCurrentPage(1);
    syncUrl(cat, sortOrder, 1);
  };

  const handleSortChange = (order: SortOrder) => {
    setSortOrder(order);
    setCurrentPage(1);
    syncUrl(activeCategory, order, 1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    syncUrl(activeCategory, sortOrder, page);
  };

  const blogUrl = router.locale === router.defaultLocale
    ? 'https://goldenogbeka.com/blog'
    : `https://goldenogbeka.com/${router.locale}/blog`;

  const blogListingSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t('blog:page.title'),
    description: t('blog:page.subtitle'),
    url: blogUrl,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: paginatedPosts.map((post, i) => ({
        '@type': 'ListItem',
        position: (safePage - 1) * POSTS_PER_PAGE + i + 1,
        url: `${blogUrl}/${post.slug}`,
        item: {
          '@type': 'BlogPosting',
          headline: t(`blog:post.${post.slug}.title`, post.slug),
          description: t(`blog:post.${post.slug}.summary`, post.slug),
          datePublished: post.date,
          url: `${blogUrl}/${post.slug}`,
        },
      })),
    },
  };

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
        overrideSchemas={[blogListingSchema]}
      />
      <div className='min-h-screen'>
        <PageHeader
          eyebrow={t('blog:page.count', { count: BlogPosts.length })}
          title={t('blog:page.title')}
          highlight={t('blog:page.titleHighlight')}
          subtitle={t('blog:page.subtitle')}
        />

        <ListingToolbar
          filterLabel={t('blog:category.label')}
          options={[
            { value: 'all', label: t('blog:category.all') },
            ...availableCategories.map((c) => ({ value: c, label: t(`blog:category.${c}`) })),
          ]}
          active={activeCategory}
          onFilter={(value) => handleCategoryChange(value as BlogCategory | 'all')}
          view={view}
          onView={chooseView}
          viewGroupLabel={t('blog:view.label')}
          gridLabel={t('blog:view.grid')}
          indexLabel={t('blog:view.index')}
          resultText={t('blog:page.count', { count: filteredAndSorted.length })}
          extra={
            <button
              type='button'
              onClick={() => handleSortChange(sortOrder === 'newest' ? 'oldest' : 'newest')}
              aria-label={`${t('blog:sort.label')}: ${sortOrder === 'newest' ? t('blog:sort.newest') : t('blog:sort.oldest')}`}
              title={sortOrder === 'newest' ? t('blog:sort.newest') : t('blog:sort.oldest')}
              className='h-10 inline-flex items-center gap-1.5 px-3 rounded-full text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                {sortOrder === 'newest' ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d='M4 6h10M4 12h7M4 18h4m11-3-3 3-3-3m3 3V6' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d='M4 6h4M4 12h7M4 18h10m5-9-3-3-3 3m3-3v12' />
                )}
              </svg>
              <span className='hidden sm:inline'>{sortOrder === 'newest' ? t('blog:sort.newest') : t('blog:sort.oldest')}</span>
            </button>
          }
        />

        {view === 'index' ? (
          <PreviewIndexList
            startNumber={(safePage - 1) * POSTS_PER_PAGE + 1}
            items={paginatedPosts.map((post) => ({
              key: post.slug,
              href: `/blog/${post.slug}`,
              title: t(`blog:post.${post.slug}.title`, post.slug),
              meta: `${t(`blog:category.${post.category}`)} · ${new Date(post.date).toLocaleDateString(router.locale || 'en', {
                year: 'numeric',
                month: 'short',
              })}`,
              image: post.image,
              onClick: () => trackEvent('click', 'blog_card', post.slug),
            }))}
          />
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {paginatedPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        )}

        {filteredAndSorted.length === 0 && (
          <p className='text-zinc-500 dark:text-zinc-400 text-center py-16'>
            {t('blog:page.noPosts')}
          </p>
        )}

        {totalPages > 1 && (
          <nav className='flex flex-wrap items-center justify-center gap-2 mt-10 md:mt-16' aria-label={t('blog:pagination.label')}>
            <button
              onClick={() => handlePageChange(Math.max(1, safePage - 1))}
              disabled={safePage === 1}
              className='px-4 py-2 rounded-full text-sm border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed'
              aria-label={t('blog:pagination.prev')}
            >
              {t('blog:pagination.prev')}
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full text-sm tabular-nums transition-colors ${
                  safePage === page
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
                aria-label={`${t('blog:pagination.page')} ${page}`}
                aria-current={safePage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(Math.min(totalPages, safePage + 1))}
              disabled={safePage === totalPages}
              className='px-4 py-2 rounded-full text-sm border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed'
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

  // The listing only shows titles and summaries, so drop each post's paragraphs from the page data.
  const blog = loadNs('blog');
  const posts = (blog.post || {}) as Record<string, { title?: string; summary?: string }>;
  const listingPosts: Record<string, { title?: string; summary?: string }> = {};
  for (const slug of Object.keys(posts)) {
    listingPosts[slug] = { title: posts[slug].title, summary: posts[slug].summary };
  }

  const initialI18nStore: Record<string, Record<string, unknown>> = {};
  initialI18nStore[locale] = {
    common: loadNs('common'),
    blog: { ...blog, post: listingPosts },
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
