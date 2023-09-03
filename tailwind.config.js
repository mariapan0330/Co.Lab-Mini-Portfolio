/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/assets/gradient.png)"
      },
      colors: {
        'theme-dark-blue': "#4959FE",
        'theme-pink': "#FFB2E0",
        'theme-green': "#72CDAA",
        'theme-light-blue': "#61BDFD",
        'theme-yellow': "#FECC38",
      }
    },
  },
  plugins: [],
}

