const defaultTheme = require('tailwindcss/defaultTheme');

const mainBaseColor = 'orange';

module.exports = {
  theme: {
    extend: {
      colors: {
        main: defaultTheme.colors[mainBaseColor],
        gray: {
          ...defaultTheme.colors.gray,
          '900a7': 'rgba(26, 32,44, .7)',
        },
      },
      fontFamily: {
        sans: [
          'Roboto',
        ],
        headline: [
          'Boogaloo',
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
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};
