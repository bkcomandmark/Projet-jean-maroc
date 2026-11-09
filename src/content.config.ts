import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Articles du blog : un fichier Markdown par article dans src/content/blog/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    image: z.string().default('remise-en-etat'),
    category: z.string().default('Conseils'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
