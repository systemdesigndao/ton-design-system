// value ∈ [~(-3), +∞]
// https://t.me/s/tondesignsystem/220
const generateGoldenRatioSquareSqrt = (value: number) => {
  const phi = (1 + Math.sqrt(5)) / 2;
  return Math.sqrt(phi ** value).toFixed(2);
}

export const tdsTheme = {
  fontFamily: {
    sans: [
      'ui-sans-serif',
      'system-ui',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji'
    ],
    serif: [
      'ui-serif',
      'Georgia',
      'Cambria',
      'Times New Roman',
      'Times',
      'serif'
    ],
    mono: [
      'ui-monospace',
      'SFMono-Regular',
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace'
    ]
  },
  fontSize: {
    title1: [`${generateGoldenRatioSquareSqrt((1.68**1.5))}rem`],
    title2: [`${generateGoldenRatioSquareSqrt((1.68**1.4))}rem`],
    title3: [`${generateGoldenRatioSquareSqrt((1.68**1.3))}rem`],
    headline1: [`${generateGoldenRatioSquareSqrt((1.68**1.2))}rem`],
    headline2: [`${generateGoldenRatioSquareSqrt((1.68**1.1))}rem`],
    headline3: [`${generateGoldenRatioSquareSqrt((1.68**0))}rem`],
    regular1: [`${generateGoldenRatioSquareSqrt(0)}rem`],
    regular2: [`${generateGoldenRatioSquareSqrt(0)}rem`],
    regular3: [`${generateGoldenRatioSquareSqrt(-(1.68**1))}rem`],
    subtitle1: [`${generateGoldenRatioSquareSqrt(-(1.68**1.1))}rem`],
    subtitle2: [`${generateGoldenRatioSquareSqrt(-(1.68**1.2))}rem`],
    subtitle3: [`${generateGoldenRatioSquareSqrt(-(1.68**1.3))}rem`],
    caption1: [`${generateGoldenRatioSquareSqrt(-(1.68**1.4))}rem`],
    caption2: [`${generateGoldenRatioSquareSqrt(-(1.68**1.5))}rem`],
    caption3: [`${generateGoldenRatioSquareSqrt(-(1.68**1.6))}rem`],
    caption4: [`${generateGoldenRatioSquareSqrt(-(1.68**1.7))}rem`],
  },
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    blue: {
      1: '#1ac9ff',
      2: '#2d83ec',
    },
    orange: {
      1: '#cc9900',
      2: '#ffbe1e19',
      3: '#ff900019',
    },
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
  spacing: {
    none: '0',
    xs: `${generateGoldenRatioSquareSqrt(-3)}rem`,
    sm: `${generateGoldenRatioSquareSqrt(-2)}rem`,
    md: `${generateGoldenRatioSquareSqrt(-1)}rem`,
    lg: `${generateGoldenRatioSquareSqrt(0)}rem`,
    xl: `${generateGoldenRatioSquareSqrt(1)}rem`,
    '2xl': `${generateGoldenRatioSquareSqrt(2)}rem`,
    '3xl': `${generateGoldenRatioSquareSqrt(3)}rem`,
  },
  fontWeight: {
    light: +generateGoldenRatioSquareSqrt(20.5),
    normal: +generateGoldenRatioSquareSqrt(22.5),
    medium: +generateGoldenRatioSquareSqrt(25.5),
    bold: +generateGoldenRatioSquareSqrt(26.5),
    bolder: +generateGoldenRatioSquareSqrt(28.5),
  },
  lineHeight: {
    short: `${generateGoldenRatioSquareSqrt(1)}rem`,
    normal: `${generateGoldenRatioSquareSqrt(2)}rem`,
    tall: `${generateGoldenRatioSquareSqrt(3)}rem`,
  },
  borderRadius: {
    none: '0',
    sm: `${generateGoldenRatioSquareSqrt(-1)}rem`,
    md: `${generateGoldenRatioSquareSqrt(1)}rem`,
    lg: `${generateGoldenRatioSquareSqrt(3)}rem`,
    xl: `${generateGoldenRatioSquareSqrt(5)}rem`,
  },
  borderWidth: {
    thin: `${generateGoldenRatioSquareSqrt(-2)}px`,
    medium: `${generateGoldenRatioSquareSqrt(0)}px`,
    thick: `${generateGoldenRatioSquareSqrt(2)}px`,
  },
  height: {
    'dvh': '100dvh',
    'lvh': '100lvh',
    'svh': '100svh',
  }
} as const;