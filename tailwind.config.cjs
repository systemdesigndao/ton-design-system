/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Mulish'],
    },
    fontSize: {
      'title1': ['2rem', {
        lineHeight: '2.35rem',
        letterSpacing: '0rem',
        fontWeight: '500',
      }],
      'title2': ['1.42rem', {
        lineHeight: '1.64rem',
        letterSpacing: '0rem',
        fontWeight: '500',
      }],
      'title3': ['1.21rem', {
        lineHeight: '1.42rem',
        letterSpacing: '0rem',
        fontWeight: '500',
      }],
      'headline1': ['1.14rem', {
        lineHeight: '1.35rem',
        letterSpacing: '0rem',
        fontWeight: '400',
      }],
      'headline2': ['1.14rem', {
        lineHeight: '1.35rem',
        letterSpacing: '0rem',
        fontWeight: '500',
      }],
      'headline3': ['1.07rem', {
        lineHeight: '1.28rem',
        letterSpacing: '0rem',
        fontWeight: '500',
      }],
      'regular1': ['1.14rem', {
        lineHeight: '1.35rem',
        letterSpacing: '0rem',
        fontWeight: '400',
      }],
      'regular2': ['1.07rem', {
        lineHeight: '1.28rem',
        letterSpacing: '0rem',
        fontWeight: '400',
      }],
      'subtitle1': ['1rem', {
        lineHeight: '1.14rem',
        letterSpacing: '0rem',
        fontWeight: '400',
      }],
      'subtitle2': ['1rem', {
        lineHeight: '1.14rem',
        letterSpacing: '0rem',
        fontWeight: '500',
      }],
      'subtitle3': ['0.92rem', {
        lineHeight: '1.07rem',
        letterSpacing: '0rem',
        fontWeight: '400',
      }],
      'caption1': ['0.92rem', {
        lineHeight: '1.07rem',
        letterSpacing: '0rem',
        fontWeight: '500',
      }],
      'caption2': ['0.85rem', {
        lineHeight: '0.92rem',
        letterSpacing: '0rem',
        fontWeight: '400',
      }],
      'caption3': ['0.78rem', {
        lineHeight: '0.92rem',
        letterSpacing: '0rem',
        fontWeight: '400',
      }],
      'caption4': ['0.78rem', {
        lineHeight: '0.92rem',
        letterSpacing: '0rem',
        fontWeight: '500',
      }],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'mainLight': '#0088CC',
      'mainDark': '#07A0EC',
      'grayLight': '#F7F9FB',
      'grayDark': '#232328',
    },
  },
  plugins: [],
}
