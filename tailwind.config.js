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
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: '#0F172A',     // slate-900
        secondary: '#334155',   // slate-700
        accent: '#2563EB',      // blue-600 (WCAG AA compliant on white: 4.5:1+)
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
  plugins: [],
};
