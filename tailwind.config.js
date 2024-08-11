/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      colors:{
        'preto': '#000000',
        'branco': '#FFFFFF',
        'cinzaescuto': '#666666',
        'cinzaclaro': '#A7A7A7',
        'azulbutton': '#005490',
        'backgroundcard': '#9595959E',
        'backgroundIU002': 'rgba(149, 149, 149, 0.62)'
      },

      width:{
        '236': '236px',
        '799': '799px'
      },
      height: {
        '81': '81px',
        '1024': '1024px'
      },

      left:{
        '996': '996px',
        '849': '849px'
      },
      top:{
        '89' : '89px',
        '256': '256px'  
      },
 
      boxShadow:{
        'shadows': '0px 4px 4px 0px #00000040;'

      },
      borderRadius: {
        'radius': '5px 0px 0px 0px',

      }, 
      borderWidth: {
        'inborder': ' 1px #A7A7A7',
      },
      lineHeight: {
        '24.2': '24.2px'
      },
      fontSize: {
        '20': '20px'
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  plugins: [],
}

