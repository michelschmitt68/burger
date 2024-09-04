/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'custom-font': ['font1', 'sans-serif'],  
      },
      dropShadow: {
        'custom': '1px 1px 5px rgb(249, 116, 80)',
      },
      colors: {
        'custom-orange': 'rgb(249, 116, 80)',
      },
    },
  },
  plugins: [],
}

