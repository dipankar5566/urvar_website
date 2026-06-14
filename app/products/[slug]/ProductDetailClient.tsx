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
      {/* Hero */}
      <section className="bg-urvar-dark py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-urvar-light/80 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">
              {t.nav.home}
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-white">
              {t.product_detail.breadcrumb_products}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{product.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Link
                href={`/products/category/${meta.slug}`}
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${meta.badge}`}
              >
                {product.category}
              </Link>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{product.name}</h1>
              <p className="text-urvar-light/90 text-lg leading-relaxed">{product.tagline}</p>
            </div>
            <div className="relative h-72 bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
              <Image src={product.image} alt={product.name} fill className="object-contain p-6" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Description */}
          <div className="bg-urvar-light rounded-2xl p-8">
            <p className="text-neutral-700 leading-relaxed text-lg">{product.description}</p>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-bold text-urvar-dark mb-6">{t.product_detail.benefits}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.benefits.map((b, i) => (
                <div key={i} className="flex gap-3 bg-white border border-neutral-200 rounded-xl p-4 shadow-e1">
                  <span className="flex-shrink-0 w-7 h-7 bg-urvar-green rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-neutral-700 text-sm leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nutrient Profile */}
          <div>
            <h2 className="text-2xl font-bold text-urvar-dark mb-6">{t.product_detail.nutrients}</h2>
            <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-e1">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-urvar-dark text-white">
                    <th className="text-left px-6 py-4 font-semibold">{t.product_detail.parameter}</th>
                    <th className="text-left px-6 py-4 font-semibold">{t.product_detail.value}</th>
                  </tr>
                </thead>
                <tbody>
                  {product.nutrients.map((n, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                      <td className="px-6 py-3 text-neutral-700 font-medium">{n.parameter}</td>
                      <td className="px-6 py-3 text-urvar-dark font-semibold">{n.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dosage */}
          <div>
            <h2 className="text-2xl font-bold text-urvar-dark mb-6">{t.product_detail.dosage}</h2>
            <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-e1">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-urvar-green text-white">
                    <th className="text-left px-6 py-4 font-semibold">{t.product_detail.crop}</th>
                    <th className="text-left px-6 py-4 font-semibold">{t.product_detail.dose}</th>
                    <th className="text-left px-6 py-4 font-semibold">{t.product_detail.method}</th>
                  </tr>
                </thead>
                <tbody>
                  {product.dosages.map((d, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                      <td className="px-6 py-3 text-neutral-700 font-medium">{d.crop}</td>
                      <td className="px-6 py-3 text-urvar-dark font-semibold whitespace-nowrap">{d.dose}</td>
                      <td className="px-6 py-3 text-neutral-600">{d.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Inquiry CTA */}
          <div className="bg-urvar-dark rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                {t.product_detail.cta_heading.replace("{name}", product.name)}
              </h3>
              <p className="text-urvar-light/90 text-sm">{t.product_detail.cta_sub}</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button href="/contact" variant="primary">
                {t.nav.contact}
              </Button>
              <Button
                href={whatsappHref}
                variant="secondary"
                className="!border-white !text-white hover:!bg-white hover:!text-urvar-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.whatsapp}
              </Button>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-urvar-dark mb-6">{t.product_detail.related}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
