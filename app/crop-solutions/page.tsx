"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import crops from "@/data/crops";

export default function CropSolutionsPage() {
  const { t } = useLang();

  return (
    <>
      <Section bg="dark" className="!py-12 sm:!py-16">
        <nav className="text-sm text-urvar-light/80 mb-5" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">
            {t.nav.home}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{t.crops.hub_heading}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold">{t.crops.hub_heading}</h1>
        <p className="mt-4 max-w-2xl text-urvar-light/90 leading-relaxed">{t.crops.hub_sub}</p>
      </Section>

      <Section bg="white">
        <h2 className="text-xl sm:text-2xl font-bold text-urvar-dark mb-8">{t.crops.select_crop}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((crop) => (
            <Link
              key={crop.slug}
              href={`/crop-solutions/${crop.slug}`}
              className="group bg-white rounded-2xl border border-neutral-200 shadow-e1 overflow-hidden hover:shadow-e2 hover:-translate-y-1 transition-all"
            >
              <div className="relative h-44">
                <Image
                  src={crop.image}
                  alt={t.crops[crop.nameKey]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-urvar-dark/70 to-transparent" />
                <h3 className="absolute bottom-3 left-4 text-white font-bold text-lg">
                  {t.crops[crop.nameKey]}
                </h3>
              </div>
              <div className="p-5">
                <span className="text-urvar-green font-semibold text-sm inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  {t.crops.view_program} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section bg="mint">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-urvar-dark">{t.crops.cta_heading}</h2>
          <p className="mt-2 text-neutral-600">{t.crops.cta_sub}</p>
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
