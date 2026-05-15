import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wuhibe.github.io',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
