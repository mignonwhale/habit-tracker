/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["fill-red-500", "stroke-red-500", "fill-blue-400", "stroke-blue-400", "fill-green-600", "stroke-green-600"],
  theme: {
    extend: {},
  },
  plugins: [],
}
