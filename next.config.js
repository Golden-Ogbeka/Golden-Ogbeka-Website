/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['en', 'zh', 'fr', 'de', 'es', 'ja', 'ko', 'pt', 'ru', 'ar'],
		defaultLocale: 'en',
	},
	images: {
		domains: ['flagcdn.com'],
	},
	env: {},
	eslint: {
		ignoreDuringBuilds: false,
	},
};

module.exports = nextConfig;
