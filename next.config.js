/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {},
	eslint: {
		ignoreDuringBuilds: false,
	},
};

module.exports = nextConfig;
