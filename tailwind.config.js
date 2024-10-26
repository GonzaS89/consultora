const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily : {
        open : "Open Sans"
      },
      colors:{
        morado : '#4345e7 !important',
        gris: '#f2f2f2',
        grisoscuro: '#292d33'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}