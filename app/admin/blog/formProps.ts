import "server-only";
import products from "@/data/products";
import { listAllPosts } from "@/lib/blog/store";

/** Shared props for the new/edit post screens. */
export async function postFormProps() {
  const posts = await listAllPosts();
  return {
    products: products.map((p) => ({ slug: p.slug, name: p.name })),
    categories: [...new Set(posts.map((p) => p.category))].sort(),
    // Today's date in India, as YYYY-MM-DD.
    today: new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" }),
  };
}
