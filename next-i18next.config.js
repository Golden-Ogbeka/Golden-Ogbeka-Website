/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    locales: ['en', 'zh', 'fr', 'de', 'es', 'ja', 'ko', 'pt', 'ru', 'ar'],
    defaultLocale: 'en',
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
