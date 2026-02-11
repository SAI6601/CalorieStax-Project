/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stax-teal': '#2dd4bf', // This is your custom teal color
      },
    },
  },
  plugins: [],
}