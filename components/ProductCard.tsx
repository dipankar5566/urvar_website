"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import type { Product } from "@/data/products";

export default function ProductCard({
  product,
  ctaVariant = "link",
}: {
  product: Product;
  ctaVariant?: "link" | "pill";
}) {
  const { t, localize } = useLang();

  return (
    <Link href={localize(`/products/${product.slug}`)} className="group flex flex-col bg-white">
      <div className="relative aspect-square bg-soft-cloud overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-[450ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]"
        />
        <span className="absolute top-2.5 left-2.5 bg-white border border-hairline rounded-full text-xs font-semibold px-3 py-1 text-ink whitespace-nowrap">
          {product.category}
        </span>
      </div>
      <div className="pt-3.5 pb-1">
        <h3 className="font-bold text-ink text-sm leading-snug mb-1">{product.name}</h3>
        <p className="text-mute text-[13px] leading-relaxed mb-3 line-clamp-2">{product.tagline}</p>
        {ctaVariant === "pill" ? (
          <span className="text-urvar-green font-bold text-xs border border-urvar-green rounded-full px-3.5 py-1 inline-block">
            {t.products.learn_more}
          </span>
        ) : (
          <span className="text-urvar-green font-bold text-xs">{t.products.learn_more} →</span>
        )}
      </div>
    </Link>
  );
}
