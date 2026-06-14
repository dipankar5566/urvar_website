"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { allCategories, categoryMeta } from "@/lib/categories";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-urvar-dark text-white border-t-4 border-urvar-green">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo.svg" alt="Urvar Logo" width={36} height={44} className="brightness-0 invert" />
              <span className="font-bold text-xl tracking-wide font-[family-name:var(--font-raleway)]">URVAR</span>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">{t.footer.tagline}</p>
            <p className="text-gray-400 text-xs mt-3">Urvar Natural Pvt. Ltd.</p>
          </div>

          {/* Products / categories */}
          <div>
            <h3 className="font-semibold text-green-400 mb-4">{t.nav.products}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
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
            <h3 className="font-semibold text-green-400 mb-4">{t.footer.quick_links}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
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
            <h3 className="font-semibold text-green-400 mb-4">{t.nav.resources}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/blog" className="hover:text-white transition-colors">{t.nav.blog}</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors">{t.nav.faqs}</Link></li>
              <li><Link href="/resources/downloads" className="hover:text-white transition-colors">{t.nav.downloads}</Link></li>
              <li><Link href="/about/manufacturing-quality" className="hover:text-white transition-colors">{t.mfg.heading}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-green-400 mb-4">{t.footer.contact_info}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="tel:+919035708943" className="hover:text-white transition-colors">
                  +91 90357 08943
                </a>
              </li>
              <li>
                <a href="tel:+918335825566" className="hover:text-white transition-colors">
                  +91 83358 25566
                </a>
              </li>
              <li className="text-gray-400 leading-relaxed pt-1">
                Sewli, Telenipara, Bandipara<br />
                North 24 Parganas, WB – 700121
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-900 mt-10 pt-6 text-center text-xs text-gray-400">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
