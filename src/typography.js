import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 2,
  googleFonts: [
    {
      name: 'Manjari',
      styles: ['100', '400', '700'],
    },
  ],
  headerFontFamily: ['Manjari', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Manjari', 'serif'],
});

export default typography;
