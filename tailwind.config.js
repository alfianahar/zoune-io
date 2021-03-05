module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bludark': '#3d5a80',
        'blulight': '#98c1d9',
        'btn1.cyan': '#90f1f4',
        'btn2.blu': '#16d8df',
        'red.oth': '#ee6c4d',
        'base1': '#293241',
        'base2': '#9ba8c0'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
