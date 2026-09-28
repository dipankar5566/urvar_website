import type { CropContent } from "../crops";
import { floweringBooster } from "./shared";

const tnau = {
  id: "tnau-marigold",
  citation:
    "TNAU Agritech Portal, Tamil Nadu Agricultural University: Horticulture, Flower Crops – Marigold (fertilizer schedule and cultivation practices).",
  url: "https://agritech.tnau.ac.in/horticulture/horti_flower%20crops_marigold.html",
};

// Location/season context only (grown as a rabi flower crop in West Bengal's
// Gangetic alluvial zone); no fertiliser or timing figures are drawn from this
// paper, as its full text wasn't accessible to verify.
const bckv = {
  id: "bckv-marigold",
  citation:
    "Ray, J. and Bordolui, S.K. (2020). Effect of GA3 on marigold seed production in Gangetic Alluvial Zone. Journal of Crop and Weed 16(1). Horticultural Research Station, Mondouri, Bidhan Chandra Krishi Viswavidyalaya, Mohanpur, Nadia.",
  url: "https://www.researchgate.net/publication/343464459_Effect_of_GA3_on_marigold_seed_production_in_Gangetic_Alluvial_Zone",
};

const flowers: CropContent = {
  keyFact: {
    text: { en: "Grown as a rabi flower crop in West Bengal", bn: "পশ্চিমবঙ্গে রবি মৌসুমের ফুল ফসল হিসেবে চাষ" },
    sourceId: bckv.id,
  },
  sources: [tnau, bckv],
  deficiencies: ["zinc", "boron", "phosphorus"],
  stages: [
    {
      id: "transplanting",
      title: { en: "Land preparation & transplanting", bn: "জমি প্রস্তুতি ও চারা রোপণ" },
      timing: { en: "4-week-old seedlings, 45×35 cm spacing", bn: "৪ সপ্তাহ বয়সী চারা, ৪৫×৩৫ সেমি দূরত্বে" },
      guidance: {
        en: "FYM is worked into the field at preparation, with a basal dose of nitrogen, phosphorus and potassium at transplanting.",
        bn: "জমি প্রস্তুতির সময় গোবর সার মেশানো হয়, এবং রোপণের সময় নাইট্রোজেন, ফসফরাস ও পটাশের মূল সার দেওয়া হয়।",
      },
      sourceIds: [tnau.id],
      products: [{ slug: "cow-dung-manure" }, { slug: "prom" }],
    },
    {
      id: "pinching",
      title: { en: "Pinching", bn: "আগা ছাঁটাই" },
      timing: { en: "30 days after planting", bn: "রোপণের ৩০ দিন পর" },
      guidance: {
        en: "The terminal shoot is tipped off 30 days after planting to encourage branching.",
        bn: "রোপণের ৩০ দিন পর ডগা ছেঁটে দিলে গাছে বেশি শাখা বের হয়।",
      },
      sourceIds: [tnau.id],
      products: [],
    },
    {
      id: "top-dressing",
      title: { en: "Top dressing", bn: "চাপান সার" },
      timing: { en: "45 days after planting", bn: "রোপণের ৪৫ দিন পর" },
      guidance: {
        en: "The remaining nitrogen is top-dressed at 45 days after planting.",
        bn: "রোপণের ৪৫ দিন পর বাকি নাইট্রোজেন চাপান দেওয়া হয়।",
      },
      sourceIds: [tnau.id],
      products: [{ slug: "humic-acid-liquid" }, { slug: "zinc-edta" }],
    },
    {
      id: "flowering",
      title: { en: "Flowering & picking", bn: "ফুল ও ফুল তোলা" },
      timing: { en: "From 60 days after planting", bn: "রোপণের ৬০ দিন পর থেকে" },
      guidance: {
        en: "Flowers are picked once every 3 days starting 60 days after planting.",
        bn: "রোপণের ৬০ দিন পর থেকে প্রতি ৩ দিনে একবার ফুল তোলা হয়।",
      },
      sourceIds: [tnau.id],
      products: [floweringBooster, { slug: "boron-edta" }],
    },
  ],
};

export default flowers;
