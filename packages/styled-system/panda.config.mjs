import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Used to create reusable config presets for your project or team
  presets: ['@pandacss/dev/presets'],

  // Whether to hash the generated class names / css variables
  hash: true,

  // The output directory for your css system
  outdir: 'dist',
});
