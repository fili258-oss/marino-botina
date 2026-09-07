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
          '50': '#f3fcf8',
          '100': '#e6f9f1',
          '200': '#daf7e9',
          '300': '#c1f0db',
          '400': '#9ee6c5',
          '500': '#71d6a8',
          '600': '#42b883',
          '700': '#39a273',
          '800': '#328660',
          '900': '#2c684d',
          '950': '#143928',          
        },
        'app-gray': {
          '50': '#f3f7fa',
          '100': '#eaeff5',
          '200': '#d8e2ed',
          '300': '#c1cfe0',
          '400': '#a7b7d2',
          '500': '#90a0c4',
          '600': '#707eae',
          '700': '#66719c',
          '800': '#545d7f',
          '900': '#485067',
          '950': '#2a2e3c',
        },
        'app-blue': {
          '50': '#f5f7ff',
          '100': '#e5eaff',
          '200': '#d1d9ff',
          '300': '#b8c4ff',
          '400': '#8a9dff',
          '500': '#647eff',
          '600': '#173aee',
          '700': '#0d2dce',
          '800': '#1029a8',
          '900': '#132686',
          '950': '#04114d',
        },
      },      
    },
  },
  plugins: [],
}

