/**
 * Laravel Mix Configuration
 */

let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
  .js('src/app.js', 'assets/sysio.js')
  .css('src/app.css', 'assets/sysio.css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.config.js')],
  });
