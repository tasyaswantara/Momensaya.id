/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg_jumbotron:"url('/src/assets/images/bg-desktop1.svg')",
      },
      dropShadow:{
        foot:"0px 7px 59px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
}

