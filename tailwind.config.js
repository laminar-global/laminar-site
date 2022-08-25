module.exports = {
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9]
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      display: ['Barlow Semi Condensed', 'sans-serif'],
      body: ['Barlow', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(7, 91%, 80%)',
          default: 'hsl(7, 91%, 65%)',
          darker: 'hsl(7, 91%, 45%)'
        }
      }
    }
  },
  variants: {
    aspectRatio: ['responsive'],
    extend: {},
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
    require('tailwindcss-responsive-embed')
  ]
};
