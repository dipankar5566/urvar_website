import type { Post } from "@/lib/blog/types";

const BASE_URL = "https://urvarindia.com";

export default function BlogJsonLd({ post, lang }: { post: Post; lang: "en" | "bn" }) {
  const content = lang === "bn" ? (post.bn ?? post.en) : post.en;
  const prefix = lang === "bn" ? "/bn" : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: content.title,
    description: content.excerpt,
    image: `${BASE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Urvar Natural Pvt. Ltd.",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.svg` },
    },
    mainEntityOfPage: `${BASE_URL}${prefix}/blog/${post.slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
