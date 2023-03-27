const { tdsTheme } = require('@designervoid/ton-design-system')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx,html}'],
  darkMode: 'media',
  theme: {
    extend: tdsTheme,
  },
  variants: {},
  plugins: [],
}
