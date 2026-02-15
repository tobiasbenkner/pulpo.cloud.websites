import {
  type BlogPostCategory,
  type Language,
  type BlogPost,
} from "@pulpo/cms";
import { getCollection } from "astro:content";

export const getBlogCategories = async (): Promise<BlogPostCategory[]> => {
  const categories = await getCollection("categories");
  return categories.map((it) => it.data);
};

export const getPosts = async (): Promise<BlogPost[]> => {
  const posts = await getCollection("posts");
  return posts.map((it) => it.data);
};

export const getPostsByCategory = async (
  categoryId: string,
): Promise<BlogPost[]> => {
  const posts = await getCollection("posts");
  return posts.map((it) => it.data).filter((it) => it.category === categoryId);
};

export const getLanguages = async (): Promise<Language[]> => {
  const languages = await getCollection("languages");
  return languages.map((it) => it.data);
};
