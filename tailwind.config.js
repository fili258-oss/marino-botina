/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'app-sections': '#212b39',
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
      
      },      
    },
  },
  plugins: [],
}

