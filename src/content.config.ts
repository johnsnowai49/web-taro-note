import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogsCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional(),
        image: z.object({
            url: image(),
            alt: z.string().optional(),
            width: z.number().optional(),
            height: z.number().optional(),
        })
            .optional(),
    }),
});

export const collections = {
    blogs: blogsCollection,
};
