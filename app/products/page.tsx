"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import type { Product } from "@/data/products";

type Category = Product["category"] | "All";

const categories: Category[] = [
  "All",
  "Organic Manures",
  "Phosphate Fertilizers",
  "Bio-Stimulants",
  "Micronutrients",
];

const categoryLabels: Record<Category, keyof ReturnType<typeof useLang>["t"]["products"]> = {
  All: "all",
  "Organic Manures": "filter_organic",
  "Phosphate Fertilizers": "filter_phosphate",
  "Bio-Stimulants": "filter_biostim",
  "Micronutrients": "filter_micro",
};

export default function ProductsPage() {
  const { t } = useLang();
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-[#104C36] pt-14 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-medium text-[#4ade80] tracking-[2px] uppercase mb-3">Our Range</p>
          <h1 className="font-[family-name:var(--font-campaign)] uppercase text-white text-[44px] sm:text-[68px] leading-[1.0] mb-2.5">
            {t.products.heading}
          </h1>
          <p className="text-white/62 text-base max-w-lg">{t.products.sub}</p>
        </div>
      </section>

      <section className="py-4 px-4 sm:px-6 lg:px-8 sticky top-16 sm:top-25 z-30 bg-canvas border-b border-hairline">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4.5 py-1.5 rounded-full text-[13px] font-semibold border transition-colors whitespace-nowrap ${
                active === cat
                  ? "bg-ink text-white border-ink"
                  : "border-hairline text-charcoal hover:border-ink hover:text-ink"
              }`}
            >
              {t.products[categoryLabels[cat]]}
            </button>
          ))}
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-soft-cloud min-h-[60vh]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} ctaVariant="pill" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
