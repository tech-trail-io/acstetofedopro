const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      primary: '#A72640',
      primary_lighter: '#A73640',
      section_bg: '#4E5256',
      white: '#FFFFFF',
    },
    fontFamily: {
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@headlessui/tailwindcss')],
};
