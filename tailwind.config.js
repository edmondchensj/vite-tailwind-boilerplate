/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "./index.html",],
  theme: {
    extend: {
      colors: {
        "orange": {
          400: "#C72B2B"
        },
        "primary": "#3CBEB9"
      }
    },
  },
  plugins: [],
}

