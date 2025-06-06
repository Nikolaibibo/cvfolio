import { defineCollection, type ImageFunction } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';
const CONTENT_BASE_PATH = './src/content';

const seoSchema = (image: ImageFunction) => z.object({
    title: z.string(),
    description: z.string(),
    type: z.string().default('website'),
    keywords: z.string().optional(),
    canonicalUrl: z.string().optional(),
    twitter: z.object({
        creator: z.string().optional(),
    }).optional(),
    robots: z.string().optional(),
    image: image().optional(),
});

export const seoSchemaWithoutImage = z.object({
    title: z.string(),
    description: z.string(),
    type: z.string().default('website'),
    keywords: z.string().optional(),
    canonicalUrl: z.string().optional(),
    twitter: z.object({
        creator: z.string().optional(),
    }).optional(),
    robots: z.string().optional()
});

const pageCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: `${CONTENT_BASE_PATH}/pages` }),
    schema: ({ image }) => z.object({
        title: z.string(),
        seo: seoSchema(image)
    }),
});

const linkCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.yml', base: `${CONTENT_BASE_PATH}/links` }),
  schema: z.object({
    label: z.string(),
    name: z.string(),
    url: z.string(),
  }),
});

const jobCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: `${CONTENT_BASE_PATH}/jobs` }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string(),
    from: z.number(),
    to: z.number().or(z.enum(['Now'])),
    url: z.string(),
  }),
});

const talkCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: `${CONTENT_BASE_PATH}/talks` }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    event: z.string(),
    location: z.string(),
    url: z.string(),
  }),
});

const postCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: `${CONTENT_BASE_PATH}/posts` }),
    schema: ({ image }) => z.object({
        title: z.string(),
                date: z.date(),
        image: image().optional(),
        seo: seoSchema(image),
    }),
});

export const collections = {
    pages: pageCollection,
    links: linkCollection,
    jobs: jobCollection,
    talks: talkCollection,
    posts: postCollection,
};

