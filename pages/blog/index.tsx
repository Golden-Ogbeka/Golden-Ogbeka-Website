import { useState } from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../components/layout/AppLayout';
import HeadElement from '../../components/layout/HeadElement';
import BlogPosts, { BlogCategory } from '../../data/BlogPosts';
import BlogCard from '../../components/pages/Blog/BlogCard';
import CategoryFilter from '../../components/pages/Blog/CategoryFilter';
import { useTranslation } from 'next-i18next';

export default function Blog() {
  const { t } = useTranslation(['common', 'blog']);
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');

  const filteredPosts =
    activeCategory === 'all'
      ? BlogPosts
      : BlogPosts.filter((post) => post.category === activeCategory);

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

        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className='text-zinc-500 dark:text-zinc-400 text-center py-16'>
            {t('blog:page.noPosts')}
          </p>
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
