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
      'white': {
        1: '#ffffff',
      },
      'black': {
        1: '#000000',
      },
      'main': {
        1: {
          light: '#0088CC',
          dark: '#07A0EC',
        }
      },
      'gray': {
        1: {
          light: '#f7f9fb',
          dark: '#232328',
        },
        2: {
          light: '#dee0e1',
          dark: '#1f1f24',
        },
        3: {
          light: '#c5c7c8',
          dark: '#1c1c20',
        },
        4: {
          light: '#acaeaf',
          dark: '#18181c',
        },
        5: {
          light: '#949596',
          dark: '#151518',
        },
        6: {
          light: '#7b7c7d',
          dark: '#111114',
        },
        7: {
          light: '#626364',
          dark: '#0e0e10',
        },
        8: {
          light: '#4a4a4b',
          dark: '#0a0a0c',
        },
        9: {
          light: '#7b7c7d',
          dark: '#070708',
        },
        10: {
          light: '#313132',
          dark: '#030304',
        },
      },
    },
  },
  plugins: [],
}
