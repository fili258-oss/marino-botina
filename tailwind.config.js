/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'app-sections': '#0a192f',
        'app-heading':'#141416',
        'app-white': '#ffffff',
        'app-greenprimary': {
          '50': '#effaf2',
          '100': '#d7f4dc',
          '200': '#b3e7bf',
          '300': '#81d49a',
          '400': '#45b36a',
          '500': '#2a9f55',
          '600': '#1c7f42',
          '700': '#166637',
          '800': '#14512e',
          '900': '#114327',
          '950': '#092517',          
        },
        'app-gray': {
          50: '#f3f7fa',
          100: '#eaeff5',
          200: '#d8e2ed',
          300: '#c1cfe0',
          400: '#a7b7d2',
          500: '#90a0c4',
          600: '#707eae',
          700: '#66719c',
          800: '#545d7f',
          900: '#485067',
          950: '#2a2e3c',
        },
      
      },      
    },
  },
  plugins: [],
}

