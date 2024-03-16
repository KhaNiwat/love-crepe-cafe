/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily:{
      abc:["kanit"]
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

