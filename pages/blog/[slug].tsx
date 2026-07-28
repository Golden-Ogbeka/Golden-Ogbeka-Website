import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppLayout from '../../components/layout/AppLayout';
import HeadElement from '../../components/layout/HeadElement';
import BlogDetail from '../../components/pages/Blog/BlogDetail';
import RelatedPosts from '../../components/pages/Blog/RelatedPosts';
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

  return (
    <AppLayout>
      <HeadElement
        pageTitle={`${t(`blog:post.${post.slug}.title`, post.slug)} | Golden Ogbeka`}
        description={t(`blog:post.${post.slug}.summary`, post.slug)}
        siteLink={`https://goldenogbeka.com${postUrl}`}
        ogImage={post.ogImagePath}
        ogType='article'
        articlePublishedTime={post.date}
        articleAuthor='Golden Ogbeka'
        breadcrumb={[
          { name: 'Golden Ogbeka', url: '/' },
          { name: t('common:nav.blog'), url: '/blog' },
          { name: t(`blog:post.${post.slug}.title`, post.slug), url: postUrl },
        ]}
      />

      <article className='pt-32 min-h-screen'>
        <Link href='/blog'>
          <a
            className='inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 mb-8 transition-colors'
            onClick={() => trackEvent('click', 'navigation', 'Back to Blog')}
          >
            <svg
              className='w-4 h-4 mr-2'
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

  const currentPrefix = `post.${post?.slug}.`;

  const relatedPosts = BlogPosts.filter(
    (p) => p.slug !== post?.slug && (p.category === post?.category || true)
  ).slice(0, 4);

  const relatedSlugs = new Set(relatedPosts.map((p) => p.slug));

  for (const key of Object.keys(blog)) {
    if (key.startsWith('post.')) {
      const keySlug = key.substring(5, key.indexOf('.', 5));
      if (keySlug !== post?.slug && !relatedSlugs.has(keySlug)) {
        delete blog[key];
      }
    }
  }

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
