import type { CropContent } from "../crops";
import { floweringBooster } from "./shared";

const bckv = {
  id: "bckv-tomato",
  citation:
    "Mondal, S. and Akhtar, F.S. (2025). Influence of integrated nutrient management on soil fertility, yield and quality of tomato (Lycopersicon esculentum). SATSA Mukhapatra – Annual Technical Issue 29: 170. AICRP on STCR, Bidhan Chandra Krishi Viswavidyalaya, Kalyani.",
  url: "https://satsawb.org/annual-technical-issue/29/FILE-NO-15.pdf",
};

const vegetables: CropContent = {
  keyFact: {
    text: { en: "Stages based on BCKV tomato trials", bn: "বিসিকেভি-র টমেটো পরীক্ষার ভিত্তিতে ধাপ" },
    sourceId: bckv.id,
  },
  sources: [bckv],
  deficiencies: ["boron", "zinc", "phosphorus"],
  stages: [
    {
      id: "field-preparation",
      title: { en: "Field preparation", bn: "জমি প্রস্তুতি" },
      timing: { en: "Before transplanting", bn: "রোয়ার আগে" },
      guidance: {
        en: "FYM and vermicompost are worked into the field at preparation, and bio-fertilisers are mixed into the soil before transplanting. In BCKV tomato trials, half the recommended fertiliser plus vermicompost, FYM and bio-fertiliser gave the highest yield and quality.",
        bn: "জমি প্রস্তুতির সময় গোবর সার ও ভার্মিকম্পোস্ট মেশানো হয় এবং রোয়ার আগে জীবাণু সার মাটিতে মেশানো হয়। বিসিকেভি-র টমেটো পরীক্ষায় অর্ধেক সুপারিশকৃত রাসায়নিক সারের সাথে ভার্মিকম্পোস্ট, গোবর সার ও জীবাণু সার দিলে সবচেয়ে বেশি ফলন ও গুণমান পাওয়া গেছে।",
      },
      sourceIds: [bckv.id],
      products: [{ slug: "vermicompost" }, { slug: "prom" }],
    },
    {
      id: "transplanting",
      title: { en: "Transplanting", bn: "চারা রোয়া" },
      timing: { en: "One-month-old seedlings", bn: "এক মাস বয়সী চারা" },
      guidance: {
        en: "One-month-old seedlings are transplanted, with half the nitrogen and all of the phosphorus and potassium as a basal dose.",
        bn: "এক মাস বয়সী চারা রোয়া করা হয়, সঙ্গে মূল সার হিসেবে অর্ধেক নাইট্রোজেন এবং সম্পূর্ণ ফসফরাস ও পটাশ।",
      },
      sourceIds: [bckv.id],
      products: [],
    },
    {
      id: "crop-growth",
      title: { en: "Crop growth", bn: "গাছের বৃদ্ধি" },
      timing: { en: "After transplanting", bn: "রোয়ার পর" },
      guidance: {
        en: "The rest of the nitrogen is applied in two split doses after transplanting.",
        bn: "রোয়ার পর বাকি নাইট্রোজেন দুই ভাগে দেওয়া হয়।",
      },
      sourceIds: [bckv.id],
      products: [{ slug: "humic-acid-liquid" }, { slug: "zinc-edta" }],
    },
    {
      id: "flowering",
      title: { en: "Flowering & fruit set", bn: "ফুল ও ফল ধরা" },
      timing: { en: "Varies by vegetable", bn: "সবজি অনুযায়ী ভিন্ন" },
      guidance: {
        en: "Flowering time differs from one vegetable to another. Tell us your crop on WhatsApp for exact timing.",
        bn: "ফুল আসার সময় সবজি ভেদে আলাদা। সঠিক সময়ের জন্য হোয়াটসঅ্যাপে আপনার ফসলের নাম জানান।",
      },
      sourceIds: [],
      products: [floweringBooster, { slug: "boron-edta" }],
    },
  ],
};

export default vegetables;
