import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

// May also need to update /src/types/index.d.ts when updating this file
// When updating the set of searchable collections, update collectionList in /src/pages/search.astro

const searchable = z.object({
  title: z.string(),
  description: z.string().optional(),
  autodescription: z.boolean().default(true),
  draft: z.boolean().default(false),
});

const social = z.object({
  discord: z.string().optional(),
  email: z.string().optional(),
  toastielab: z.string().optional(),
  valkyriecoms: z.string().optional(),
  website: z.string().optional(),
  youtube: z.string().optional(),
});

const about = defineCollection({
  loader: glob({ pattern: "-index.{md,mdx}", base: "./src/content/about" }),
});

const authors = defineCollection({
  loader: glob({
    pattern: "**\/[^_]*.{md,mdx}",
    base: "./src/content/authors",
  }),
  schema: ({ image }) =>
    searchable.extend({
      email: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().default("image"),
      social: social.optional(),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**\/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    searchable.extend({
      date: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default("image"),
      author: reference("authors").optional(),
      categories: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      complexity: z.number().default(1),
      hideToc: z.boolean().default(false),
    }),
});

const home = defineCollection({
  loader: glob({ pattern: "-index.{md,mdx}", base: "./src/content/home" }),
  schema: ({ image }) =>
    z.object({
      image: image().optional(),
      imageAlt: z.string().default("image"),
      title: z.string(),
      content: z.string(),
      button: z
        .object({
          label: z.string(),
          link: z.string().optional(),
        })
        .optional(),
    }),
});

const indexCards = defineCollection({
  loader: glob({
    pattern: "-index.{md,mdx}",
    base: "./src/content/index-cards",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cards: z.array(z.string()),
  }),
});

const terms = defineCollection({
  loader: glob({ pattern: "-index.{md,mdx}", base: "./src/content/terms" }),
  schema: searchable,
});
// Export collections
export const collections = {
  about,
  authors,
  blog,
  home,
  indexCards,
  terms,
};
