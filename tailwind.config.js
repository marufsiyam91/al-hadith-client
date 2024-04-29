/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B9E76',
      },
      fontFamily: {
        primary: ['Hind Siliguri', 'sans-serif']
      },
      screens: {
        'eesm': '350px',

        'esm': '500px',
  
        'sm': '640px',
  
        'md': '750px',
  
        'lg': '998px',
  
        'xl': '1024px',
  
        '2xl': '1280px',
  
        '4xl': '1535px'
      }
    },
  },
  plugins: [],
}

