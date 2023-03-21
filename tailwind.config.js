/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-500': '#0085FF',
        'primary-400': '#00B2FF',

        'dark-500': '#2C2C3B',
        'dark-400': '#404258',
        'dark-300': '#474E68',
        'dark-200': '#50577A',
        'dark-100': '#6B728E',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}