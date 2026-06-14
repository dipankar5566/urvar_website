"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import type { Product } from "@/data/products";
import { categoryMeta } from "@/lib/categories";

export default function ProductCard({ product }: { product: Product }) {
  const { t } = useLang();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:border-urvar-green/30 transition-all duration-200 group flex flex-col">
      <div className="relative h-52 bg-gradient-to-b from-gray-50 to-gray-100/50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${categoryMeta[product.category].badge}`}>
          {product.category}
        </span>
        <h3 className="font-bold text-urvar-dark text-lg leading-snug mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{product.tagline}</p>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-urvar-green font-semibold text-sm hover:gap-3 transition-all"
        >
          {t.products.learn_more}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
