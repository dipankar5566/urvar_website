import type { MetadataRoute } from "next";
import products from "@/data/products";
import crops from "@/data/crops";
import { listPublishedPosts } from "@/lib/blog/store";
import { allCategories, categoryMeta } from "@/lib/categories";

const BASE_URL = "https://urvarindia.com";

// Static, but revalidated by the blog admin's save action.
export const dynamic = "force-static";

// Only blog posts carry lastModified: they have a real edit timestamp, while
// a build time on static pages would claim every page changed on each deploy.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await listPublishedPosts();

  const productUrls = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const postUrls = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryUrls = allCategories.map((c) => ({
    url: `${BASE_URL}/products/category/${categoryMeta[c].slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cropUrls = crops.map((c) => ({
    url: `${BASE_URL}/crop-solutions/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const enUrls: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/crop-solutions`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/dealers/become-a-distributor`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about/manufacturing-quality`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/certificates`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/faqs`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/resources/downloads`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    ...categoryUrls,
    ...cropUrls,
    ...postUrls,
    ...productUrls,
  ];

  // Bengali mirror of every page lives under /bn/*.
  const bnUrls: MetadataRoute.Sitemap = enUrls.map((u) => ({
    ...u,
    url: u.url.replace(BASE_URL, `${BASE_URL}/bn`),
  }));

  return [...enUrls, ...bnUrls];
}
