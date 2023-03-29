const { tdsTheme } = require('@designervoid/ton-design-system');

module.exports = {
  content: [],
  theme: {
    extend: tdsTheme,
  },
  plugins: [
    require('cssnano'),
  ],
}
