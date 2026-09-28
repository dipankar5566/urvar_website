import type { CropContent } from "../crops";
import { floweringBooster } from "./shared";

// No West Bengal (BCKV) litchi source was found. This is the ICAR National
// Research Centre on Litchi's own field trial, but at Muzaffarpur, Bihar —
// flagged in the sources list rather than presented as a West Bengal result.
const nrcl = {
  id: "nrcl-litchi",
  citation:
    "Kumar, A., Gupta, A.K. and Yadav, K.K. (2016). Effect of chemicals through foliar spray on flowering and fruiting in litchi. International Journal of Applied Research 2(12): 845–848. ICAR-National Research Centre on Litchi, Muzaffarpur, Bihar (no West Bengal source found for litchi).",
  url: "https://www.allresearchjournal.com/archives/2016/vol2issue12/PartL/7-12-124-866.pdf",
};

const litchi: CropContent = {
  keyFact: {
    text: { en: "Pre-flowering sprays Oct–Jan (Bihar research)", bn: "ফুল আসার আগে অক্টোবর–জানুয়ারি স্প্রে (বিহারের গবেষণা)" },
    sourceId: nrcl.id,
  },
  sources: [nrcl],
  deficiencies: ["boron", "zinc"],
  stages: [
    {
      id: "pre-flowering-spray",
      title: { en: "Pre-flowering foliar spray", bn: "ফুল আসার আগে পাতায় স্প্রে" },
      timing: { en: "1st week of every month, October–January", bn: "প্রতি মাসের প্রথম সপ্তাহ, অক্টোবর–জানুয়ারি" },
      guidance: {
        en: "In ICAR-NRC Litchi trials on a 10–12-year-old 'Shahi' orchard (Muzaffarpur, Bihar), four monthly foliar sprays from October to January improved flowering and fruit retention.",
        bn: "বিহারের মুজাফফরপুরে আইসিএআর-এনআরসি লিচু কেন্দ্রের ১০–১২ বছর বয়সী 'শাহী' বাগানে করা পরীক্ষায় অক্টোবর থেকে জানুয়ারি, মাসে একবার করে চারবার পাতায় স্প্রে করলে ফুল আসা ও ফল ধরে থাকা ভালো হয়েছে।",
      },
      sourceIds: [nrcl.id],
      products: [floweringBooster, { slug: "boron-edta" }],
    },
    {
      id: "harvest",
      title: { en: "Fruit maturity & harvest", bn: "ফল পাকা ও তোলা" },
      timing: { en: "When skin turns pinkish-red and pulp TSS reaches 18°Brix", bn: "খোসা গোলাপি-লাল হলে ও শাঁসের মিষ্টতা ১৮° ব্রিক্সে পৌঁছালে" },
      guidance: {
        en: "In the Muzaffarpur trials, fruit maturity was judged by skin colour (bright pinkish-red with flattened tubercles) and pulp sweetness (TSS) reaching 18°Brix, rather than a fixed calendar date.",
        bn: "মুজাফফরপুরের পরীক্ষায় নির্দিষ্ট তারিখ নয়, বরং খোসার রং (উজ্জ্বল গোলাপি-লাল, দানাগুলো চ্যাপ্টা হয়ে যাওয়া) ও শাঁসের মিষ্টতা (টিএসএস) ১৮° ব্রিক্সে পৌঁছানো দেখে ফল পাকা বোঝা হয়েছে।",
      },
      sourceIds: [nrcl.id],
      products: [],
    },
  ],
};

export default litchi;
