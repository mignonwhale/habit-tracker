/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["fill-red-500", "stroke-red-500", "fill-orange-500", "stroke-orange-500", "fill-yellow-500", "stroke-yellow-500"],
  theme: {
    extend: {},
  },
  plugins: [],
}
