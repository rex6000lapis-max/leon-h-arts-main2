// ВНИМАНИЕ: Используется синтаксис CommonJS (module.exports)
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Убедитесь, что пути сканирования верны для вашего проекта
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}