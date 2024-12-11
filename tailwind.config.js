/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        tablet: { max: '999px' }, //custom screen
      },
      colors: {
        primary: '#1E40AF',
      },
    },
  },
  plugins: [],
};
