import Head from 'next/head';
import { useRouter } from 'next/router';

const SITE_URL = 'https://goldenogbeka.com';
const LOCALES = ['en', 'zh', 'fr', 'de', 'es', 'ja', 'ko', 'pt', 'ru', 'ar'];

const OG_LOCALE_MAP: Record<string, string> = {
  en: 'en_US', zh: 'zh_CN', fr: 'fr_FR', de: 'de_DE', es: 'es_ES',
  ja: 'ja_JP', ko: 'ko_KR', pt: 'pt_PT', ru: 'ru_RU', ar: 'ar_AR',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Golden Ogbeka',
  url: SITE_URL,
  jobTitle: 'Senior Software Engineer',
  sameAs: [
    'https://www.linkedin.com/in/goldenogbeka/',
    'https://github.com/Golden-Ogbeka',
  ],
  description:
    'Senior Software Engineer creating scalable products at the intersection of technology and innovation.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE_URL,
  name: 'Golden Ogbeka',
  description:
    'Senior Software Engineer creating scalable products at the intersection of technology and innovation.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SoftwareApplicationSchema {
  name: string;
  description: string;
  url: string;
  image?: string;
  applicationCategory?: string;
}

function HeadElement({
  pageTitle = 'Golden Ogbeka | Senior Software Engineer',
  description = 'Senior Software Engineer creating scalable products at the intersection of technology and innovation.',
  noIndex = false,
  siteLink = SITE_URL,
  ogImage = '/og-image.png',
  ogType = 'website',
  articlePublishedTime,
  articleAuthor,
  articleTags,
  breadcrumb,
  softwareApplication,
  overrideSchemas,
}: {
  pageTitle?: string;
  description?: string;
  noIndex?: boolean;
  siteLink?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  articlePublishedTime?: string;
  articleAuthor?: string;
  articleTags?: string[];
  breadcrumb?: BreadcrumbItem[];
  softwareApplication?: SoftwareApplicationSchema;
  overrideSchemas?: Record<string, unknown>[];
}) {
  const router = useRouter();
  const fullOgImageUrl = `${SITE_URL}${ogImage}`;

  const pathWithoutLocale =
    router.locale === router.defaultLocale
      ? router.asPath
      : router.asPath.replace(new RegExp(`^/${router.locale}`), '') || '/';

  const getLocalizedUrl = (locale: string) =>
    locale === router.defaultLocale
      ? `${SITE_URL}${pathWithoutLocale}`
      : `${SITE_URL}/${locale}${pathWithoutLocale}`;

  const breadcrumbSchema = breadcrumb
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
        })),
      }
    : null;

  const softwareSchema = softwareApplication
    ? {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: softwareApplication.name,
        description: softwareApplication.description,
        url: softwareApplication.url.startsWith('http')
          ? softwareApplication.url
          : `${SITE_URL}${softwareApplication.url}`,
        image: softwareApplication.image?.startsWith('http')
          ? softwareApplication.image
          : `${SITE_URL}${softwareApplication.image}`,
        applicationCategory: softwareApplication.applicationCategory || 'WebApplication',
        operatingSystem: 'Web',
        author: { '@id': `${SITE_URL}#person` },
      }
    : null;

  const schemas = overrideSchemas ?? [personSchema, websiteSchema, breadcrumbSchema, softwareSchema].filter(Boolean);

  return (
    <Head>
      {/* Essential Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />
      <meta name='google' content='notranslate' />
      <link rel='icon' href='/favicon.ico' />
      <meta name='author' content='Golden Ogbeka' />

      {/* Primary SEO Tags */}
      <title>{pageTitle}</title>
      <meta name='title' content={pageTitle} />
      <meta name='description' content={description} />
      <link rel='canonical' href={siteLink} />

      {/* Internationalization - Hreflang */}
      <link rel='alternate' hrefLang='x-default' href={getLocalizedUrl('en')} />
      {LOCALES.map((locale) => (
        <link key={locale} rel='alternate' hrefLang={locale} href={getLocalizedUrl(locale)} />
      ))}

      {/* Open Graph / Facebook */}
      <meta property='og:type' content={ogType} />
      <meta property='og:site_name' content='Golden Ogbeka' />
      <meta property='og:locale' content={OG_LOCALE_MAP[router.locale || 'en'] || 'en_US'} />
      <meta property='og:url' content={siteLink} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={fullOgImageUrl} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      {ogType === 'article' && articlePublishedTime && (
        <meta property='article:published_time' content={articlePublishedTime} />
      )}
      {ogType === 'article' && articleAuthor && (
        <meta property='article:author' content={articleAuthor} />
      )}
      {ogType === 'article' && articleTags?.map((tag) => (
        <meta key={tag} property='article:tag' content={tag} />
      ))}

      {/* Twitter / X */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={siteLink} />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={fullOgImageUrl} />

      {/* Schema.org Structured Data */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {noIndex && <meta name='robots' content='noindex, nofollow' />}
    </Head>
  );
}

export default HeadElement;
