/** @type {import('tailwindcss').Config} */

const tdsTheme = require('./tdsTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: tdsTheme,
  plugins: [],
}
