// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://luissalazar.com.mx', // 🔴 obligatorio
  output: 'static',
  integrations: [sitemap()], // 🔴 obligatorio
  vite: {
    plugins: [tailwindcss()]
  }
});