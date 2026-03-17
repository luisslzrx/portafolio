import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string()
  })
});

const proyectos = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string(),
    link: z.string().url(),
    tags: z.array(z.string())
  })
});

export const collections = {
  blog,
  proyectos
};