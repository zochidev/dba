/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        discord: {
          blurple: '#5865F2',
          green: '#57F287',
          yellow: '#FEE75C',
          fuchsia: '#EB459E',
          red: '#ED4245',
          white: '#FFFFFF',
          black: '#23272A',
          dark: '#2C2F33',
          darker: '#18191C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'discord': '0 8px 16px rgba(0, 0, 0, 0.24)',
      },
      screens: {
        'xs': '475px',
        ...require('tailwindcss/defaultTheme').screens,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};