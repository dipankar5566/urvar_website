"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import type { Product } from "@/data/products";
import { allCategories, categoryMeta } from "@/lib/categories";

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
      <section className="bg-urvar-dark py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t.products.heading}</h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto">{t.products.sub}</p>
        </div>
      </section>

      {/* Browse by category */}
      <section className="py-12 bg-urvar-light/40 border-b border-green-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-urvar-dark mb-6">{t.products.browse_by_category}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {allCategories.map((cat) => (
              <Link
                key={cat}
                href={`/products/category/${categoryMeta[cat].slug}`}
                className="group bg-white border border-neutral-200 rounded-xl p-5 shadow-e1 hover:shadow-e2 hover:-translate-y-1 transition-all"
              >
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${categoryMeta[cat].badge}`}>
                  {t.products[categoryMeta[cat].nameKey]}
                </span>
                <p className="text-urvar-green font-semibold text-sm inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  {t.products.view_category} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  active === cat
                    ? "bg-urvar-green text-white border-urvar-green"
                    : "border-gray-200 text-gray-600 hover:border-urvar-green hover:text-urvar-green"
                }`}
              >
                {t.products[categoryLabels[cat]]}
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
