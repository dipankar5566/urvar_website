import type { Metadata } from "next";
import { getPublishedPost } from "@/lib/blog/store";
import { ogImageFor } from "@/lib/blog/types";

export { default, generateStaticParams } from "../../../blog/[slug]/page";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) return {};

  const content = post.bn ?? post.en;
  return {
    title: `${content.title} – উর্বর ন্যাচারাল ব্লগ`,
    description: content.excerpt,
    alternates: {
      canonical: `/bn/blog/${slug}`,
      languages: {
        "en-IN": `/blog/${slug}`,
        "bn-IN": `/bn/blog/${slug}`,
        "x-default": `/blog/${slug}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.excerpt,
      locale: "bn_IN",
      images: [{ url: ogImageFor(post) }],
      type: "article",
    },
  };
}
