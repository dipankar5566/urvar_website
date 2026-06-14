export type FaqGroup = "products" | "usage" | "dealership" | "delivery";

export interface Faq {
  id: string;
  group: FaqGroup;
  en: { q: string; a: string };
  bn: { q: string; a: string };
}

const faqs: Faq[] = [
  {
    id: "organic-suitable",
    group: "products",
    en: {
      q: "Are Urvar products suitable for organic farming?",
      a: "Yes. Our organic manures and bio-stimulants are made for sustainable, organic-friendly cultivation that restores soil health over time. Each product lists its nutrient profile so you know exactly what you are applying.",
    },
    bn: {
      q: "উর্বর পণ্য কি জৈব চাষের জন্য উপযুক্ত?",
      a: "হ্যাঁ। আমাদের জৈব সার ও বায়ো-স্টিমুল্যান্ট টেকসই, জৈব-বান্ধব চাষের জন্য তৈরি যা সময়ের সাথে মাটির স্বাস্থ্য পুনরুদ্ধার করে। প্রতিটি পণ্যে পুষ্টি প্রোফাইল দেওয়া থাকে যাতে আপনি জানেন কী প্রয়োগ করছেন।",
    },
  },
  {
    id: "which-crops",
    group: "products",
    en: {
      q: "Which crops can I use Urvar products on?",
      a: "Our range supports paddy, wheat, vegetables, potato, mustard, fruits, flowers and more. Visit our Crop Solutions section for stage-by-stage programs, or check each product page for recommended crops and dosage.",
    },
    bn: {
      q: "কোন ফসলে উর্বর পণ্য ব্যবহার করা যায়?",
      a: "আমাদের পরিসর ধান, গম, সবজি, আলু, সরিষা, ফল, ফুল সহ আরও অনেক ফসলে সহায়ক। ধাপে ধাপে প্রোগ্রামের জন্য আমাদের ফসল সমাধান বিভাগ দেখুন, অথবা প্রতিটি পণ্যের পাতায় প্রস্তাবিত ফসল ও মাত্রা দেখুন।",
    },
  },
  {
    id: "chemical-mix",
    group: "usage",
    en: {
      q: "Can Urvar products be used alongside chemical fertilizers?",
      a: "Yes. Our organic manures and bio-stimulants complement existing nutrition programs and can help you gradually reduce dependence on chemical inputs while improving soil health.",
    },
    bn: {
      q: "উর্বর পণ্য কি রাসায়নিক সারের সাথে ব্যবহার করা যায়?",
      a: "হ্যাঁ। আমাদের জৈব সার ও বায়ো-স্টিমুল্যান্ট বিদ্যমান পুষ্টি প্রোগ্রামের পরিপূরক এবং মাটির স্বাস্থ্য উন্নত করার পাশাপাশি ধীরে ধীরে রাসায়নিক উপকরণের উপর নির্ভরতা কমাতে সাহায্য করে।",
    },
  },
  {
    id: "dosage-help",
    group: "usage",
    en: {
      q: "How do I know the right dosage for my field?",
      a: "Every product page includes a dosage table by crop. For a tailored recommendation, use our crop solutions, chat with Kisan Saathi, or contact our team on WhatsApp with your crop and area.",
    },
    bn: {
      q: "আমার জমির জন্য সঠিক মাত্রা কীভাবে জানব?",
      a: "প্রতিটি পণ্যের পাতায় ফসল অনুযায়ী মাত্রার টেবিল আছে। নির্দিষ্ট পরামর্শের জন্য আমাদের ফসল সমাধান ব্যবহার করুন, কিষান সাথীর সাথে চ্যাট করুন, অথবা আপনার ফসল ও জমির পরিমাণ নিয়ে হোয়াটসঅ্যাপে আমাদের টিমের সাথে যোগাযোগ করুন।",
    },
  },
  {
    id: "become-dealer",
    group: "dealership",
    en: {
      q: "How do I become a dealer or distributor?",
      a: "Visit our Become a Distributor page and submit the short application. Our channel team will review and contact you within 24 hours to discuss margins, territory and support.",
    },
    bn: {
      q: "কীভাবে ডিলার বা ডিস্ট্রিবিউটর হব?",
      a: "আমাদের 'ডিস্ট্রিবিউটর হোন' পাতায় গিয়ে সংক্ষিপ্ত আবেদন জমা দিন। আমাদের চ্যানেল টিম পর্যালোচনা করে ২৪ ঘণ্টার মধ্যে মার্জিন, অঞ্চল ও সহায়তা নিয়ে আলোচনার জন্য যোগাযোগ করবে।",
    },
  },
  {
    id: "dealer-support",
    group: "dealership",
    en: {
      q: "What support do you provide to dealers?",
      a: "Dealers receive competitive margins, marketing material, product training, on-ground agronomy support and protected territories to help build their market.",
    },
    bn: {
      q: "ডিলারদের আপনারা কী সহায়তা দেন?",
      a: "ডিলাররা প্রতিযোগিতামূলক মার্জিন, মার্কেটিং সামগ্রী, পণ্য প্রশিক্ষণ, মাঠ পর্যায়ে কৃষি সহায়তা এবং বাজার গড়তে সুরক্ষিত অঞ্চল পান।",
    },
  },
  {
    id: "areas-served",
    group: "delivery",
    en: {
      q: "Which areas do you currently serve?",
      a: "We are active across West Bengal and expanding into Maharashtra, Karnataka and Uttar Pradesh, with a pan-India vision. Contact us to check availability in your area.",
    },
    bn: {
      q: "আপনারা বর্তমানে কোন এলাকায় সেবা দেন?",
      a: "আমরা পশ্চিমবঙ্গ জুড়ে সক্রিয় এবং মহারাষ্ট্র, কর্ণাটক ও উত্তরপ্রদেশে সম্প্রসারিত হচ্ছি, সারা ভারতের লক্ষ্য নিয়ে। আপনার এলাকায় প্রাপ্যতা জানতে যোগাযোগ করুন।",
    },
  },
  {
    id: "bulk-orders",
    group: "delivery",
    en: {
      q: "Do you take bulk orders for FPOs and institutions?",
      a: "Yes. We supply FPOs, cooperatives, plantations and institutions. Contact us with your requirement for pricing and documentation.",
    },
    bn: {
      q: "FPO ও প্রতিষ্ঠানের জন্য কি বাল্ক অর্ডার নেন?",
      a: "হ্যাঁ। আমরা FPO, সমবায়, বাগান ও প্রতিষ্ঠানকে সরবরাহ করি। মূল্য ও নথির জন্য আপনার প্রয়োজন নিয়ে যোগাযোগ করুন।",
    },
  },
];

export default faqs;

export const faqGroupOrder: FaqGroup[] = ["products", "usage", "dealership", "delivery"];
