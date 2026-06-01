import Head from 'next/head';

const SITE_URL = 'https://goldenogbeka.com';

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

function HeadElement({
  pageTitle = 'Golden Ogbeka | Senior Software Engineer',
  description = 'Senior Software Engineer creating scalable products at the intersection of technology and innovation.',
  noIndex = false,
  siteLink = SITE_URL,
  ogImage = '/og-image.png',
}: {
  pageTitle?: string;
  description?: string;
  noIndex?: boolean;
  siteLink?: string;
  ogImage?: string;
}) {
  const fullOgImageUrl = `${SITE_URL}${ogImage}`;

  return (
    <Head>
      {/* Essential Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />
      <link rel='icon' href='/favicon.ico' />

      {/* Primary SEO Tags */}
      <title>{pageTitle}</title>
      <meta name='title' content={pageTitle} />
      <meta name='description' content={description} />
      <link rel='canonical' href={siteLink} />

      {/* Internationalization */}
      <link rel='alternate' hrefLang='en' href={SITE_URL} />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={siteLink} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={fullOgImageUrl} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />

      {/* Twitter / X */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={siteLink} />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={fullOgImageUrl} />

      {/* Schema.org Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {noIndex && <meta name='robots' content='noindex, nofollow' />}
    </Head>
  );
}

export default HeadElement;
