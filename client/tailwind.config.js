/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#D95103',
        socilaColor: 'rgb(166, 174, 187)',
        about: 'rgb(12, 105, 103)'
      },
    },
  },
  plugins: [],
}