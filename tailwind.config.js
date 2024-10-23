/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        morado : '#4345e7 !important',
        gris: '#f2f2f2',
        grisoscuro: '#292d33'
      }
    },
  },
  plugins: [],
}