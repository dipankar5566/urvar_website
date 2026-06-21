"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import VideoEmbed from "@/components/VideoEmbed";
import videos from "@/data/videos";

export default function AboutPage() {
  const { t } = useLang();

  const videoContent = [
    { ...videos[0], title: t.about.video1_title, desc: t.about.video1_desc },
    { ...videos[1], title: t.about.video2_title, desc: t.about.video2_desc },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-urvar-dark py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t.about.heading}</h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto">
            Founded 2023 · West Bengal · MSME & Startup India Certified
          </p>
        </div>
      </section>

      {/* Company Statement */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Director photo placeholder */}
            <div className="bg-urvar-light rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-xl overflow-hidden mb-4 border-4 border-urvar-green shadow-lg">
                <Image
                  src="/images/director.webp"
                  alt="Shri. Ratanlal Chowdhury"
                  width={128}
                  height={128}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h3 className="font-bold text-urvar-dark text-xl">Shri. Ratanlal Chowdhury</h3>
              <p className="text-urvar-green font-medium text-sm mt-1">{t.about.director_title}</p>
              <blockquote className="mt-4 text-gray-600 italic text-sm leading-relaxed border-l-4 border-urvar-green pl-4 text-left">
                "{t.about.director_quote}"
              </blockquote>
            </div>

            <div>
              <span className="text-urvar-green font-semibold text-sm uppercase tracking-wide">
                {t.about.company_statement}
              </span>
              <h2 className="text-3xl font-bold text-urvar-dark mt-2 mb-2">
                Urvar Natural Private Limited
              </h2>
              <div className="w-12 h-1 bg-urvar-green rounded-full mb-4" />
              <p className="text-gray-600 leading-relaxed mb-6">
                Urvar Natural Private Limited is a pioneering agri-input company dedicated to the
                advancement of sustainable and organic farming. Founded in 2023 and headquartered in
                West Bengal, we specialize in high-quality organic fertilizers and bio-stimulants
                designed to restore soil health and maximize crop productivity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Urvar, we believe healthy soil is the foundation of profitable farming — and our
                mission is to empower farmers with reliable, effective, and eco-conscious products
                that deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-urvar-green rounded-xl flex items-center justify-center mb-4 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-urvar-dark mb-3">{t.about.mission_heading}</h3>
              <p className="text-gray-600 leading-relaxed">{t.about.mission_body}</p>
            </div>
            <div className="bg-urvar-dark rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-urvar-green rounded-xl flex items-center justify-center mb-4 text-2xl">
                🌍
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.about.vision_heading}</h3>
              <p className="text-green-200 leading-relaxed">{t.about.vision_body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-urvar-dark text-center mb-3">{t.about.values_heading}</h2>
          <div className="w-12 h-1 bg-urvar-green rounded-full mx-auto mt-3 mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { emoji: "🌱", title: "Organic", desc: "All products made from natural, organic sources — no harmful chemicals." },
              { emoji: "🌿", title: "Eco-Friendly", desc: "Designed to protect and restore the natural ecosystem around farms." },
              { emoji: "♻️", title: "Sustainable", desc: "Built for long-term soil health and multi-generational farming prosperity." },
            ].map((v) => (
              <div key={v.title} className="text-center p-6 bg-urvar-light rounded-2xl">
                <span className="text-4xl">{v.emoji}</span>
                <h3 className="font-bold text-urvar-dark text-lg mt-3 mb-2">✓ {v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Photos */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["/images/farm1.jpg", "/images/farm2.jpg", "/images/farm3.jpg"].map((src, i) => (
              <div key={i} className="relative h-52 rounded-xl overflow-hidden">
                <Image src={src} alt={`Urvar farm ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Our Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-urvar-dark text-center mb-3">{t.about.videos_heading}</h2>
          <div className="w-12 h-1 bg-urvar-green rounded-full mx-auto mt-3 mb-4" />
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">{t.about.videos_sub}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videoContent.map((video, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <VideoEmbed videoId={video.id} title={video.title} />
                <h3 className="font-bold text-urvar-dark mt-4">{video.title}</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed whitespace-pre-line">{video.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Urvar */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-urvar-dark text-center mb-3">{t.about.explore_heading}</h2>
          <div className="w-12 h-1 bg-urvar-green rounded-full mx-auto mt-3 mb-4" />
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">{t.about.explore_sub}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/about/manufacturing-quality"
              className="group bg-urvar-light rounded-2xl p-8 hover:shadow-e2 hover:-translate-y-1 transition-all border border-transparent hover:border-urvar-green/30"
            >
              <h3 className="font-bold text-urvar-dark text-xl">{t.mfg.heading}</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{t.mfg.sub}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-urvar-green font-semibold text-sm group-hover:gap-3 transition-all">
                {t.products.learn_more} →
              </span>
            </Link>
            <Link
              href="/certificates"
              className="group bg-urvar-light rounded-2xl p-8 hover:shadow-e2 hover:-translate-y-1 transition-all border border-transparent hover:border-urvar-green/30"
            >
              <h3 className="font-bold text-urvar-dark text-xl">{t.certificates.heading}</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{t.certificates.sub}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-urvar-green font-semibold text-sm group-hover:gap-3 transition-all">
                {t.products.learn_more} →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-urvar-dark text-center mb-3">{t.about.certifications}</h2>
          <div className="w-12 h-1 bg-urvar-green rounded-full mx-auto mt-3 mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-urvar-green rounded-2xl p-6 flex gap-4 items-start">
              <span className="text-3xl">🏛️</span>
              <div>
                <h3 className="font-bold text-urvar-dark mb-1">MSME Registration</h3>
                <p className="text-gray-600 text-sm">Government of India — Ministry of MSME</p>
                <p className="text-urvar-green font-mono text-sm mt-1">UDYAM-WB-14-0115346</p>
              </div>
            </div>
            <div className="border-2 border-urvar-green rounded-2xl p-6 flex gap-4 items-start">
              <span className="text-3xl">🚀</span>
              <div>
                <h3 className="font-bold text-urvar-dark mb-1">Startup India Recognition</h3>
                <p className="text-gray-600 text-sm">Department for Promotion of Industry & Internal Trade</p>
                <p className="text-urvar-green font-mono text-sm mt-1">DIPP162310 · Valid till 01-08-2033</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
