/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			textColor: {
				secondary: '#004E93',
				dark: '#1A1A1A',
				lightSecondary: '#6CACE4',
			},
			backgroundColor: {
				dark: '#111111',
			},
		},
	},
	plugins: [],
};
