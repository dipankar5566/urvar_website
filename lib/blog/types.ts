// Shared blog types — safe to import from client and server code.

export interface PostContent {
  title: string;
  excerpt: string;
  /** Sanitized HTML produced by the admin rich-text editor. */
  html: string;
}

export type PostStatus = "draft" | "published";

export interface Post {
  slug: string;
  category: string;
  /** ISO date (YYYY-MM-DD) shown on the post and used in the sitemap. */
  date: string;
  /** Cover image: a /images/... asset or an uploaded /blog-media/... file. */
  image: string;
  author: string;
  relatedProductSlugs: string[];
  status: PostStatus;
  /** ISO timestamp of the last admin save. */
  updatedAt: string;
  en: PostContent;
  /** Optional Bengali translation; falls back to English when absent. */
  bn?: PostContent;
}

export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Social-preview image. Legacy /images/*.webp covers ship a .jpg twin. */
export function ogImageFor(post: Post): string {
  return post.image.startsWith("/images/") ? post.image.replace(/\.webp$/, ".jpg") : post.image;
}
