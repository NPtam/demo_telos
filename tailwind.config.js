/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './demo/**/*.html',
  ],
  theme: {
    extend: {
      fontSize:{
        'H1': ['48px','64px'],
        'body': ['18px','32px'],
        'h2' : ['24px','32px'],
        'body2': ['14px','24px'],
        't1': ['18px','28px'],
        'h3': ['40px','54px']
      },
      
    },
  },
  plugins: [],
}





