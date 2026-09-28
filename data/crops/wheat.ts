import type { CropContent } from "../crops";
import { floweringBooster } from "./shared";

const bckv = {
  id: "bckv-wheat",
  citation:
    "Mukherjee, D. (2024). Enhancement of wheat productivity through variation in sowing time and nutrient management with growth regulators. Annals of Agricultural Research 45(4): 351–356. Regional Research Station, Bidhan Chandra Krishi Viswavidyalaya; trials at Kalyani.",
  url: "https://epubs.icar.org.in/index.php/AAR/article/view/163056",
};

const rpcau = {
  id: "rpcau-wheat",
  citation:
    "Sattar, A., Nanda, G., Singh, G., Jha, R.K. and Bal, S.K. (2023). Responses of phenology, yield attributes, and yield of wheat varieties under different sowing times in Indo-Gangetic Plains. Frontiers in Plant Science 14: 1224334. Dr. Rajendra Prasad Central Agricultural University, Pusa.",
  url: "https://doi.org/10.3389/fpls.2023.1224334",
};

const wheat: CropContent = {
  keyFact: {
    text: { en: "Best sown by 15 November", bn: "১৫ নভেম্বরের মধ্যে বোনা ভালো" },
    sourceId: bckv.id,
  },
  sources: [bckv, rpcau],
  deficiencies: ["zinc", "phosphorus"],
  stages: [
    {
      id: "sowing",
      title: { en: "Sowing", bn: "বীজ বোনা" },
      timing: { en: "15 November (best sowing date)", bn: "১৫ নভেম্বর (সেরা সময়)" },
      guidance: {
        en: "In BCKV trials at Kalyani, sowing on 15 November gave significantly more grain than later sowings. Half the nitrogen and all of the phosphorus and potassium go in at sowing.",
        bn: "কল্যাণীতে বিসিকেভি-র পরীক্ষায় ১৫ নভেম্বর বোনা গমে পরে বোনার তুলনায় উল্লেখযোগ্যভাবে বেশি ফলন হয়েছে। বোনার সময় অর্ধেক নাইট্রোজেন এবং সম্পূর্ণ ফসফরাস ও পটাশ দেওয়া হয়।",
      },
      sourceIds: [bckv.id, rpcau.id],
      products: [{ slug: "vermicompost" }, { slug: "prom" }],
    },
    {
      id: "crown-root",
      title: { en: "Crown root initiation", bn: "মুকুট শিকড় গজানো" },
      timing: { en: "21 days after sowing", bn: "বোনার ২১ দিন পর" },
      guidance: {
        en: "First irrigation at 21 days after sowing. A quarter of the nitrogen is top-dressed at crown root initiation.",
        bn: "বোনার ২১ দিন পর প্রথম সেচ। মুকুট শিকড় গজানোর সময় এক-চতুর্থাংশ নাইট্রোজেন চাপান দেওয়া হয়।",
      },
      sourceIds: [rpcau.id],
      products: [{ slug: "humic-acid-liquid" }, { slug: "zinc-edta" }],
    },
    {
      id: "booting",
      title: { en: "Booting", bn: "থোড় পর্যায়" },
      timing: { en: "Boot stage", bn: "থোড় পর্যায়" },
      guidance: {
        en: "The last quarter of the nitrogen is top-dressed at the boot stage. A second irrigation is given at 45 days after sowing.",
        bn: "থোড় পর্যায়ে বাকি এক-চতুর্থাংশ নাইট্রোজেন চাপান দেওয়া হয়। বোনার ৪৫ দিন পর দ্বিতীয় সেচ দেওয়া হয়।",
      },
      sourceIds: [rpcau.id],
      products: [floweringBooster, { slug: "boron-edta" }],
    },
    {
      id: "grain-filling",
      title: { en: "Flowering & grain filling", bn: "ফুল ও দানা পুষ্ট হওয়া" },
      timing: { en: "75 days after sowing", bn: "বোনার ৭৫ দিন পর" },
      guidance: {
        en: "A third irrigation is given at 75 days after sowing. In the Pusa trials, wheat sown on 25 November reached 50% flowering in about 86 days.",
        bn: "বোনার ৭৫ দিন পর তৃতীয় সেচ দেওয়া হয়। পুসার পরীক্ষায় ২৫ নভেম্বর বোনা গমে প্রায় ৮৬ দিনে ৫০% ফুল এসেছে।",
      },
      sourceIds: [rpcau.id],
      products: [],
    },
    {
      id: "maturity",
      title: { en: "Maturity", bn: "পরিপক্কতা" },
      timing: { en: "About 129 days (sown 25 November)", bn: "প্রায় ১২৯ দিন (২৫ নভেম্বর বোনা)" },
      guidance: {
        en: "In the Pusa trials, wheat sown on 25 November reached physiological maturity in about 129 days.",
        bn: "পুসার পরীক্ষায় ২৫ নভেম্বর বোনা গম প্রায় ১২৯ দিনে শারীরবৃত্তীয় পরিপক্কতায় পৌঁছেছে।",
      },
      sourceIds: [rpcau.id],
      products: [],
    },
  ],
};

export default wheat;
