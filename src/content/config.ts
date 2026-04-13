import { defineCollection, z } from 'astro:content';

const post = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        z.coerce.date(),
    description: z.string().max(200),
    category:    z.enum([
      'Bienvenida',
      'Desarrollo de software',
      'SaaS y producto',
      'Seguridad',
      'Casos de estudio',
    ]),
    cover:       z.string().optional(),
    readTime:    z.string(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { post };
