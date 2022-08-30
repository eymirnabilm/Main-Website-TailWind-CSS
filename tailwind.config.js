/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
    center: true,
    padding: '16px',
  },
    extend: {
      colors: {
        prime: '#0e7490',
        second: '#71717a',
        dark: '#18181b',
      },
      screen: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
};
