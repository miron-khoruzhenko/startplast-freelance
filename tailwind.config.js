/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors : {
        "main-pink": "#DE1379",
        "main-indigo": "#342E82",
        "main-gray": "#F5F3F2",
      },
      backgroundImage: {
        "custom-bg": "linear-gradient(180deg, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .5) 100%), url(/src/assets/home/custom_bg.jpg)",
      }
    },
  },
  plugins: [],
}