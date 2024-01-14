/** @type {import('tailwindcss').Config} */

export const content = [
  './src/**/*.{js,jsx,ts,tsx}'
]

export const theme = {
  fontFamily: {
    'Abel': 'Manrop, poppins, sans-serif'
  },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1050px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  extend: {
    colors: theme => ({
      'headers': '#71A921',
      'extention':'#EAFAD3',
      'alternative':'#FFF5DB',
      'strong':'#617C5C',
      'nuance':'#EAF1EA',
      'text': '#565656'
    })
  }
}
export const plugins = []

