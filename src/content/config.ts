import { defineCollection, z } from 'astro:content';
export const collections = {
  articles: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      category: z.enum(['Ιστορία', 'Άρθρα γνώμης', 'Βιβλιοκριτικές', 'Συνεντεύξεις']),
      summary: z.string().optional(),
    }),
  }),
};
