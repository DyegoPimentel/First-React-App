module.exports = {
  darkMode: "class",
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0rem',
        lg: '0rem',
        xl: '0rem',
        '2xl': '0rem',
      },
    },
    extend: {
      colors: {

        'theme': {
          'primary-light': '#2F71E8',
          'primary-dark': '#285EBD',
          'secondary-light': '#29B9F0',
          'secondary-dark': '#2398C4',
          'black': '#111213',
          'white': '#FAFAFA',
          'gray-light': '#707070',
          'gray-dark': '#A1A1A1',
        },
        'high': {
          'primary-light': '#E82F98',
          'primary-dark': '#BC297D',
          'secondary-light': '#B529F0',
          'secondary-dark': '#D32CBB',
        },
        'background': {
          'primary-light': '#FAFAFA',
          'primary-dark': '#111213',
          'secondary-light': '#E4E4E4',
          'secondary-dark': '#212224',
        },
        'states': {
          'success-light': '#44CC77',
          'warning-light': '#FFBB00',
          'error-light': '#EE2C4A',
          'info-light': '#5D9FCF',
          'success-dark': '#39A763',
          'warning-dark': '#CF9904',
          'error-dark': '#C1273F',
          'info-dark': '#4D83A9',
        },
 
        /*'primary-light': '#7700ff',
        'primary-dark': '#5b04bc',
        'black-dark': '#111213',
        'gray-dark': '#212224ff',
        'silver-theme': '#a1a1a1ff',
        'blue-theme': '#2f71e8ff',
        'cyan-theme': '#29b9f0ff',
        'light-theme': '#fafafa',
        'silver-low-theme':'rgb(246 247 251)'*/
        
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },

  },
  plugins: [],
}
