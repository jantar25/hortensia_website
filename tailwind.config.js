/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily : {
      'Manrope': "manrope, sans-serif",
      'Poppins': "poppins, sans-serif"
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1050px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors : theme =>({
        "bg" : "#040C18",
        "blog" : "#042c54",
        "footer" : "#031B34",
        "text" : "#81AFDD",
        "subtext" : "#FF8A71"
      })
    },
  },
  plugins: [],
}

