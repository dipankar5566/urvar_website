import { listPublishedPosts } from "@/lib/blog/store";
import BlogListClient from "./BlogListClient";

// Prerendered at build; the admin's save action revalidates it, so new
// posts appear without a rebuild.
export default async function BlogPage() {
  return <BlogListClient posts={await listPublishedPosts()} />;
}
