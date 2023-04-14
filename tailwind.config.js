/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'motley':['Motley'],
      'rubik' : ['Rubik'],
      'movie':['Movie'],
      'cartoon': ['\"Comic Neue\"', 'cursive']
    },
  },
  plugins: [],
}