import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: 'https://fullrex-quitumbe.com',
  image: {
    domains: ['images.unsplash.com'],
    endpoint: {
      route: '/images',
    },
  },
  compressHTML: true,
  prefetch: true,
  build: {
    assets: 'assets',
  },
  integrations: [
    sitemap(),
    mdx(),
  ],
  adapter: cloudflare(),
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
