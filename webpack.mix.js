/**
 * Laravel Mix Configuration
 */

let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
  .js('src/script.js', 'assets/script.js')
  .css('src/styles.css', 'assets/styles.css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.config.js')],
  });
