import type { Crop, CropSource, Lang } from "@/data/crops";
import { tnauDeficiencySource } from "@/data/crops/shared";
import products, { type Product } from "@/data/products";
import type { Messages } from "@/messages/en";

export const WHATSAPP_NUMBER = "919035708943";

export const whatsappHref = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

/** Sources in citation order; the deficiency guide's general source goes last. */
export function cropSources(crop: Crop): CropSource[] {
  return crop.deficiencies.length ? [...crop.sources, tnauDeficiencySource] : crop.sources;
}

export function sourceNumbers(crop: Crop): Record<string, number> {
  return Object.fromEntries(cropSources(crop).map((s, i) => [s.id, i + 1]));
}

export const productBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export function cropProductCount(crop: Crop): number {
  return new Set(crop.stages.flatMap((s) => s.products.map((p) => p.slug))).size;
}

export function cropFaqs(crop: Crop, lang: Lang, t: Messages): { q: string; a: string }[] {
  const name = t.crops[crop.nameKey];
  const productsAnswer = crop.stages
    .filter((s) => s.products.length)
    .map((s) => {
      const names = s.products.map((p) => productBySlug(p.slug)?.name).filter(Boolean);
      return `${s.title[lang]}: ${names.join(", ")}.`;
    })
    .join(" ");
  return [
    { q: t.crops.faq_convert_q, a: t.crops.faq_convert_a },
    { q: t.crops.faq_products_q.replace("{crop}", name), a: productsAnswer },
    { q: t.crops.faq_plan_q, a: t.crops.faq_plan_a },
  ];
}
