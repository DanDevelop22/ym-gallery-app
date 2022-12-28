/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/components/screens/**/*.{js,jsx,ts,tsx}", "./src/components/shared/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#232324"
      }
    },
  },
  plugins: [],
}
