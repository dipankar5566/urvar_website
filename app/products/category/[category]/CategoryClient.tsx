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
  const { t } = useLang();
  const meta = categoryMeta[category];
  const items = products.filter((p) => p.category === category);
  const name = t.products[meta.nameKey];
  const intro = t.products[meta.introKey];

  return (
    <>
      {/* Hero */}
      <Section bg="dark" className="!py-12 sm:!py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-urvar-light/80 mb-5" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">
            {t.nav.home}
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-white">
            {t.product_detail.breadcrumb_products}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{name}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold">{name}</h1>
        <p className="mt-4 max-w-2xl text-urvar-light/90 leading-relaxed">{intro}</p>
      </Section>

      {/* Products in category */}
      <Section bg="white">
        <h2 className="text-xl sm:text-2xl font-bold text-urvar-dark mb-8">
          {t.products.in_range}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-10">
          <Button href="/products" variant="ghost">
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
