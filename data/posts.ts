// Seed content only. Live posts are managed from /admin/blog and stored on
// disk by lib/blog/store.ts; these three are written there the first time
// the store is empty, so a fresh checkout still has a populated blog.
import type { Post, PostContent } from "@/lib/blog/types";

interface SeedBlock {
  type: "p" | "h2";
  text: string;
}

interface SeedContent {
  title: string;
  excerpt: string;
  body: SeedBlock[];
}

interface SeedPost {
  slug: string;
  category: string;
  date: string;
  image: string;
  author: string;
  relatedProductSlugs: string[];
  en: SeedContent;
  bn?: SeedContent;
}

const posts: SeedPost[] = [
  {
    slug: "how-to-restore-soil-health",
    category: "Soil Health",
    date: "2026-02-10",
    image: "/images/soil.webp",
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
    bn: {
      title: "মাটির স্বাস্থ্য পুনরুদ্ধার কীভাবে করবেন: কৃষকের গাইড",
      excerpt:
        "বছরের পর বছর অতিরিক্ত রাসায়নিক ব্যবহারে মাটি দুর্বল হয়ে পড়ে এবং জৈব কার্বন কমে যায়। মৌসুম অনুযায়ী মাটিকে সুস্থ করে তোলার একটি বাস্তবসম্মত পথ এখানে দেওয়া হলো।",
      body: [
        {
          type: "p",
          text: "লাভজনক কৃষির আসল ভিত্তি হলো সুস্থ মাটি। জৈব কার্বন কমে গেলে ও অণুজীবের কার্যকলাপ দুর্বল হলে, বেশি মাত্রার সারেও প্রত্যাশিত ফল পাওয়া যায় না। সুখবর হলো — ধারাবাহিক ও জৈব-ভিত্তিক পদ্ধতিতে মাটি পুনর্গঠন করা সম্ভব।",
        },
        { type: "h2", text: "১. জৈব পদার্থ পুনর্গঠন করুন" },
        {
          type: "p",
          text: "প্রতি মৌসুমের শুরুতে সমৃদ্ধ ভার্মিকম্পোস্ট বা খামার সারের মতো সুপরিপক্ব জৈব পদার্থ যোগ করুন। এটি মাটির গঠন, জলধারণ ক্ষমতা এবং উপকারী অণুজীবের খাদ্য সরবরাহ উন্নত করে।",
        },
        { type: "h2", text: "২. মাটির জীববিজ্ঞানকে পুষ্ট করুন" },
        {
          type: "p",
          text: "হিউমিক অ্যাসিডের মতো বায়ো-স্টিমুল্যান্ট শিকড়ের বৃদ্ধি ও অণুজীবের কার্যকলাপ উদ্দীপিত করে, যা মাটিতে থাকা কিন্তু আটকে থাকা পুষ্টি উপাদান ফসলকে গ্রহণ করতে সাহায্য করে।",
        },
        { type: "h2", text: "৩. অদৃশ্য ঘাটতি সংশোধন করুন" },
        {
          type: "p",
          text: "অনেক জমিতে জিঙ্ক ও বোরনের মতো মাইক্রোনিউট্রিয়েন্টের ঘাটতি থাকে। চিলেটেড মাইক্রোনিউট্রিয়েন্ট দিয়ে এই ঘাটতি সংশোধন করলে ফলনের উপর থাকা একটি নিঃশব্দ সীমা দূর হয়।",
        },
        {
          type: "p",
          text: "মাটির স্বাস্থ্য পুনরুদ্ধার একটি বহু-মৌসুমের যাত্রা, একবারের স্প্রে নয়। জৈব পদার্থ, সক্রিয় জীববিজ্ঞান ও সুষম মাইক্রোনিউট্রিয়েন্টের মাধ্যমে আপনার মাটি — এবং ফলন — ধীরে ধীরে সুস্থ হয়ে উঠবে।",
        },
      ],
    },
  },
  {
    slug: "zinc-boron-deficiency-symptoms-cure",
    category: "Micronutrients",
    date: "2026-03-05",
    image: "/images/farm1.webp",
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
    bn: {
      title: "ফসলে জিঙ্ক ও বোরন ঘাটতি: লক্ষণ ও সমাধান",
      excerpt:
        "ভারতীয় জমিতে সবচেয়ে সাধারণ — এবং সবচেয়ে অবহেলিত — দুটি মাইক্রোনিউট্রিয়েন্ট ঘাটতি। এগুলো আগেভাগে চিনে দ্রুত সমাধান করার উপায় জানুন।",
      body: [
        {
          type: "p",
          text: "মাইক্রোনিউট্রিয়েন্টের ঘাটতি প্রায়ই অলক্ষিত থেকে যায়, কারণ এর লক্ষণ অন্য সমস্যার মতো দেখায়। তবু জিঙ্ক বা বোরনের একটু ঘাটতিও নিঃশব্দে ফলন উল্লেখযোগ্যভাবে কমিয়ে দিতে পারে।",
        },
        { type: "h2", text: "জিঙ্ক ঘাটতি চেনার উপায়" },
        {
          type: "p",
          text: "জিঙ্ক ঘাটতিতে পাতার শিরার মাঝে হলুদভাব, বৃদ্ধি থমকে যাওয়া এবং পাতা ছোট হয়ে যায় — বিশেষত ধান ও গমে। চিলেটেড জিঙ্ক EDTA দিয়ে সংশোধন দ্রুত এবং উদ্ভিদ-গ্রহণযোগ্য।",
        },
        { type: "h2", text: "বোরন ঘাটতি চেনার উপায়" },
        {
          type: "p",
          text: "বোরনের ঘাটতি ফুল আসা ও ফল ধরাকে প্রভাবিত করে — কাণ্ড ফাঁপা হয়ে যাওয়া, দুর্বল পরাগসংযোগ এবং বিকৃত ফল এর লক্ষণ, যা সরিষা, সবজি ও ফল ফসলে সাধারণ। বোরন EDTA নির্ভুলভাবে এটি সংশোধন করে।",
        },
        { type: "h2", text: "সমাধান" },
        {
          type: "p",
          text: "অনুমানের বদলে সুপারিশকৃত ধাপে চিলেটেড মাইক্রোনিউট্রিয়েন্ট ব্যবহার করুন। উদ্ভিদ-গ্রহণযোগ্য হওয়ায় সংশোধন দ্রুত হয় এবং মাত্রাও কম লাগে। ফসল-ভিত্তিক মাত্রার জন্য প্রতিটি পণ্যের পাতা দেখুন।",
        },
      ],
    },
  },
  {
    slug: "what-is-prom",
    category: "Organic Farming",
    date: "2026-04-01",
    image: "/images/farm2.webp",
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
    bn: {
      title: "PROM কী এবং কেন কৃষকরা এতে ঝুঁকছেন",
      excerpt:
        "ফসফেট সমৃদ্ধ জৈব সার (PROM) ফসফরাস ও জৈব পদার্থ একসাথে সরবরাহ করে। এটি কেন মাটির স্বাস্থ্য কর্মসূচির একটি মূল উপাদান হয়ে উঠছে জানুন।",
      body: [
        {
          type: "p",
          text: "PROM — ফসফেট সমৃদ্ধ জৈব সার — ফসফরাসকে জৈব পদার্থের সাথে মিশিয়ে দেয়, যা ফসলকে ফসফরাসের উৎস দেওয়ার পাশাপাশি মাটিকেও পুষ্ট করে। জৈব ও সুষম পুষ্টির দিকে এগোতে চাওয়া কৃষকদের জন্য এটি একটি সহজ প্রথম পদক্ষেপ।",
        },
        { type: "h2", text: "ফসফরাসের সাথে জৈব পদার্থ কেন গুরুত্বপূর্ণ" },
        {
          type: "p",
          text: "ফসফরাস শিকড়ের বিকাশ ও ফুল আসায় মূল ভূমিকা রাখে, কিন্তু অনেক মাটিতে এটি আটকে গিয়ে অগ্রহণযোগ্য হয়ে পড়ে। জৈব পদার্থের সাথে এটি সরবরাহ করলে গ্রহণযোগ্যতা বাড়ে এবং দীর্ঘমেয়াদি উর্বরতা সমর্থিত হয়।",
        },
        { type: "h2", text: "আপনার কর্মসূচিতে PROM কোথায় বসে" },
        {
          type: "p",
          text: "জমি প্রস্তুতির সময় বেসাল মাত্রার অংশ হিসেবে PROM প্রয়োগ করুন। হিউমিক-সমৃদ্ধ PROM ভ্যারিয়েন্ট সবজি ও ফলের মতো চাহিদাসম্পন্ন ফসলের জন্য অতিরিক্ত শিকড় ও ফুল আসার সহায়তা দেয়।",
        },
        {
          type: "p",
          text: "ধারাবাহিকভাবে ব্যবহার করলে PROM সরাসরি রাসায়নিক ফসফেট সারের উপর নির্ভরতা কমাতে সাহায্য করে, পাশাপাশি সুস্থ ও অধিক উৎপাদনক্ষম মাটি গড়ে তোলে।",
        },
      ],
    },
  },
];

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function toContent(c: SeedContent): PostContent {
  return {
    title: c.title,
    excerpt: c.excerpt,
    html: c.body.map((b) => `<${b.type}>${escapeHtml(b.text)}</${b.type}>`).join(""),
  };
}

export function seedPosts(): Post[] {
  return posts.map(({ en, bn, ...rest }) => ({
    ...rest,
    status: "published",
    updatedAt: new Date(rest.date).toISOString(),
    en: toContent(en),
    ...(bn ? { bn: toContent(bn) } : {}),
  }));
}
