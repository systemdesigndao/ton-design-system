const { tdsTheme } = require('../../package/index');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...tdsTheme,
    },
  },
  plugins: [],
};