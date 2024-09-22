/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundColor:{
        loginForm:'#ffffff40',
        primary:'#4195f2'
      }
    },
    fontFamily:{
      'russo':["'Russo One'", 'sans-serif']
    }
  },
  plugins: [],
}
