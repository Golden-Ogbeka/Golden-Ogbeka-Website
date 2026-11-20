import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppLayout from '../../components/layout/AppLayout';
import HeadElement from '../../components/layout/HeadElement';
import BlogDetail from '../../components/pages/Blog/BlogDetail';
import RelatedPosts, { getRelatedPosts } from '../../components/pages/Blog/RelatedPosts';
import BlogPosts, { BlogPostType } from '../../data/BlogPosts';
import { useTranslation } from 'next-i18next';
import { trackEvent } from '../../utils/analytics';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  const { t } = useTranslation(['common', 'blog']);
  const router = useRouter();

  if (!post) return null;

  const postUrl = `${router.locale === router.defaultLocale ? '' : '/' + router.locale}/blog/${post.slug}`;
  const fullPageUrl = `https://goldenogbeka.com${postUrl}`;
  const paragraphs = t(`blog:post.${post.slug}.paragraphs`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[];

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: t(`blog:post.${post.slug}.title`, post.slug),
    description: t(`blog:post.${post.slug}.summary`, post.slug),
    articleBody: Array.isArray(paragraphs) ? paragraphs.join('\n') : '',
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Golden Ogbeka',
      url: 'https://goldenogbeka.com',
    },
    image: `${'https://goldenogbeka.com'}${post.ogImagePath}`,
    url: fullPageUrl,
    mainEntityOfPage: fullPageUrl,
    publisher: {
      '@type': 'Person',
      name: 'Golden Ogbeka',
    },
  };

  return (
    <AppLayout>
      <HeadElement
        pageTitle={`${t(`blog:post.${post.slug}.title`, post.slug)} | Golden Ogbeka`}
        description={t(`blog:post.${post.slug}.summary`, post.slug)}
        siteLink={fullPageUrl}
        ogImage={post.ogImagePath}
        ogType='article'
        articlePublishedTime={post.date}
        articleAuthor='Golden Ogbeka'
        articleTags={[t(`blog:category.${post.category}`)]}
        breadcrumb={[
          { name: 'Golden Ogbeka', url: '/' },
          { name: t('common:nav.blog'), url: '/blog' },
          { name: t(`blog:post.${post.slug}.title`, post.slug), url: postUrl },
        ]}
        overrideSchemas={[blogPostingSchema]}
      />

      <article className='pt-10 sm:pt-14 md:pt-16 min-h-screen'>
        <Link href='/blog'>
          <a
            className='group inline-flex items-center py-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 transition-colors rounded-sm'
            onClick={() => trackEvent('click', 'navigation', 'Back to Blog')}
          >
            <svg
              aria-hidden='true'
              className='w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 rtl:-scale-x-100 transition-transform group-hover:-translate-x-0.5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
            {t('blog:backToBlog')}
          </a>
        </Link>

        <BlogDetail post={post} />
        <RelatedPosts currentSlug={post.slug} currentCategory={post.category} />
      </article>
    </AppLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = locales!.flatMap((locale) =>
    BlogPosts.map((post) => ({
      params: { slug: post.slug },
      locale,
    }))
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const post = BlogPosts.find((p) => p.slug === params?.slug);
  const lng = locale || 'en';

  const fs = require('fs');
  const path = require('path');

  function loadNs(ns: string): Record<string, unknown> {
    const fp = path.resolve(process.cwd(), `public/locales/${lng}/${ns}.json`);
    return JSON.parse(fs.readFileSync(fp, 'utf8'));
  }

  const common = loadNs('common');
  const blog = loadNs('blog');

  // Must match the posts RelatedPosts renders, or their titles fall back to slugs.
  const relatedPosts = post ? getRelatedPosts(post.slug, post.category) : [];

  // Posts are nested under `post`: keep this post in full, and only title + summary for related posts.
  type PostText = { title?: string; summary?: string; paragraphs?: string[] };
  const allPosts = (blog.post || {}) as Record<string, PostText>;
  const keptPosts: Record<string, PostText> = {};
  if (post && allPosts[post.slug]) keptPosts[post.slug] = allPosts[post.slug];
  for (const related of relatedPosts) {
    if (allPosts[related.slug]) {
      keptPosts[related.slug] = { title: allPosts[related.slug].title, summary: allPosts[related.slug].summary };
    }
  }
  blog.post = keptPosts;

  const initialI18nStore: Record<string, Record<string, unknown>> = {};
  initialI18nStore[lng] = { common, blog };

  return {
    props: {
      post,
      _nextI18Next: {
        initialI18nStore,
        initialLocale: lng,
        ns: ['common', 'blog'],
        userConfig: {
          i18n: { defaultLocale: 'en', locales: ['en', 'zh', 'fr', 'de', 'es', 'ja', 'ko', 'pt', 'ru', 'ar'] },
        },
      },
    },
  };
};
