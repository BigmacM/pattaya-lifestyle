import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://mypattaya.life',
  output: 'static', // Static site for Hostinger hosting
});
