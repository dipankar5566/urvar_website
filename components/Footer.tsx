"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { allCategories, categoryMeta } from "@/lib/categories";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#104C36] text-white border-t-[3px] border-urvar-green">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <Image src="/logo.svg" alt="Urvar Logo" width={26} height={26} className="brightness-0 invert" />
              <span className="font-[family-name:var(--font-campaign)] text-lg tracking-[2px]">URVAR</span>
            </div>
            <p className="text-white/50 text-[13px] leading-relaxed max-w-[200px]">{t.footer.tagline}</p>
            <p className="text-white/28 text-xs mt-1.5">Urvar Natural Pvt. Ltd.</p>
          </div>

          {/* Products / categories */}
          <div>
            <h3 className="text-[11px] font-bold text-white/30 tracking-[1.2px] uppercase mb-4">{t.nav.products}</h3>
            <ul className="space-y-2.5 text-[13px] text-white/58">
              {allCategories.map((cat) => (
                <li key={cat}>
                  <Link href={`/products/category/${categoryMeta[cat].slug}`} className="hover:text-white transition-colors">
                    {t.products[categoryMeta[cat].nameKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[11px] font-bold text-white/30 tracking-[1.2px] uppercase mb-4">{t.footer.quick_links}</h3>
            <ul className="space-y-2.5 text-[13px] text-white/58">
              <li><Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/crop-solutions" className="hover:text-white transition-colors">{t.nav.crops}</Link></li>
              <li><Link href="/certificates" className="hover:text-white transition-colors">{t.certificates.heading}</Link></li>
              <li><Link href="/dealers/become-a-distributor" className="hover:text-white transition-colors">{t.nav.dealer}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[11px] font-bold text-white/30 tracking-[1.2px] uppercase mb-4">{t.nav.resources}</h3>
            <ul className="space-y-2.5 text-[13px] text-white/58">
              <li><Link href="/blog" className="hover:text-white transition-colors">{t.nav.blog}</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors">{t.nav.faqs}</Link></li>
              <li><Link href="/resources/downloads" className="hover:text-white transition-colors">{t.nav.downloads}</Link></li>
              <li><Link href="/about/manufacturing-quality" className="hover:text-white transition-colors">{t.mfg.heading}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold text-white/30 tracking-[1.2px] uppercase mb-4">{t.footer.contact_info}</h3>
            <div className="flex flex-col gap-2 text-[13px] text-white/58">
              <a href="tel:+919035708943" className="hover:text-white transition-colors">
                +91 90357 08943
              </a>
              <a href="tel:+918335825566" className="hover:text-white transition-colors">
                +91 83358 25566
              </a>
              <span className="leading-relaxed mt-1 text-xs text-white/32">
                Sewli, Telenipara, Bandipara<br />
                North 24 Parganas, WB – 700121
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-5 text-center text-xs text-white/28 tracking-[0.3px]">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
