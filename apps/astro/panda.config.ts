import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx,astro}',
    './pages/**/*.{js,jsx,ts,tsx,astro}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The global styles for your project
  globalCss: {
    body: {
      fontFamily: "'Noto Sans JP', sans-serif",
    },
  },

  // Whether to hash the generated class names / css variables
  hash: true,

  // Allows you to customize the import paths for the generated outdir
  importMap: '@cobacoch.github.io/styled-system',

  // The output directory for your css system
  outdir: 'styled-system',
});
