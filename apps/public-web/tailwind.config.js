const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */

console.log('__dirname');
console.log(__dirname);
console.log(createGlobPatternsForDependencies(__dirname, ''));
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),

    ...createGlobPatternsForDependencies(__dirname),
    ...createGlobPatternsForDependencies(
      __dirname,
      'libs/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
