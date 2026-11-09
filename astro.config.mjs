// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Adresse du site : variable SITE_URL si définie (domaine définitif),
// sinon l'adresse principale fournie automatiquement par Netlify (URL).
const SITE_URL = process.env.SITE_URL || process.env.URL || 'https://sensational-gecko-7604d6.netlify.app';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/merci/') })],
  build: { format: 'directory' },
});
