/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif'],      
      },
    },
    fontSize: {
      'xs': ['0.75rem', '1.5'],
      'sm': ['0.875rem', '1.5'],
      'base': ['1rem', '1.5'],
      'lg': ['1.125rem', '1.5'],
      'xl': ['1.25rem', '1.5'],
      '2xl': ['1.5rem', '1.5'],
      '3xl': ['1.875rem', '1.5'],
      '4xl': ['2.25rem', '1.5'],
      '5xl': ['3rem', '1.5'],
      '6xl': ['3.75rem', '1.5'],
      '7xl': ['4.5rem', '1.5'],
      '8xl': ['6rem', '1.5'],
      '9xl': ['8rem', '1.5'],
    },
    screens: {
      sm: '480px',
      md: '768px',     
      lg: '976px',      
    },
    gridTemplateColumns: {     
      '1':'[full-start] repeat(1, minmax(0, 1fr)) [full-end]',
      '2':'[full-start] repeat(2, minmax(0, 1fr)) [full-end]',
      '3':'[full-start] repeat(3, minmax(0, 1fr)) [full-end]',
      '4':'[full-start] repeat(4, minmax(0, 1fr)) [full-end]',
      '5':'[full-start] repeat(5, minmax(0, 1fr)) [full-end]',
      '6':'[full-start] repeat(6, minmax(0, 1fr)) [full-end]',
      '7':'[full-start] repeat(7, minmax(0, 1fr)) [full-end]',
      '8':'[full-start] repeat(8, minmax(0, 1fr)) [full-end]',
      '9':'[full-start] repeat(9, minmax(0, 1fr)) [full-end]',
      '10':'[full-start] repeat(10, minmax(0, 1fr)) [full-end]',
      '11':'[full-start] repeat(11, minmax(0, 1fr)) [full-end]',
      '12':'[full-start] repeat(12, minmax(0, 1fr)) [full-end]',      
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),   
  ]
}