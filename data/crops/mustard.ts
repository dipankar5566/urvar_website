import type { CropContent } from "../crops";
import { floweringBooster } from "./shared";

const foliar = {
  id: "bckv-mustard-foliar",
  citation:
    "Sarkar, A., Jana, K. and Mondal, R. (2021). Growth and yield of hybrid mustard (Brassica juncea L.) as influenced by foliar nutrition in Gangetic plains of West Bengal. Journal of Crop and Weed 17(3). Department of Agronomy, Bidhan Chandra Krishi Viswavidyalaya, Mohanpur.",
  url: "https://doi.org/10.22271/09746315.2021.v17.i3.1488",
};

const seed = {
  id: "bckv-mustard-seed",
  citation:
    "Das, R., Biswas, S. and Dutta, A. (2025). Physiological, biochemical and enzymatic quality parameters of primed seed of rapeseed-mustard genotypes. Scientific Reports 15: 31967. Bidhan Chandra Krishi Viswavidyalaya, Kalyani.",
  url: "https://doi.org/10.1038/s41598-025-09325-z",
};

const mustard: CropContent = {
  keyFact: {
    text: { en: "Sown mid-November in West Bengal", bn: "পশ্চিমবঙ্গে নভেম্বরের মাঝামাঝি বোনা" },
    sourceId: seed.id,
  },
  sources: [foliar, seed],
  deficiencies: ["boron", "phosphorus"],
  stages: [
    {
      id: "sowing",
      title: { en: "Land preparation & sowing", bn: "জমি প্রস্তুতি ও বীজ বোনা" },
      timing: { en: "Mid-November", bn: "নভেম্বরের মাঝামাঝি" },
      guidance: {
        en: "BCKV trials at Kalyani sowed mustard in mid-November. Half the nitrogen and all of the phosphorus and potassium go in at final land preparation.",
        bn: "কল্যাণীতে বিসিকেভি-র পরীক্ষায় নভেম্বরের মাঝামাঝি সরিষা বোনা হয়েছে। শেষ চাষের সময় অর্ধেক নাইট্রোজেন এবং সম্পূর্ণ ফসফরাস ও পটাশ দেওয়া হয়।",
      },
      sourceIds: [seed.id, foliar.id],
      products: [{ slug: "cow-dung-manure" }, { slug: "prom" }],
    },
    {
      id: "top-dressing",
      title: { en: "Top dressing", bn: "চাপান সার" },
      timing: { en: "30 days after sowing", bn: "বোনার ৩০ দিন পর" },
      guidance: {
        en: "The remaining half of the nitrogen is applied at 30 days after sowing.",
        bn: "বোনার ৩০ দিন পর বাকি অর্ধেক নাইট্রোজেন দেওয়া হয়।",
      },
      sourceIds: [foliar.id],
      products: [{ slug: "humic-acid-liquid" }],
    },
    {
      id: "pre-flowering",
      title: { en: "Pre-flowering", bn: "ফুল আসার আগে" },
      timing: { en: "45 days after sowing", bn: "বোনার ৪৫ দিন পর" },
      guidance: {
        en: "The pre-flowering foliar spray is given at 45 days after sowing. In BCKV trials, foliar boron gave the second-highest oil content (38.7%), after sulphur.",
        bn: "বোনার ৪৫ দিন পর ফুল আসার আগের স্প্রে দেওয়া হয়। বিসিকেভি-র পরীক্ষায় পাতায় বোরন স্প্রে করলে তেলের পরিমাণ দ্বিতীয় সর্বোচ্চ (৩৮.৭%) হয়েছে, সালফারের পরেই।",
      },
      sourceIds: [foliar.id],
      products: [floweringBooster, { slug: "boron-edta" }],
    },
    {
      id: "siliqua",
      title: { en: "Siliqua initiation", bn: "শুঁটি আসার শুরু" },
      timing: { en: "60 days after sowing", bn: "বোনার ৬০ দিন পর" },
      guidance: {
        en: "A second foliar spray is given at siliqua initiation, 60 days after sowing.",
        bn: "বোনার ৬০ দিন পর শুঁটি আসার শুরুতে দ্বিতীয়বার পাতায় স্প্রে দেওয়া হয়।",
      },
      sourceIds: [foliar.id],
      products: [],
    },
    {
      id: "maturity",
      title: { en: "Maturity", bn: "পরিপক্কতা" },
      timing: { en: "When over 80% of pods turn yellow", bn: "৮০%-এর বেশি শুঁটি হলুদ হলে" },
      guidance: {
        en: "The crop is mature when more than 80% of the siliquae on sampled plants have turned yellow.",
        bn: "নমুনা গাছের ৮০%-এর বেশি শুঁটি হলুদ হয়ে গেলে ফসল পরিপক্ক।",
      },
      sourceIds: [seed.id],
      products: [],
    },
  ],
};

export default mustard;
