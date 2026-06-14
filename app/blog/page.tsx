"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import posts from "@/data/posts";

export default function BlogPage() {
  const { t, lang } = useLang();

  return (
    <>
      <Section bg="dark" className="!py-12 sm:!py-16">
        <nav className="text-sm text-urvar-light/80 mb-5" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">
            {t.nav.home}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{t.blog.heading}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold">{t.blog.heading}</h1>
        <p className="mt-4 max-w-2xl text-urvar-light/90 leading-relaxed">{t.blog.sub}</p>
      </Section>

      <Section bg="white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            const content = lang === "bn" && post.bn ? post.bn : post.en;
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-neutral-200 shadow-e1 overflow-hidden hover:shadow-e2 hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="relative h-44">
                  <Image
                    src={post.image}
                    alt={content.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <Badge tone="green" className="self-start mb-3">
                    {post.category}
                  </Badge>
                  <h2 className="font-bold text-urvar-dark text-lg leading-snug mb-2">{content.title}</h2>
                  <p className="text-neutral-600 text-sm leading-relaxed flex-1">{content.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-urvar-green font-semibold text-sm group-hover:gap-3 transition-all">
                    {t.blog.read_more} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
