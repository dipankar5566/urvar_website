"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  checkPassword,
  createSession,
  destroySession,
  loginRateLimited,
  requireAdmin,
} from "@/lib/admin/session";
import { deletePost, getPost, savePost } from "@/lib/blog/store";
import { isEmptyHtml, sanitizePostHtml } from "@/lib/blog/sanitize";
import { SLUG_PATTERN, type Post, type PostContent } from "@/lib/blog/types";
import products from "@/data/products";

export type FormState = { error?: string } | undefined;

export async function loginAction(_prev: FormState, formData: FormData): Promise<FormState> {
  if (await loginRateLimited()) return { error: "Too many attempts. Try again in 15 minutes." };
  const password = String(formData.get("password") ?? "");
  if (!checkPassword(password)) return { error: "Wrong password." };
  await createSession();
  redirect("/admin/blog");
}

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect("/admin/login");
}

function text(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

function readContent(formData: FormData, lang: "en" | "bn"): PostContent {
  return {
    title: text(formData, `${lang}_title`),
    excerpt: text(formData, `${lang}_excerpt`),
    html: sanitizePostHtml(String(formData.get(`${lang}_html`) ?? "")),
  };
}

/** Every public page can show blog content (listing, posts, sitemap, both languages). */
function revalidateBlog() {
  revalidatePath("/", "layout");
}

export async function savePostAction(_prev: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();

  const originalSlug = text(formData, "originalSlug");
  const slug = originalSlug || text(formData, "slug");
  const status = formData.get("status") === "published" ? "published" : "draft";
  const date = text(formData, "date");
  const image = text(formData, "image");
  const en = readContent(formData, "en");
  const bn = readContent(formData, "bn");
  const productSlugs = new Set(products.map((p) => p.slug));
  const relatedProductSlugs = formData
    .getAll("related")
    .map(String)
    .filter((s) => productSlugs.has(s));

  if (!en.title) return { error: "English title is required." };
  if (!SLUG_PATTERN.test(slug)) return { error: "Page URL may only use lowercase letters, numbers and hyphens." };
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return { error: "Please pick a publish date." };
  if (!en.excerpt) return { error: "English summary is required." };
  if (status === "published" && isEmptyHtml(en.html)) return { error: "English article body is empty." };
  if (!/^(\/blog-media\/|\/images\/)[\w.-]+$/.test(image)) return { error: "Please upload a cover image." };

  const existing = await getPost(slug);
  if (!originalSlug && existing) return { error: `A post with the URL "/blog/${slug}" already exists.` };
  if (originalSlug && !existing) return { error: "This post no longer exists." };

  const hasBn = Boolean(bn.title || bn.excerpt || !isEmptyHtml(bn.html));
  if (hasBn && (!bn.title || !bn.excerpt)) {
    return { error: "Bengali version needs a title and summary (or leave all Bengali fields empty)." };
  }

  const post: Post = {
    slug,
    category: text(formData, "category") || "General",
    date,
    image,
    author: text(formData, "author") || "Urvar Agronomy Team",
    relatedProductSlugs,
    status,
    updatedAt: new Date().toISOString(),
    en,
    ...(hasBn ? { bn } : {}),
  };

  await savePost(post);
  revalidateBlog();
  redirect(`/admin/blog?saved=${slug}`);
}

export async function deletePostAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const slug = text(formData, "slug");
  if (SLUG_PATTERN.test(slug)) await deletePost(slug);
  revalidateBlog();
  redirect("/admin/blog?deleted=1");
}
