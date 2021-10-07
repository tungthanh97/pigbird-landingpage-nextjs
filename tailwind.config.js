const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      width: {
        body: '1000px',
      },
      height: {
        body: '641px',
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: ' #0666eb',
        dark: '#222222',
      },
      textColor: {
        primary: ' #0666eb',
      },
      backgroundImage: {
        'hero-banner': "url('/img/Hero.jpg')",
      },
      gridTemplateRows: {
        bodyHeader: '2fr 1fr 1fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
