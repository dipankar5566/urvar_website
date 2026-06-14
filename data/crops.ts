import type { Messages } from "@/messages/en";

export type StageKey = "land_prep" | "vegetative" | "flowering" | "maturity";

export const stageOrder: StageKey[] = [
  "land_prep",
  "vegetative",
  "flowering",
  "maturity",
];

export interface CropStage {
  stageKey: StageKey;
  /** product slugs from data/products.ts recommended at this stage */
  productSlugs: string[];
}

export interface Crop {
  slug: string;
  nameKey: keyof Messages["crops"];
  introKey: keyof Messages["crops"];
  image: string;
  stages: CropStage[];
}

const crops: Crop[] = [
  {
    slug: "rice",
    nameKey: "rice_name",
    introKey: "rice_intro",
    image: "/images/crops/rice.jpg",
    stages: [
      { stageKey: "land_prep", productSlugs: ["vermicompost", "prom"] },
      { stageKey: "vegetative", productSlugs: ["humic-acid-liquid", "zinc-edta"] },
      { stageKey: "flowering", productSlugs: ["prom-humic-flowering"] },
      { stageKey: "maturity", productSlugs: ["boron-edta"] },
    ],
  },
  {
    slug: "wheat",
    nameKey: "wheat_name",
    introKey: "wheat_intro",
    image: "/images/crops/wheat.jpg",
    stages: [
      { stageKey: "land_prep", productSlugs: ["cow-dung-manure", "prom"] },
      { stageKey: "vegetative", productSlugs: ["humic-acid-liquid", "zinc-edta"] },
      { stageKey: "flowering", productSlugs: ["prom-humic-flowering"] },
      { stageKey: "maturity", productSlugs: ["boron-edta"] },
    ],
  },
  {
    slug: "vegetables",
    nameKey: "vegetables_name",
    introKey: "vegetables_intro",
    image: "/images/crops/vegetables.jpg",
    stages: [
      { stageKey: "land_prep", productSlugs: ["vermicompost", "prom-humic-enriched"] },
      { stageKey: "vegetative", productSlugs: ["humic-acid-liquid", "zinc-edta"] },
      { stageKey: "flowering", productSlugs: ["prom-humic-flowering", "boron-edta"] },
      { stageKey: "maturity", productSlugs: ["boron-edta"] },
    ],
  },
  {
    slug: "potato",
    nameKey: "potato_name",
    introKey: "potato_intro",
    image: "/images/crops/potato.jpg",
    stages: [
      { stageKey: "land_prep", productSlugs: ["vermicompost", "prom"] },
      { stageKey: "vegetative", productSlugs: ["humic-acid-liquid", "zinc-edta"] },
      { stageKey: "flowering", productSlugs: ["prom-humic-flowering"] },
      { stageKey: "maturity", productSlugs: ["boron-edta"] },
    ],
  },
  {
    slug: "mustard",
    nameKey: "mustard_name",
    introKey: "mustard_intro",
    image: "/images/crops/mustard.jpg",
    stages: [
      { stageKey: "land_prep", productSlugs: ["cow-dung-manure", "prom"] },
      { stageKey: "vegetative", productSlugs: ["humic-acid-liquid"] },
      { stageKey: "flowering", productSlugs: ["prom-humic-flowering", "boron-edta"] },
      { stageKey: "maturity", productSlugs: ["boron-edta"] },
    ],
  },
  {
    slug: "fruit-crops",
    nameKey: "fruit_name",
    introKey: "fruit_intro",
    image: "/images/crops/fruit-crops.jpg",
    stages: [
      { stageKey: "land_prep", productSlugs: ["vermicompost", "prom-humic-enriched"] },
      { stageKey: "vegetative", productSlugs: ["humic-acid-liquid", "zinc-edta"] },
      { stageKey: "flowering", productSlugs: ["prom-humic-flowering", "boron-edta"] },
      { stageKey: "maturity", productSlugs: ["humic-acid-liquid"] },
    ],
  },
];

export default crops;

export function cropBySlug(slug: string): Crop | undefined {
  return crops.find((c) => c.slug === slug);
}
