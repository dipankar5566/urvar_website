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

  const certs = [
    { title: t.certificates.msme_title, body: t.certificates.msme_body, num: t.certificates.msme_no, hasNum: true },
    { title: t.certificates.startup_title, body: t.certificates.startup_body, num: t.certificates.startup_no, hasNum: true },
    { title: t.certificates.gst_title, body: t.certificates.gst_body, num: "", hasNum: false },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[#0a2018]">
          <Image src="/images/farm1.jpg" alt="Urvar farm" fill sizes="100vw" className="object-cover opacity-35" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08140d]/95 via-[#08140d]/55 to-[#08140d]/70" />
        </div>
        <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-[11px] font-medium text-[#4ade80] tracking-[2px] uppercase mb-3.5">Our Story</p>
          <h1 className="font-[family-name:var(--font-campaign)] uppercase text-white leading-[1.0] mb-3 text-[44px] sm:text-[68px]">
            {t.about.heading}
          </h1>
          <p className="text-white/62 text-base max-w-lg leading-relaxed">{t.about.sub}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-canvas py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-t-2 border-urvar-green pt-5.5">
            <h2 className="font-bold text-ink text-lg uppercase tracking-[0.02em] mb-4">{t.about.mission_heading}</h2>
            <p className="text-mute leading-loose">{t.about.mission_body}</p>
          </div>
          <div className="border-t-2 border-urvar-earth pt-5.5">
            <h2 className="font-bold text-ink text-lg uppercase tracking-[0.02em] mb-4">{t.about.vision_heading}</h2>
            <p className="text-mute leading-loose">{t.about.vision_body}</p>
          </div>
        </div>
      </section>

      {/* Company Statement */}
      <section className="bg-soft-cloud py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-hairline">
        <div className="max-w-3xl mx-auto">
          <p className="text-urvar-green font-semibold text-[11px] uppercase tracking-[2px] mb-3">
            {t.about.company_statement}
          </p>
          <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[28px] sm:text-[34px] leading-[1.1] mb-4">
            Urvar Natural Private Limited
          </h2>
          <p className="text-mute leading-relaxed mb-5">
            Urvar Natural Private Limited is a pioneering agri-input company dedicated to the
            advancement of sustainable and organic farming. Founded in 2023 and headquartered in
            West Bengal, we specialize in high-quality organic fertilizers and bio-stimulants
            designed to restore soil health and maximize crop productivity.
          </p>
          <p className="text-mute leading-relaxed">
            At Urvar, we believe healthy soil is the foundation of profitable farming — and our
            mission is to empower farmers with reliable, effective, and eco-conscious products
            that deliver measurable results.
          </p>
        </div>
      </section>

      {/* Director Quote */}
      <section className="bg-urvar-earth-light py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#d5ccbe]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
          <div className="relative w-full lg:w-[440px] flex-shrink-0 h-80 bg-[#d5ccbe] overflow-hidden">
            <Image
              src="/images/director.webp"
              alt="Director"
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-contain object-bottom"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-[family-name:var(--font-campaign)] text-[100px] text-[#d5ccbe] leading-[0.75] mb-3">
              &quot;
            </div>
            <p className="text-[17px] sm:text-[19px] font-medium text-urvar-dark leading-relaxed mb-6">
              {t.about.director_quote}
            </p>
            <div className="w-9 h-0.5 bg-urvar-green mb-3.5" />
            <p className="text-sm font-bold text-urvar-earth tracking-[0.3px]">{t.about.director_title}</p>
            <p className="text-[13px] text-mute mt-0.5">Urvar Natural Pvt. Ltd.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-canvas py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[26px] sm:text-[32px] text-center mb-10">
            {t.about.values_heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: "Organic", desc: "All products made from natural, organic sources — no harmful chemicals." },
              { title: "Eco-Friendly", desc: "Designed to protect and restore the natural ecosystem around farms." },
              { title: "Sustainable", desc: "Built for long-term soil health and multi-generational farming prosperity." },
            ].map((v) => (
              <div key={v.title} className="text-center p-7 bg-soft-cloud border border-hairline">
                <h3 className="font-bold text-ink text-base uppercase tracking-[0.02em] mb-2">✓ {v.title}</h3>
                <p className="text-mute text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Photos */}
      <section className="py-3 px-4 sm:px-6 lg:px-8 bg-soft-cloud">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-2">
          {["/images/farm1.jpg", "/images/farm2.jpg", "/images/farm3.jpg"].map((src, i) => (
            <div key={i} className="relative h-52">
              <Image src={src} alt={`Urvar farm ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Watch Our Story */}
      <section className="bg-canvas py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[26px] sm:text-[32px] text-center mb-3">
            {t.about.videos_heading}
          </h2>
          <p className="text-mute text-center max-w-xl mx-auto mb-10">{t.about.videos_sub}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videoContent.map((video, i) => (
              <div key={i} className="bg-soft-cloud border border-hairline p-5">
                <VideoEmbed videoId={video.id} title={video.title} />
                <h3 className="font-bold text-ink mt-4">{video.title}</h3>
                <p className="text-mute text-sm mt-1 leading-relaxed whitespace-pre-line">{video.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Urvar */}
      <section className="bg-soft-cloud py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-hairline">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[26px] sm:text-[32px] text-center mb-3">
            {t.about.explore_heading}
          </h2>
          <p className="text-mute text-center max-w-xl mx-auto mb-10">{t.about.explore_sub}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Link
              href="/about/manufacturing-quality"
              className="group bg-canvas border border-hairline p-8 hover:border-urvar-green transition-colors"
            >
              <h3 className="font-bold text-ink text-xl">{t.mfg.heading}</h3>
              <p className="text-mute text-sm mt-2 leading-relaxed">{t.mfg.sub}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-urvar-green font-bold text-sm group-hover:gap-2.5 transition-all">
                {t.products.learn_more} →
              </span>
            </Link>
            <Link
              href="/certificates"
              className="group bg-canvas border border-hairline p-8 hover:border-urvar-green transition-colors"
            >
              <h3 className="font-bold text-ink text-xl">{t.certificates.heading}</h3>
              <p className="text-mute text-sm mt-2 leading-relaxed">{t.certificates.sub}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-urvar-green font-bold text-sm group-hover:gap-2.5 transition-all">
                {t.products.learn_more} →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-ink py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-13 border-b border-white/8 pb-7">
            <div>
              <p className="text-[11px] font-medium text-[#4ade80] tracking-[2px] uppercase mb-3">Trust &amp; Compliance</p>
              <h2 className="font-bold text-white text-[26px] sm:text-[32px] uppercase tracking-[-0.01em]">
                {t.about.certifications}
              </h2>
            </div>
            <p className="text-white/38 text-sm max-w-xs leading-relaxed">
              Government-recognised certifications backing every product we make.
            </p>
          </div>
          <div className="flex flex-col">
            {certs.map((cert) => (
              <div key={cert.title} className="flex items-start gap-5 py-7 border-b border-white/7">
                <div className="w-11 h-11 rounded-full bg-urvar-green/15 border border-urvar-green/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" fill="none" stroke="#4ade80" strokeWidth={2.5} viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                    <h3 className="text-white text-[13px] font-bold uppercase tracking-[1.5px]">{cert.title}</h3>
                    {cert.hasNum && (
                      <span className="text-[#4ade80] text-[11px] font-bold bg-urvar-green/10 border border-urvar-green/25 px-3 py-1 self-start whitespace-nowrap">
                        {cert.num}
                      </span>
                    )}
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed">{cert.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#104C36] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="font-[family-name:var(--font-campaign)] uppercase text-white text-[42px] sm:text-[64px] leading-[1.0] mb-3.5">
            Ready to Grow with Urvar?
          </h2>
          <p className="text-white/62 text-[15px] leading-relaxed mb-7">
            Explore our products or become a distributor in your district.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/products" className="bg-white text-[#104C36] font-bold text-sm px-7 py-3 rounded-full">
              {t.nav.products}
            </Link>
            <Link
              href="/dealers/become-a-distributor"
              className="bg-transparent text-white font-semibold text-sm px-6 py-3 rounded-full border-[1.5px] border-white/38"
            >
              {t.nav.dealer}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
