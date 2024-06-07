const baseRem = 0.5;
const scale = 1.01;

const makeTemplateRem = (value: number) => `${value}rem`;

const baseRemTemplate = makeTemplateRem(baseRem * scale);

// value ∈ any unsigned int
const generateGoldenRatioSquareSqrt = (value: number) => {
  const phi = (1 + Math.sqrt(5)) / 2;
  return Math.sqrt(phi ** value).toFixed(2);
}

export const tdsTheme = {
  fontFamily: {
    sans: ['Mulish'],
  },
  fontSize: {
    title1: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(15)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '600',
    }],
    title2: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(14)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '400',
    }],
    title3: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(13)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '400',
    }],
    headline1: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(12)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '600',
    }],
    headline2: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(11)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '400',
    }],
    headline3: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(10)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '400',
    }],
    regular1: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(9)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '600',
    }],
    regular2: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(8)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '400',
    }],
    subtitle1: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(7)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '600',
    }],
    subtitle2: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(6)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '400',
    }],
    subtitle3: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(5)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '400',
    }],
    caption1: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(4)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '600',
    }],
    caption2: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(3)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '400',
    }],
    caption3: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(2)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '400',
    }],
    caption4: [`calc(${baseRemTemplate} + ${generateGoldenRatioSquareSqrt(1)}px)`, {
      letterSpacing: '0rem',
      fontWeight: '400',
    }],
  },
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    white: {
      1: "#ffffff",
      2: "#cccccc",
      3: "#999999",
      4: "#666666",
      5: "#333333",
    },
    black: {
      1: "#cccccc",
      2: "#999999",
      3: "#666666",
      4: "#333333",
      5: "#000000",
    },
    main: {
      light: {
        1: '#cce7f5',
        2: '#99cfeb',
        3: '#66b8e0',
        4: '#33a0d6',
        5: '#0088cc',
        6: '#006da3',
        7: '#00527a',
        8: '#003652',
        9: '#001b29',
      },
      dark: {
        1: '#cdecfb',
        2: '#9cd9f7',
        3: '#6ac6f4',
        4: '#39b3f0',
        5: '#07a0ec',
        6: '#0680bd',
        7: '#04608e',
        8: '#03405e',
        9: '#01202f',
      },
    },
    gray: {
      light: {
        1: '#fdfefe',
        2: '#fcfdfd',
        3: '#fafbfd',
        4: '#f9fafc',
        5: '#f7f9fb',
        6: '#c6c7c9',
        7: '#949597',
        8: '#636464',
        9: '#313232',
      },
      dark: {
        1: '#d3d3d4',
        2: '#a7a7a9',
        3: '#7b7b7e',
        4: '#4f4f53',
        5: '#232328',
        6: '#1c1c20',
        7: '#151518',
        8: '#0e0e10',
        9: '#070708',
      },
    },
  },
} as const;