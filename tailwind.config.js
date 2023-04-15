/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sp': '500px',
      },
    },
    fontFamily:{
      'motley':['Motley'],
      'rubik' : ['Rubik'],
      'movie':['Movie'],
      'cartoon': ['\"Comic Neue\"', 'cursive']
    },
    
  },
  plugins: [],
}