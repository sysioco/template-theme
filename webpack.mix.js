/**
 * Laravel Mix Configuration
 */

let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
  .js('src/app.js', 'assets/script.js')
  .css('src/app.css', 'assets/styles.css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.config.js')],
  });
