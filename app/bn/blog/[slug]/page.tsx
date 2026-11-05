import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedPost } from "@/lib/blog/store";
import { ogImageFor } from "@/lib/blog/types";
import { brandTitle, pageMeta } from "@/lib/seo";
import BlogPostClient from "../../../blog/[slug]/BlogPostClient";
import BlogJsonLd from "../../../blog/[slug]/BlogJsonLd";

export { generateStaticParams } from "../../../blog/[slug]/page";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) return {};

  const content = post.bn ?? post.en;
  return pageMeta({
    lang: "bn",
    path: `/blog/${slug}`,
    title: brandTitle(content.title, "bn"),
    description: content.excerpt,
    ogTitle: content.title,
    image: ogImageFor(post),
    type: "article",
  });
}

export default async function BnBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) notFound();

  return (
    <>
      <BlogJsonLd post={post} lang="bn" />
      <BlogPostClient post={post} />
    </>
  );
}
