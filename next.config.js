	const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n,
	images: {
		domains: ['flagcdn.com'],
	},
	env: {},
	eslint: {
		ignoreDuringBuilds: false,
	},
};

module.exports = nextConfig;
