/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        primary: '#0F172A',     // slate-900
        secondary: '#334155',   // slate-700
        // Gold accent. Set per theme in globals.css (--accent):
        // light #8C6414 (5.3:1 on white), dark #D4A84A (9:1 on zinc-950) — both WCAG AA.
        accent: 'rgb(var(--accent) / <alpha-value>)',
        darkBg: '#09090b',      // zinc-950
        darkCard: '#18181b',    // zinc-900
        darkText: '#f4f4f5',    // zinc-100
        lightBg: '#ffffff',
        lightCard: '#f4f4f5',   // zinc-100
        lightText: '#09090b',   // zinc-950
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
