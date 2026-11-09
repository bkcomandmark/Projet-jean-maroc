// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ Remplacer par l'URL définitive du site (sous-domaine ou domaine final).
const SITE_URL = process.env.SITE_URL || 'https://jean-renovation.netlify.app';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/merci/') })],
  build: { format: 'directory' },
});
