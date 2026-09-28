import type { CropContent } from "../crops";
import { floweringBooster } from "./shared";

const bckv = {
  id: "bckv-potato",
  citation:
    "Mandal, M. and Das, S.K. (2020). Effect of intra row spacing, dates of haulm cutting and fertilizer dose on disease free quality seed tuber production of potato under New Alluvial Zone of West Bengal. Journal of Applied and Natural Science 12(1): 1–8. AICRP on Potato, Bidhan Chandra Krishi Viswavidyalaya, Kalyani.",
  url: "https://doi.org/10.31018/jans.v12i1.2204",
};

const potato: CropContent = {
  keyFact: {
    text: { en: "Grown Nov–Mar in West Bengal", bn: "পশ্চিমবঙ্গে নভেম্বর–মার্চে চাষ" },
    sourceId: bckv.id,
  },
  sources: [bckv],
  deficiencies: ["zinc", "boron", "phosphorus"],
  stages: [
    {
      id: "planting",
      title: { en: "Land preparation & planting", bn: "জমি প্রস্তুতি ও রোপণ" },
      timing: { en: "First week of November", bn: "নভেম্বরের প্রথম সপ্তাহ" },
      guidance: {
        en: "Half the nitrogen and all of the phosphorus and potassium go in as a basal dose at planting.",
        bn: "রোপণের সময় অর্ধেক নাইট্রোজেন এবং সম্পূর্ণ ফসফরাস ও পটাশ মূল সার হিসেবে দেওয়া হয়।",
      },
      sourceIds: [bckv.id],
      products: [{ slug: "vermicompost" }, { slug: "prom" }],
    },
    {
      id: "early-growth",
      title: { en: "Early growth", bn: "প্রাথমিক বৃদ্ধি" },
      timing: { en: "20 days after planting", bn: "রোপণের ২০ দিন পর" },
      guidance: {
        en: "Hand-weeding at 20 days after planting promotes early crop growth.",
        bn: "রোপণের ২০ দিন পর হাতে আগাছা পরিষ্কার করলে ফসলের প্রাথমিক বৃদ্ধি ভালো হয়।",
      },
      sourceIds: [bckv.id],
      products: [],
    },
    {
      id: "top-dressing",
      title: { en: "Top dressing & earthing up", bn: "চাপান সার ও মাটি তোলা" },
      timing: { en: "30 days after planting", bn: "রোপণের ৩০ দিন পর" },
      guidance: {
        en: "The remaining half of the nitrogen is top-dressed at 30 days after planting, followed by earthing up.",
        bn: "রোপণের ৩০ দিন পর বাকি অর্ধেক নাইট্রোজেন চাপান হিসেবে দিয়ে মাটি তোলা হয়।",
      },
      sourceIds: [bckv.id],
      products: [{ slug: "humic-acid-liquid" }, { slug: "zinc-edta" }],
    },
    {
      id: "tuber-development",
      title: { en: "Tuber development", bn: "কন্দের বৃদ্ধি" },
      timing: { en: "Between earthing up and haulm cutting", bn: "মাটি তোলা থেকে গাছ কাটার মধ্যে" },
      guidance: {
        en: "Aphid numbers generally reach critical levels from the second week of January, so keep monitoring the crop.",
        bn: "জানুয়ারির দ্বিতীয় সপ্তাহ থেকে সাধারণত জাবপোকার সংখ্যা সংকটজনক মাত্রায় পৌঁছায়, তাই ফসলের উপর নিয়মিত নজর রাখুন।",
      },
      sourceIds: [bckv.id],
      products: [floweringBooster, { slug: "boron-edta" }],
    },
    {
      id: "harvest",
      title: { en: "Haulm cutting & harvest", bn: "গাছ কাটা ও ফসল তোলা" },
      timing: { en: "65 days after planting (seed crop)", bn: "রোপণের ৬৫ দিন পর (বীজ আলু)" },
      guidance: {
        en: "In BCKV trials for seed-tuber crops, haulm cutting at 65 days after planting gave more seed-size tubers than at 75 days and lowered the risk of aphid-borne virus. Harvest 10 days after haulm cutting.",
        bn: "বীজ আলুর জন্য বিসিকেভি-র পরীক্ষায় রোপণের ৬৫ দিন পর গাছ কাটলে ৭৫ দিনের তুলনায় বেশি বীজ-আকারের কন্দ পাওয়া গেছে এবং জাবপোকাবাহিত ভাইরাসের ঝুঁকি কমেছে। গাছ কাটার ১০ দিন পর আলু তুলুন।",
      },
      sourceIds: [bckv.id],
      products: [],
    },
  ],
};

export default potato;
