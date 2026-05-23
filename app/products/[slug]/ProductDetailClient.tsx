"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLang } from "@/context/LangContext";
import products from "@/data/products";

export default function ProductDetailClient({ slug }: { slug: string }) {
  const { t } = useLang();
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const categoryColor: Record<string, string> = {
    "Organic Manures": "bg-amber-100 text-amber-800",
    "Phosphate Fertilizers": "bg-yellow-100 text-yellow-800",
    "Bio-Stimulants": "bg-blue-100 text-blue-800",
    "Micronutrients": "bg-purple-100 text-purple-800",
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-urvar-dark py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="text-green-300 hover:text-white text-sm font-medium transition-colors mb-6 inline-block">
            {t.product_detail.back}
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${categoryColor[product.category]}`}>
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{product.name}</h1>
              <p className="text-green-200 text-lg leading-relaxed">{product.tagline}</p>
            </div>
            <div className="relative h-72 bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Description */}
          <div className="bg-urvar-light rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-bold text-urvar-dark mb-6">{t.product_detail.benefits}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.benefits.map((b, i) => (
                <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                  <span className="flex-shrink-0 w-7 h-7 bg-urvar-green rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nutrient Profile */}
          <div>
            <h2 className="text-2xl font-bold text-urvar-dark mb-6">{t.product_detail.nutrients}</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-urvar-dark text-white">
                    <th className="text-left px-6 py-4 font-semibold">{t.product_detail.parameter}</th>
                    <th className="text-left px-6 py-4 font-semibold">{t.product_detail.value}</th>
                  </tr>
                </thead>
                <tbody>
                  {product.nutrients.map((n, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-3 text-gray-700 font-medium">{n.parameter}</td>
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
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
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
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-3 text-gray-700 font-medium">{d.crop}</td>
                      <td className="px-6 py-3 text-urvar-dark font-semibold whitespace-nowrap">{d.dose}</td>
                      <td className="px-6 py-3 text-gray-600">{d.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Inquiry CTA */}
          <div className="bg-urvar-dark rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{t.product_detail.cta_heading.replace("{name}", product.name)}</h3>
              <p className="text-green-200 text-sm">{t.product_detail.cta_sub}</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="bg-urvar-green hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                {t.nav.contact}
              </Link>
              <a
                href="https://wa.me/919035708943"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-urvar-dark font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
