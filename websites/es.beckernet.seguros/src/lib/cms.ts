import {
  type BlogPostCategory,
  type Language,
  type BlogPost,
} from "@pulpo/cms";
import { getCollection } from "astro:content";

// Blog category IDs to exclude from this site (inmobiliaria for insurance-only site)
const EXCLUDED_CATEGORY_IDS = ["2441ed0b-b857-408c-b01d-a837a016fac4"];

export const getBlogCategories = async (): Promise<BlogPostCategory[]> => {
  const categories = await getCollection("categories");
  return categories
    .map((it) => it.data)
    .filter((cat) => !EXCLUDED_CATEGORY_IDS.includes(cat.id));
};

export const getPosts = async (): Promise<BlogPost[]> => {
  const posts = await getCollection("posts");
  return posts
    .map((it) => it.data)
    .filter((post) => !EXCLUDED_CATEGORY_IDS.includes(post.category));
};

export const getPostsByCategory = async (
  categoryId: string,
): Promise<BlogPost[]> => {
  if (EXCLUDED_CATEGORY_IDS.includes(categoryId)) {
    return [];
  }
  const posts = await getCollection("posts");
  return posts.map((it) => it.data).filter((it) => it.category === categoryId);
};

export const getLanguages = async (): Promise<Language[]> => {
  const languages = await getCollection("languages");
  return languages.map((it) => it.data);
};
