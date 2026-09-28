import type { Messages } from "@/messages/en";
import potato from "./crops/potato";
import rice from "./crops/rice";
import wheat from "./crops/wheat";
import mustard from "./crops/mustard";
import vegetables from "./crops/vegetables";
import jute from "./crops/jute";
import maize from "./crops/maize";
import pulses from "./crops/pulses";
import flowers from "./crops/flowers";
import mango from "./crops/mango";
import litchi from "./crops/litchi";
import tea from "./crops/tea";
import pineapple from "./crops/pineapple";

export type Lang = "en" | "bn";
export type Localized = Record<Lang, string>;
export type Season = "kharif" | "rabi" | "perennial" | "year_round";
export type Nutrient = "zinc" | "boron" | "phosphorus";

export interface CropSource {
  id: string;
  citation: string;
  url: string;
}

export interface StageProduct {
  slug: string;
  /** Overrides the label row's method when the label's timing for this crop row is known to be wrong. */
  method?: Localized;
}

export interface CropStage {
  id: string;
  title: Localized;
  timing: Localized;
  guidance: Localized;
  sourceIds: string[];
  products: StageProduct[];
}

export interface CropContent {
  /** A cited headline fact shown in the hero, e.g. the sowing window. */
  keyFact?: { text: Localized; sourceId: string };
  stages: CropStage[];
  deficiencies: Nutrient[];
  sources: CropSource[];
}

export interface Crop extends CropContent {
  slug: string;
  nameKey: keyof Messages["crops"];
  introKey: keyof Messages["crops"];
  image: string;
  season: Season;
  /** Product dosage rows (data/products.ts `crop` prefix) to read doses from, closest first. */
  doseRows: string[];
  /** Whether doseRows[0] is this crop's own row rather than the closest substitute. */
  doseRowExact: boolean;
}

export const seasonOrder: Season[] = ["kharif", "rabi", "perennial", "year_round"];

const crops: Crop[] = [
  {
    slug: "rice",
    nameKey: "rice_name",
    introKey: "rice_intro",
    image: "/images/crops/rice.webp",
    season: "kharif",
    doseRows: ["Paddy"],
    doseRowExact: true,
    ...rice,
  },
  {
    slug: "wheat",
    nameKey: "wheat_name",
    introKey: "wheat_intro",
    image: "/images/crops/wheat.webp",
    season: "rabi",
    doseRows: ["Paddy"],
    doseRowExact: false,
    ...wheat,
  },
  {
    slug: "potato",
    nameKey: "potato_name",
    introKey: "potato_intro",
    image: "/images/crops/potato.webp",
    season: "rabi",
    doseRows: ["Vegetables"],
    doseRowExact: false,
    ...potato,
  },
  {
    slug: "mustard",
    nameKey: "mustard_name",
    introKey: "mustard_intro",
    image: "/images/crops/mustard.webp",
    season: "rabi",
    doseRows: ["Pulses & Oilseeds"],
    doseRowExact: true,
    ...mustard,
  },
  {
    slug: "vegetables",
    nameKey: "vegetables_name",
    introKey: "vegetables_intro",
    image: "/images/crops/vegetables.webp",
    season: "year_round",
    doseRows: ["Vegetables"],
    doseRowExact: true,
    ...vegetables,
  },
  {
    slug: "jute",
    nameKey: "jute_name",
    introKey: "jute_intro",
    image: "/images/crops/jute.webp",
    season: "kharif",
    doseRows: ["Paddy"],
    doseRowExact: false,
    ...jute,
  },
  {
    slug: "maize",
    nameKey: "maize_name",
    introKey: "maize_intro",
    image: "/images/crops/maize.webp",
    season: "rabi",
    doseRows: ["Paddy"],
    doseRowExact: false,
    ...maize,
  },
  {
    slug: "pulses",
    nameKey: "pulses_name",
    introKey: "pulses_intro",
    image: "/images/crops/pulses.webp",
    season: "rabi",
    doseRows: ["Pulses & Oilseeds"],
    doseRowExact: true,
    ...pulses,
  },
  {
    slug: "flowers",
    nameKey: "flowers_name",
    introKey: "flowers_intro",
    image: "/images/crops/flowers.webp",
    season: "rabi",
    doseRows: ["Flowers"],
    doseRowExact: true,
    ...flowers,
  },
  {
    slug: "mango",
    nameKey: "mango_name",
    introKey: "mango_intro",
    image: "/images/crops/mango.webp",
    season: "perennial",
    doseRows: ["Fruits"],
    doseRowExact: true,
    ...mango,
  },
  {
    slug: "litchi",
    nameKey: "litchi_name",
    introKey: "litchi_intro",
    image: "/images/crops/litchi.webp",
    season: "perennial",
    doseRows: ["Fruits"],
    doseRowExact: false,
    ...litchi,
  },
  {
    slug: "tea",
    nameKey: "tea_name",
    introKey: "tea_intro",
    image: "/images/crops/tea.webp",
    season: "perennial",
    doseRows: [],
    doseRowExact: false,
    ...tea,
  },
  {
    slug: "pineapple",
    nameKey: "pineapple_name",
    introKey: "pineapple_intro",
    image: "/images/crops/pineapple.webp",
    season: "perennial",
    doseRows: ["Fruits"],
    doseRowExact: false,
    ...pineapple,
  },
];

export default crops;

export function cropBySlug(slug: string): Crop | undefined {
  return crops.find((c) => c.slug === slug);
}
