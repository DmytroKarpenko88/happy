/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],

  theme: {
    extend: {
      colors: {
        666: '#666666',
        bgBTN: '#222',
      },

      boxShadow: {
        l: '0px 3px 15px 0px rgba(0, 0, 0, 0.15);',
      },

      lineHeight: {
        110: '110%',
      },
    },
  },
  plugins: [],
};
