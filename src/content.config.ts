import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).pipe(z.coerce.date());
const articles = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    category: z.enum(['Organización', 'Delegación', 'Integraciones']),
    editedAt: date,
    status: z.enum(['review', 'published']).default('review'),
    publishedAt: date.optional(),
  }).refine(entry => entry.status !== 'published' || entry.publishedAt !== undefined, {
    message: 'Un artículo publicado necesita una fecha de publicación aprobada.',
  }),
});
const releases = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/releases' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    version: z.string().regex(/^\d+\.\d+\.\d+$/),
    publishedAt: date,
    status: z.enum(['historical', 'verified']),
  }),
});
export const collections = { articles, releases };
