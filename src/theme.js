import { toTheme } from '@theme-ui/typography';
import typography from './typography';

const colors = {
  blue: '#374AD3',
  indigo: '#6c5ac2',
  purple: '#9861b8',
  pink: '#FDDDD7',
  red: '#e4586c',
  orange: '#fa8d37',
  yellow: '#FFE6C1',
  green: '#00b77c',
  teal: '#0ccc96',
  cyan: '#1db6ef',
  lightBlue: '#0ba5de',
  blueGray: '#678ba7',
  navy: '#5171c0',
  magenta: '#cb4d98',
  violet: '#b557ab',
  deepPurple: '#776abf',
  white: '#ffffff',
  gray100: '#fafafa',
  gray200: '#eeeeee',
  gray300: '#dde0e2',
  gray400: '#cbcfd2',
  gray500: '#a1a7ab',
  gray600: '#646d74',
  gray700: '#495158',
  gray800: '#394046',
  gray900: '#282d31',
  black: '#000000',
};

// aliases
colors.primary = colors.blue;
colors.secondary = colors.blueGray;
colors.success = colors.teal;
colors.info = colors.cyan;
colors.warning = colors.yellow;
colors.danger = colors.red;
colors.light = colors.gray100;
colors.dark = colors.gray800;
colors.body = colors.gray900;
colors.text = colors.black;
colors.background = colors.white;

export default {
  ...toTheme(typography),
  fonts: {
    body: 'Manjari, Arial',
    heading: 'Manjari, sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors,
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128],
};
