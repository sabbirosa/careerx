/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1654A6",
        "secondary": "#3F90CE",
        "primary-text": "#141414",
      }
    },
  },
  plugins: [],
}

