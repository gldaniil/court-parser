/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
      '2xl': '1660px'
    },
    extend: {}
  },
  plugins: []
}
