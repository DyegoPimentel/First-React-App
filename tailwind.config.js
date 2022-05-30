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
        'primary-light': '#7700ff',
        'primary-dark': '#5b04bc',
        'black-dark': '#111213ff',
        'gray-dark': '#212224ff',
        'silver-theme': '#a1a1a1ff',
        'blue-theme': '#2f71e8ff',
        'cyan-theme': '#29b9f0ff',
        'light-theme': '#fafafa',
        'silver-low-theme':'rgb(246 247 251)'
        
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },

  },
  plugins: [],
}
