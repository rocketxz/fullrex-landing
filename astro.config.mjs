import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: 'https://screwfast.uk',
  image: {
    domains: ['images.unsplash.com'],
  },
  compressHTML: true,
  prefetch: true,
  integrations: [
    sitemap(),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
    css: {
      minify: true,
    },
  },
});
