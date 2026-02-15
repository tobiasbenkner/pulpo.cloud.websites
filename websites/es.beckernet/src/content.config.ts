import { defineCollection } from "astro:content";
import {
  getBlogCategories,
  getBlogPosts,
  getLanguages,
  createClient,
} from "@pulpo/cms";
import { TENANT } from "./config";

const client = createClient();

const languages = defineCollection({
  loader: async () => {
    const items = await getLanguages(client, TENANT);
    return items;
  },
});

const categories = defineCollection({
  loader: async () => {
    const items = await getBlogCategories(client, {
      tenant: TENANT,
    });
    return items;
  },
});

const posts = defineCollection({
  loader: async () => {
    const items = await getBlogPosts(client, {
      tenant: TENANT,
    });
    return items;
  },
});

export const collections = {
  categories,
  posts,
  languages,
};
