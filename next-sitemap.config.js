/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://goldenogbeka.com',
  generateRobotsTxt: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
