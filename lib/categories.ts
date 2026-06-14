import type { Product } from "@/data/products";
import type { Messages } from "@/messages/en";

export type Category = Product["category"];

type CategoryMeta = {
  slug: string;
  /** Tailwind badge classes (brand-aligned, see docs/redesign/03-design-system.md) */
  badge: string;
  /** i18n key under t.products for the category name */
  nameKey: keyof Messages["products"];
  /** i18n key under t.products for the category intro paragraph */
  introKey: keyof Messages["products"];
};

export const categoryMeta: Record<Category, CategoryMeta> = {
  "Organic Manures": {
    slug: "organic-manures",
    badge: "bg-urvar-earth-light text-urvar-earth",
    nameKey: "filter_organic",
    introKey: "cat_intro_organic",
  },
  "Phosphate Fertilizers": {
    slug: "phosphate-fertilizers",
    badge: "bg-amber-100 text-amber-900",
    nameKey: "filter_phosphate",
    introKey: "cat_intro_phosphate",
  },
  "Bio-Stimulants": {
    slug: "bio-stimulants",
    badge: "bg-urvar-light text-urvar-green",
    nameKey: "filter_biostim",
    introKey: "cat_intro_biostim",
  },
  Micronutrients: {
    slug: "micronutrients",
    badge: "bg-urvar-leaf/15 text-urvar-dark",
    nameKey: "filter_micro",
    introKey: "cat_intro_micro",
  },
};

export const allCategories = Object.keys(categoryMeta) as Category[];

export function categoryBySlug(slug: string): Category | undefined {
  return allCategories.find((c) => categoryMeta[c].slug === slug);
}
