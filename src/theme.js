import { toTheme } from '@theme-ui/typography'
import typography from './typography';

const theme = toTheme(typography);

export default {
  ...toTheme(typography),
  fonts: {
    body: 'Manjari, Arial',
    heading: 'Manjari, sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#444',
    background: '#fff',
    primary: '#33e',
  },
};