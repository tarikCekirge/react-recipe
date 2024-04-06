/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    colors: {
      ...colors
    }
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base'
    }),
  ],
}