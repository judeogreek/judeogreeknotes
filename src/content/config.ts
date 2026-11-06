import { defineCollection, z } from 'astro:content';
import { categories } from '../categories';
const names = categories.flatMap((c) => [c.el, c.en]);
export const collections = {
  articles: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      category: z.string().refine((v) => names.includes(v), { message: 'Άγνωστη κατηγορία' }),
      lang: z.enum(['el', 'en']).default('el'),
      summary: z.string().optional(),
    }),
  }),
};
