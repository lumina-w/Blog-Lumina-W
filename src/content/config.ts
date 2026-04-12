import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        z.coerce.date(),
    description: z.string(),
    category:    z.enum([
      'Bienvenida',
      'Desarrollo de software',
      'SaaS y producto',
      'Seguridad',
      'Casos de estudio',
    ]),
    cover:       z.string().optional(),
    readTime:    z.string(),
  }),
});

export const collections = { blog };
