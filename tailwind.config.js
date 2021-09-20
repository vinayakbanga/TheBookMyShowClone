module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navCol:
        {
          50: '#e4f5ff',
          100: '#bdddf4',
          200: '#2B3148',
          300: '#6bafe2',
          400: '#4698da',
          500: '#307fc1',
          600: '#246296',
          700: '#18466c',
          800: '#0b2a42',
          900: '#000f1a',
        }

      }
       
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
