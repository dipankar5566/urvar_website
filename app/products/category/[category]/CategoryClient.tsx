"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import products from "@/data/products";
import type { Category } from "@/lib/categories";
import { categoryMeta } from "@/lib/categories";

export default function CategoryClient({ category }: { category: Category }) {
  const { t, localize } = useLang();
  const meta = categoryMeta[category];
  const items = products.filter((p) => p.category === category);
  const name = t.products[meta.nameKey];
  const intro = t.products[meta.introKey];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#104C36] pt-12 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <nav className="text-[13px] text-white/55 mb-5" aria-label="Breadcrumb">
            <Link href={localize("/")} className="hover:text-white">
              {t.nav.home}
            </Link>
            <span className="mx-2">/</span>
            <Link href={localize("/products")} className="hover:text-white">
              {t.product_detail.breadcrumb_products}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{name}</span>
          </nav>
          <h1 className="font-[family-name:var(--font-campaign)] uppercase text-white text-[32px] sm:text-[44px] leading-[1.0] mb-3">
            {name}
          </h1>
          <p className="max-w-2xl text-white/62 leading-relaxed">{intro}</p>
        </div>
      </section>

      {/* Products in category */}
      <Section bg="white">
        <h2 className="text-xl sm:text-2xl font-bold text-urvar-dark mb-8">
          {t.products.in_range}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} ctaVariant="pill" />
          ))}
        </div>
        <div className="mt-10">
          <Button href={localize("/products")} variant="ghost">
            ← {t.products.heading}
          </Button>
        </div>
      </Section>

      {/* Conversion band */}
      <Section bg="mint">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-urvar-dark">
            {t.home.contact_heading}
          </h2>
          <p className="mt-2 text-neutral-600">{t.home.contact_sub}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href={localize("/contact")} variant="primary">
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
