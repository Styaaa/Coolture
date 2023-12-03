/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {},
    backgroundImage: {
      'background': "url('../img/bg.jpg')",
    },
    fontFamily: {
      'Italianno': ['Italianno', 'cursive'],
      'Libre Caslon Display': ["Libre Caslon Display", 'serif']
    },
    colors: {
      transparent: 'transparent',
      current: '#C87941',
      'Secondary': '#290001',
      'Primary': '#87431D',
    },
  },
  plugins: [],
}

