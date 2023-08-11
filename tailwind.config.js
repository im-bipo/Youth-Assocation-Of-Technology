/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
    extend: {
      colors:{
        primary:'#262967',
        secondary :'#FF0909'
      }
    },
  },
  plugins: [],
}

