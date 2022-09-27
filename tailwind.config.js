/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			textColor: {
				dark: '#1B1010BF',
				primary: '#DA342C',
				secondary: '#FF6600',
				success: '#00915F',
				lightSuccess: '#78E1BB',
				offWhite: '#F6F3F3',
				offWhiteMain: '#FCF8F8',
			},
			backgroundColor: {
				dark: '#181010BD',
				lightSuccess: '#78E1BB',
				primary: '#DA342C',
			},
		},
	},
	plugins: [],
};
