"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLang } from "@/context/LangContext";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/ui/Button";
import products from "@/data/products";
import { categoryMeta } from "@/lib/categories";

export default function ProductDetailClient({ slug }: { slug: string }) {
  const { t } = useLang();
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const meta = categoryMeta[product.category];
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const whatsappHref =
    "https://wa.me/919035708943?text=" +
    encodeURIComponent(`Hello Urvar Natural, I'm interested in ${product.name}. `);

  return (
    <>
      <div className="bg-canvas border-b border-hairline py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/products" className="inline-flex items-center gap-1.5 text-urvar-green font-semibold text-[13px]">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t.product_detail.back}
          </Link>
        </div>
      </div>

      <section className="bg-canvas py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-13 items-start">
          <div className="w-full lg:flex-none lg:w-[440px]">
            <div className="relative aspect-square bg-soft-cloud">
              <Image src={product.image} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 440px" className="object-contain p-8" priority />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <Link
              href={`/products/category/${meta.slug}`}
              className="inline-block bg-soft-cloud border border-hairline text-xs font-semibold text-ink px-3.5 py-1 mb-4"
            >
              {product.category}
            </Link>
            <h1 className="font-bold text-ink text-[26px] sm:text-[34px] uppercase leading-[1.1] mb-3">{product.name}</h1>
            <p className="text-urvar-earth text-sm font-medium italic mb-5">{product.tagline}</p>
            <p className="text-mute text-[15px] leading-loose mb-8 max-w-xl">{product.description}</p>
            <div className="bg-soft-cloud border-t-2 border-urvar-green p-6 max-w-md">
              <p className="text-[13px] font-bold text-ink uppercase tracking-[0.05em] mb-1.5">
                {t.product_detail.cta_heading.replace("{name}", product.name)}
              </p>
              <p className="text-[13px] text-mute mb-4">{t.product_detail.cta_sub}</p>
              <div className="flex gap-2.5 flex-wrap">
                <Button href="/contact" variant="primary">
                  {t.nav.contact}
                </Button>
                <Button href={whatsappHref} variant="secondary" target="_blank" rel="noopener noreferrer">
                  {t.contact.whatsapp}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-soft-cloud py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-hairline">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-ink text-2xl uppercase mb-6">{t.product_detail.benefits}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.benefits.map((b, i) => (
              <div key={i} className="flex gap-3.5 items-start bg-canvas border border-hairline p-5">
                <svg width="14" height="14" fill="none" stroke="#009253" strokeWidth={2.5} viewBox="0 0 24 24" className="flex-shrink-0 mt-0.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-charcoal text-sm leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Nutrient Profile */}
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-ink text-lg uppercase tracking-[0.05em] mb-4.5">{t.product_detail.nutrients}</h2>
            <div className="border border-hairline overflow-hidden">
              <div className="grid grid-cols-2 bg-ink">
                <div className="px-4 py-2.5 text-[11px] font-bold text-white/62 tracking-[1.2px] uppercase">{t.product_detail.parameter}</div>
                <div className="px-4 py-2.5 text-[11px] font-bold text-white/62 tracking-[1.2px] uppercase">{t.product_detail.value}</div>
              </div>
              {product.nutrients.map((n, i) => (
                <div key={i} className={`grid grid-cols-2 border-t border-hairline ${i % 2 === 0 ? "bg-canvas" : "bg-soft-cloud"}`}>
                  <div className="px-4 py-2.5 text-[13px] text-mute">{n.parameter}</div>
                  <div className="px-4 py-2.5 text-[13px] text-ink font-bold">{n.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dosage */}
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-ink text-lg uppercase tracking-[0.05em] mb-4.5">{t.product_detail.dosage}</h2>
            <div className="border border-hairline overflow-hidden">
              <div className="grid grid-cols-2 bg-urvar-earth">
                <div className="px-4 py-2.5 text-[11px] font-bold text-white/62 tracking-[1.2px] uppercase">{t.product_detail.crop}</div>
                <div className="px-4 py-2.5 text-[11px] font-bold text-white/62 tracking-[1.2px] uppercase">{t.product_detail.dose}</div>
              </div>
              {product.dosages.map((d, i) => (
                <div key={i} className={`grid grid-cols-2 border-t border-hairline ${i % 2 === 0 ? "bg-canvas" : "bg-soft-cloud"}`}>
                  <div className="px-4 py-2.5 text-[13px] text-mute">{d.crop}</div>
                  <div className="px-4 py-2.5">
                    <span className="text-[13px] text-ink font-bold block">{d.dose}</span>
                    <span className="text-[11px] text-stone block mt-0.5">{d.method}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lab Test Report */}
      {product.testReportFile && (
        <section className="bg-soft-cloud py-10 px-4 sm:px-6 lg:px-8 border-t border-hairline">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-6 bg-canvas border border-hairline p-6">
            <div className="flex-shrink-0 w-14 h-14 bg-soft-cloud flex items-center justify-center text-3xl">📄</div>
            <div className="flex-1">
              <h3 className="font-bold text-ink text-lg">{t.product_detail.test_report_heading}</h3>
              <p className="text-mute text-sm mt-1">{t.product_detail.test_report_sub}</p>
            </div>
            <Button href={product.testReportFile} variant="primary" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
              {t.product_detail.test_report_cta}
            </Button>
          </div>
        </section>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-canvas py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-hairline">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bold text-ink text-2xl uppercase mb-6">{t.product_detail.related}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
