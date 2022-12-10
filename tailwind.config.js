const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        titleSm: ['0.6875rem', '0.939rem'],
        titleLg: ['0.8125rem', '1.11rem'],
        bodySm: ['1.5rem', '2.05rem'],
        bodyLg: ['1.75rem', '2.39rem'],
      },
      colors: {
        primary: {
          100: '#CEE3E9',
          200: '#53FFAA',
        },
        secondary: {
          100: '#202733',
          200: '#313A48',
          300: '#4F5D74',
        },
      },
    },
  },
  plugins: [],
};
