export interface PostBlock {
  type: "p" | "h2";
  text: string;
}

export interface PostContent {
  title: string;
  excerpt: string;
  body: PostBlock[];
}

export interface Post {
  slug: string;
  category: string;
  /** ISO date */
  date: string;
  image: string;
  author: string;
  relatedProductSlugs: string[];
  en: PostContent;
  /** Optional Bengali translation; falls back to English when absent. */
  bn?: PostContent;
}

const posts: Post[] = [
  {
    slug: "how-to-restore-soil-health",
    category: "Soil Health",
    date: "2026-02-10",
    image: "/images/soil.jpg",
    author: "Urvar Agronomy Team",
    relatedProductSlugs: ["vermicompost", "humic-acid-liquid"],
    en: {
      title: "How to Restore Soil Health: A Farmer's Guide",
      excerpt:
        "Years of intensive chemical use leave soil tired and low on organic carbon. Here is a practical, season-by-season way to bring it back to life.",
      body: [
        {
          type: "p",
          text: "Healthy soil is the real foundation of profitable farming. When organic carbon falls and microbial life weakens, even heavy fertilizer doses give diminishing returns. The good news: soil can be rebuilt with a consistent, organic-first approach.",
        },
        { type: "h2", text: "1. Rebuild organic matter" },
        {
          type: "p",
          text: "Start every season by adding well-decomposed organic matter such as enriched vermicompost or farmyard manure. This improves structure, water-holding capacity and the food supply for beneficial microbes.",
        },
        { type: "h2", text: "2. Feed soil biology" },
        {
          type: "p",
          text: "Bio-stimulants like humic acid stimulate root growth and microbial activity, helping your crop access nutrients that are already in the soil but locked up.",
        },
        { type: "h2", text: "3. Correct hidden deficiencies" },
        {
          type: "p",
          text: "Many fields are short on micronutrients like zinc and boron. Correcting these with chelated micronutrients removes a silent ceiling on yield.",
        },
        {
          type: "p",
          text: "Restoring soil health is a multi-season journey, not a single spray. With organic matter, active biology and balanced micronutrients, your soil — and your yields — recover steadily.",
        },
      ],
    },
  },
  {
    slug: "zinc-boron-deficiency-symptoms-cure",
    category: "Micronutrients",
    date: "2026-03-05",
    image: "/images/farm1.jpg",
    author: "Urvar Agronomy Team",
    relatedProductSlugs: ["zinc-edta", "boron-edta"],
    en: {
      title: "Zinc & Boron Deficiency in Crops: Symptoms and Cure",
      excerpt:
        "Two of the most common — and most overlooked — micronutrient deficiencies in Indian fields. Learn to spot them early and fix them fast.",
      body: [
        {
          type: "p",
          text: "Micronutrient deficiencies often go unnoticed because the symptoms look like other problems. Yet even a mild shortage of zinc or boron can quietly cut yields by a significant margin.",
        },
        { type: "h2", text: "Spotting zinc deficiency" },
        {
          type: "p",
          text: "Zinc deficiency shows up as yellowing between leaf veins, stunted growth and small leaves, especially in paddy and wheat. A chelated Zinc EDTA correction is fast and plant-available.",
        },
        { type: "h2", text: "Spotting boron deficiency" },
        {
          type: "p",
          text: "Boron deficiency affects flowering and fruit set — hollow stems, poor pollination and deformed fruits are tell-tale signs, common in mustard, vegetables and fruit crops. Boron EDTA corrects it precisely.",
        },
        { type: "h2", text: "The fix" },
        {
          type: "p",
          text: "Use chelated micronutrients at the recommended stage rather than guessing. Because they are plant-available, correction is quick and dosage is low. See each product page for crop-wise dosage.",
        },
      ],
    },
  },
  {
    slug: "what-is-prom",
    category: "Organic Farming",
    date: "2026-04-01",
    image: "/images/farm2.jpg",
    author: "Urvar Agronomy Team",
    relatedProductSlugs: ["prom", "prom-humic-enriched"],
    en: {
      title: "What is PROM and Why Farmers Are Switching to It",
      excerpt:
        "Phosphate Rich Organic Manure delivers phosphorus and organic matter together. Here's why it is becoming a staple in soil-health programs.",
      body: [
        {
          type: "p",
          text: "PROM — Phosphate Rich Organic Manure — combines phosphorus with organic matter, giving crops a phosphorus source while also feeding the soil. For farmers moving toward organic and balanced nutrition, it is an easy first step.",
        },
        { type: "h2", text: "Why phosphorus plus organic matter matters" },
        {
          type: "p",
          text: "Phosphorus drives root development and flowering, but in many soils it gets fixed and unavailable. Delivering it alongside organic matter improves availability and supports long-term fertility.",
        },
        { type: "h2", text: "Where PROM fits in your program" },
        {
          type: "p",
          text: "Apply PROM during land preparation as part of the basal dose. Humic-enriched PROM variants add extra root and flowering support for demanding crops like vegetables and fruit.",
        },
        {
          type: "p",
          text: "Used consistently, PROM helps reduce reliance on straight chemical phosphatic fertilizers while building healthier, more productive soil.",
        },
      ],
    },
  },
];

export default posts;

export function postBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
