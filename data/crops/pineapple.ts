import type { CropContent } from "../crops";
import { floweringBooster } from "./shared";

const ubkv = {
  id: "ubkv-pineapple",
  citation:
    "Bhowmick, N., Deb, P., Munsi, P. and Ghosh, S.K. (2022). Morphological characterization and performance of different pineapple (Ananas comosus) varieties in northern parts of West Bengal. Indian Journal of Agricultural Sciences 92(5): 567–571. Department of Pomology and Post-Harvest Technology, Uttar Banga Krishi Viswavidyalaya (UBKV), Pundibari, Cooch Behar, West Bengal.",
  url: "https://doi.org/10.56093/ijas.v92i5.124625",
};

const pineapple: CropContent = {
  keyFact: {
    text: { en: "Best variety in UBKV trials: Mauritius", bn: "ইউবিকেভি-র পরীক্ষায় সেরা জাত: মরিশাস" },
    sourceId: ubkv.id,
  },
  sources: [ubkv],
  deficiencies: ["boron", "zinc", "phosphorus"],
  stages: [
    {
      id: "planting",
      title: { en: "Planting", bn: "রোপণ" },
      timing: { en: "February", bn: "ফেব্রুয়ারি" },
      guidance: {
        en: "Healthy, disease-free suckers are treated with fungicide and planted in double rows: 25 cm between plants, 35 cm between rows, 90 cm between beds.",
        bn: "সুস্থ, রোগমুক্ত চারা ছত্রাকনাশক দিয়ে শোধন করে দুই-সারি পদ্ধতিতে রোপণ করা হয়: গাছে-গাছে ২৫ সেমি, সারিতে-সারিতে ৩৫ সেমি এবং বেডে-বেডে ৯০ সেমি দূরত্বে।",
      },
      sourceIds: [ubkv.id],
      products: [{ slug: "vermicompost" }],
    },
    {
      id: "vegetative-growth",
      title: { en: "Vegetative growth", bn: "পাতাগত বৃদ্ধি" },
      timing: { en: "Through the first year", bn: "প্রথম বছর জুড়ে" },
      guidance: {
        en: "Manure and fertiliser are applied on a set schedule through the vegetative growth phase.",
        bn: "পাতাগত বৃদ্ধির সময় সার ও গোবর সার একটি নির্দিষ্ট সময়সূচি মেনে প্রয়োগ করা হয়।",
      },
      sourceIds: [ubkv.id],
      products: [{ slug: "humic-acid-liquid" }, { slug: "zinc-edta" }],
    },
    {
      id: "flowering",
      title: { en: "Flowering", bn: "ফুল আসা" },
      timing: { en: "About 326 days after planting (cv. Mauritius)", bn: "রোপণের প্রায় ৩২৬ দিন পর (মরিশাস জাত)" },
      guidance: {
        en: "In UBKV trials in northern West Bengal, Mauritius flowered earliest among the varieties tested — about 326 days after planting, with a 98% flowering rate.",
        bn: "উত্তরবঙ্গে ইউবিকেভি-র পরীক্ষায় পরীক্ষিত জাতগুলোর মধ্যে মরিশাস সবচেয়ে আগে ফুল ধরেছে — রোপণের প্রায় ৩২৬ দিন পর, ৯৮% ফুল আসার হারে।",
      },
      sourceIds: [ubkv.id],
      products: [floweringBooster, { slug: "boron-edta" }],
    },
    {
      id: "harvest",
      title: { en: "Fruit development & harvest", bn: "ফল পুষ্ট হওয়া ও ফসল তোলা" },
      timing: { en: "About 109 days after flowering (cv. Mauritius)", bn: "ফুল আসার প্রায় ১০৯ দিন পর (মরিশাস জাত)" },
      guidance: {
        en: "Mauritius needed the least time to mature among the varieties tested — about 109 days from flowering to harvest — with a good yield of 57.5 tonnes per hectare.",
        bn: "পরীক্ষিত জাতগুলোর মধ্যে মরিশাসের পাকতে সবচেয়ে কম সময় লেগেছে — ফুল আসা থেকে ফসল তোলা পর্যন্ত প্রায় ১০৯ দিন — এবং ফলনও ভালো হয়েছে, হেক্টরপ্রতি ৫৭.৫ টন।",
      },
      sourceIds: [ubkv.id],
      products: [],
    },
  ],
};

export default pineapple;
