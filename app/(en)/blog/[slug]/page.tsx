import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedPost, listPublishedPosts } from "@/lib/blog/store";
import { ogImageFor } from "@/lib/blog/types";
import { brandTitle, pageMeta } from "@/lib/seo";
import BlogPostClient from "./BlogPostClient";
import BlogJsonLd from "./BlogJsonLd";

type Props = { params: Promise<{ slug: string }> };

// Posts published from /admin after the build render on first visit and are
// then cached; the save action revalidates them.
export async function generateStaticParams() {
  return (await listPublishedPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) return {};

  return pageMeta({
    lang: "en",
    path: `/blog/${slug}`,
    title: brandTitle(post.en.title, "en"),
    description: post.en.excerpt,
    ogTitle: post.en.title,
    image: ogImageFor(post),
    type: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) notFound();

  return (
    <>
      <BlogJsonLd post={post} lang="en" />
      <BlogPostClient post={post} />
    </>
  );
}
