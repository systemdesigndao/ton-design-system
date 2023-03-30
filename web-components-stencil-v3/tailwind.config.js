const { tdsTheme } = require('@designervoid/ton-design-system');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      ...tdsTheme,
      fontFamily: {
        mulish: ['Mulish'],
      }
    },
  },
  plugins: [
    require('cssnano'),
  ],
}
