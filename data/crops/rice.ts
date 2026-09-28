import type { CropContent } from "../crops";
import { floweringBooster } from "./shared";

const bckv = {
  id: "bckv-rice",
  citation:
    "Sarkar, Ray, Garai, Banerjee, Haldar and Nayak (2023). Modelling nitrogen management in hybrid rice for coastal ecosystem of West Bengal, India. PeerJ 11: e14903. Regional Research Station (Coastal Saline Zone), Bidhan Chandra Krishi Viswavidyalaya, Kakdwip.",
  url: "https://doi.org/10.7717/peerj.14903",
};

const rice: CropContent = {
  keyFact: {
    text: { en: "Kharif (rainy season) crop", bn: "খরিফ (বর্ষা মৌসুমের) ফসল" },
    sourceId: bckv.id,
  },
  sources: [bckv],
  deficiencies: ["zinc", "phosphorus"],
  stages: [
    {
      id: "transplanting",
      title: { en: "Land preparation & transplanting", bn: "জমি প্রস্তুতি ও রোয়া" },
      timing: { en: "25-day-old seedlings", bn: "২৫ দিন বয়সী চারা" },
      guidance: {
        en: "Seedlings are transplanted at 25 days old. A quarter of the nitrogen and all of the phosphorus and potassium go in at final land preparation.",
        bn: "২৫ দিন বয়সী চারা রোয়া করা হয়। শেষ চাষের সময় এক-চতুর্থাংশ নাইট্রোজেন এবং সম্পূর্ণ ফসফরাস ও পটাশ দেওয়া হয়।",
      },
      sourceIds: [bckv.id],
      products: [{ slug: "vermicompost" }, { slug: "prom" }],
    },
    {
      id: "tillering",
      title: { en: "Maximum tillering", bn: "সর্বোচ্চ কুশি পর্যায়" },
      timing: { en: "21 days after transplanting", bn: "রোয়ার ২১ দিন পর" },
      guidance: {
        en: "Half of the nitrogen is applied at the maximum tillering stage.",
        bn: "সর্বোচ্চ কুশি পর্যায়ে অর্ধেক নাইট্রোজেন দেওয়া হয়।",
      },
      sourceIds: [bckv.id],
      products: [{ slug: "humic-acid-liquid" }, { slug: "zinc-edta" }],
    },
    {
      id: "panicle-initiation",
      title: { en: "Panicle initiation", bn: "থোড় আসার শুরু" },
      timing: { en: "42 days after transplanting", bn: "রোয়ার ৪২ দিন পর" },
      guidance: {
        en: "The last quarter of the nitrogen is applied at panicle initiation.",
        bn: "থোড় আসার শুরুতে বাকি এক-চতুর্থাংশ নাইট্রোজেন দেওয়া হয়।",
      },
      sourceIds: [bckv.id],
      products: [floweringBooster, { slug: "boron-edta" }],
    },
    {
      id: "harvest",
      title: { en: "Harvest", bn: "ফসল কাটা" },
      timing: { en: "First week of November", bn: "নভেম্বরের প্রথম সপ্তাহ" },
      guidance: {
        en: "In BCKV's kharif trials at Kakdwip, the crop was harvested in the first week of November.",
        bn: "কাকদ্বীপে বিসিকেভি-র খরিফ পরীক্ষায় নভেম্বরের প্রথম সপ্তাহে ফসল কাটা হয়েছে।",
      },
      sourceIds: [bckv.id],
      products: [],
    },
  ],
};

export default rice;
