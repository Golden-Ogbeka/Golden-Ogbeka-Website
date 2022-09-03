/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		API_URL: 'https://api-dev-frscsm-lagos.azurewebsites.net/api/v1',
		SESSION_KEY: 'FRSC_SPECIAL_MARSHALL',
		SESSION_NAME: 'FRSC_SM',
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
