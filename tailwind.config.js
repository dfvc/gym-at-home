const defaultTheme = require('tailwindcss/defaultTheme');

const mainBaseColor = 'orange';

module.exports = {
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        xxl: '1920px',
      },
      colors: {
        main: defaultTheme.colors[mainBaseColor],
        custom: {
          spaceCadet: '#1f2041',
          spaceCadetA7: 'rgba(31, 32, 65, .7)',
          cyberGrape: '#4b3f72',
          maximumYellow: '#ffc857',
          viridianGreen: '#119da4',
          blueSapphire: '#19647e',
          blueSapphireA5: 'rgba(25, 100, 126, .5)',
        }
      },
      fontFamily: {
        sans: [
          'Roboto',
        ],
        headline: [
          'Passion One',
        ],
        'bungee-outline': [
          'Bungee Outline',
        ],
      },
      appBar: {
        height: {
          sm: '50px',
          md: '60px',
          lg: '60px',
        }
      }
    },
  },
  variants: {
    margin: ['hover', 'responsive'],
    padding: ['hover', 'responsive'],
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      'assets/scss/**/*.scss',
    ],
  },
};
