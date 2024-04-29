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
      }
    },
  },
  plugins: [],
}

