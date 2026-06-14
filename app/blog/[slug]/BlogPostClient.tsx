"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLang } from "@/context/LangContext";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { postBySlug } from "@/data/posts";
import products from "@/data/products";

export default function BlogPostClient({ slug }: { slug: string }) {
  const { t, lang } = useLang();
  const post = postBySlug(slug);
  if (!post) notFound();

  const content = lang === "bn" && post.bn ? post.bn : post.en;
  const related = post.relatedProductSlugs
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const dateLabel = new Date(post.date).toLocaleDateString(lang === "bn" ? "bn-IN" : "en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-urvar-dark py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-urvar-light/80 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">
              {t.nav.home}
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">
              {t.blog.heading}
            </Link>
          </nav>
          <Badge tone="green" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">{content.title}</h1>
          <p className="mt-4 text-urvar-light/80 text-sm">
            {t.blog.by} {post.author} · {dateLabel}
          </p>
        </div>
      </section>

      {/* Cover image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden shadow-e2">
          <Image src={post.image} alt={content.title} fill className="object-cover" priority />
        </div>
      </div>

      {/* Body */}
      <Section bg="white" className="!pt-12">
        <article className="max-w-3xl mx-auto">
          <p className="text-lg text-neutral-700 leading-relaxed font-medium mb-6">{content.excerpt}</p>
          {content.body.map((block, i) =>
            block.type === "h2" ? (
              <h2 key={i} className="text-2xl font-bold text-urvar-dark mt-8 mb-3">
                {block.text}
              </h2>
            ) : (
              <p key={i} className="text-neutral-700 leading-relaxed mb-4">
                {block.text}
              </p>
            )
          )}

          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-urvar-dark mb-6">{t.blog.related}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <Button href="/blog" variant="ghost">
              {t.blog.back}
            </Button>
          </div>
        </article>
      </Section>

      {/* CTA */}
      <Section bg="mint">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-urvar-dark">{t.blog.cta_heading}</h2>
          <p className="mt-2 text-neutral-600">{t.blog.cta_sub}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" variant="primary">
              {t.home.contact_cta}
            </Button>
            <Button
              href="https://wa.me/919035708943"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.whatsapp}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
