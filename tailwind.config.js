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
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#f0acf9',
          secondary: '#eabe4f',
          accent: '#f74c90',
          neutral: '#231b27',
          'base-100': '#474649',
          info: '#369ee7',
          success: '#5fddb7',
          warning: '#fcd340',
          error: '#f11e59',
        },
      },
      'cupcake',
    ],
  },
  plugins: [require('daisyui')],
};
