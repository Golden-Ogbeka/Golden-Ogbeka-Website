	const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compress: true,
	i18n,
	images: {
		domains: ['flagcdn.com'],
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	env: {},
	eslint: {
		ignoreDuringBuilds: false,
	},
	poweredByHeader: false,
	compiler: {
		reactRemoveProperties: true,
		removeConsole: {
			exclude: ['error', 'warn'],
		},
	},
};

module.exports = nextConfig;
