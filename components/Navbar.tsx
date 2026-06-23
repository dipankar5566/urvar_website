"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LangContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/products", label: t.nav.products },
    { href: "/crop-solutions", label: t.nav.crops },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-canvas border-b border-hairline">
      {/* Utility bar */}
      <div className="hidden sm:flex items-center justify-between h-9 px-4 sm:px-6 lg:px-8 bg-soft-cloud">
        <div className="flex items-center gap-4">
          <a href="tel:+919035708943" className="text-xs text-charcoal hover:text-ink">
            +91 90357 08943
          </a>
          <span className="w-px h-2.5 bg-hairline" />
          <span className="text-xs text-mute">Sewli, West Bengal</span>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setLang("en")}
            className={`px-2 text-xs ${lang === "en" ? "font-bold text-ink" : "font-normal text-mute"}`}
          >
            EN
          </button>
          <span className="text-hairline text-xs">|</span>
          <button
            onClick={() => setLang("bn")}
            className={`px-2 text-xs ${lang === "bn" ? "font-bold text-ink" : "font-normal text-mute"}`}
          >
            বাং
          </button>
        </div>
      </div>

      {/* Primary nav */}
      <nav className="flex items-center h-16 px-4 sm:px-6 lg:px-8 gap-4">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image src="/logo.svg" alt="Urvar Logo" width={30} height={30} priority />
          <span className="font-[family-name:var(--font-campaign)] text-xl tracking-[2px] text-urvar-dark">
            URVAR
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-stretch flex-1 justify-center h-16">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`flex items-center px-3 text-sm font-semibold whitespace-nowrap border-b-2 -mb-px ${
                  isActive
                    ? "text-ink border-urvar-green"
                    : "text-mute border-transparent hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/dealers/become-a-distributor"
          className="hidden md:inline-flex items-center bg-urvar-green hover:bg-urvar-dark text-white font-bold text-[13px] px-5 py-2.5 rounded-full transition-colors flex-shrink-0"
        >
          {t.nav.dealer}
        </Link>

        {/* Mobile: lang + hamburger */}
        <div className="flex sm:hidden items-center ml-auto">
          <button
            onClick={() => setLang("en")}
            className={`px-2 text-xs ${lang === "en" ? "font-bold text-ink" : "font-normal text-mute"}`}
          >
            EN
          </button>
          <span className="text-hairline text-xs">|</span>
          <button
            onClick={() => setLang("bn")}
            className={`px-2 text-xs ${lang === "bn" ? "font-bold text-ink" : "font-normal text-mute"}`}
          >
            বাং
          </button>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden ml-2 sm:ml-0 p-2 text-ink flex-shrink-0"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-hairline">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-4 sm:px-6 py-3 border-b border-soft-cloud font-semibold text-sm ${
                  isActive ? "text-ink" : "text-mute"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <div className="px-4 sm:px-6 py-4">
            <Link
              href="/dealers/become-a-distributor"
              onClick={() => setOpen(false)}
              className="block text-center bg-urvar-green hover:bg-urvar-dark text-white font-bold px-5 py-3 rounded-full transition-colors"
            >
              {t.nav.dealer}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
