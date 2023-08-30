/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.{liquid,json}',
    './sections/*.{liquid,json}',
    './snippets/*.{liquid,json}',
    './layout/*.{liquid,json}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
