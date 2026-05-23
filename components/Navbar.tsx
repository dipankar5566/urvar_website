"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LangContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/products", label: t.nav.products },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-shadow duration-200 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Urvar Logo" width={44} height={52} priority />
            <div className="leading-tight">
              <p className="font-bold text-lg text-urvar-dark tracking-wide font-[family-name:var(--font-raleway)]">URVAR</p>
              <p className="text-xs text-gray-500 hidden sm:block">Natural Pvt. Ltd.</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`font-medium transition-colors pb-0.5 ${
                    isActive
                      ? "text-urvar-green border-b-2 border-urvar-green"
                      : "text-gray-700 hover:text-urvar-green border-b-2 border-transparent"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            {/* Language toggle */}
            <div className="flex border border-urvar-green rounded-full overflow-hidden text-sm">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 transition-colors ${
                  lang === "en" ? "bg-urvar-green text-white" : "text-urvar-green hover:bg-urvar-light"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("bn")}
                className={`px-3 py-1 transition-colors ${
                  lang === "bn" ? "bg-urvar-green text-white" : "text-urvar-green hover:bg-urvar-light"
                }`}
              >
                বাং
              </button>
            </div>
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex border border-urvar-green rounded-full overflow-hidden text-xs">
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 ${lang === "en" ? "bg-urvar-green text-white" : "text-urvar-green"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("bn")}
                className={`px-2 py-1 ${lang === "bn" ? "bg-urvar-green text-white" : "text-urvar-green"}`}
              >
                বাং
              </button>
            </div>
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="text-urvar-dark">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center px-6 py-3 border-b border-gray-50 font-medium transition-colors ${
                  isActive
                    ? "text-urvar-green bg-urvar-light border-l-4 border-l-urvar-green"
                    : "text-gray-700 hover:text-urvar-green hover:bg-urvar-light"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
