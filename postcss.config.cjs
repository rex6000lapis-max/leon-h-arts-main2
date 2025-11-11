/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    // ВАЖНО: Мы заменяем 'tailwindcss' на '@tailwindcss/postcss'
    '@tailwindcss/postcss': {},
    // Остальные плагины, например, Autoprefixer, остаются
    autoprefixer: {},
  },
};