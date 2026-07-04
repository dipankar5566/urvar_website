"use client";

import { createContext, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import en from "@/messages/en";
import bn from "@/messages/bn";
import type { Messages } from "@/messages/en";

type Lang = "en" | "bn";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Messages;
  /** Prefix internal hrefs with /bn when rendering the Bengali tree. */
  localize: (href: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
  localize: (href) => href,
});

// The URL is the source of truth for language: English lives at /, Bengali
// at /bn/*, so both versions exist as crawlable static HTML. Deriving from
// the pathname (rather than a prop) means Navbar/Footer in the root layout
// localize too, and each /bn page prerenders with Bengali text baked in.
export function LangProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  const lang: Lang = /^\/bn(\/|$)/.test(pathname) ? "bn" : "en";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(l: Lang) {
    if (l === lang || typeof window === "undefined") return;
    const path = window.location.pathname;
    const target =
      l === "bn" ? `/bn${path === "/" ? "/" : path}` : path.replace(/^\/bn/, "") || "/";
    window.location.assign(target);
  }

  function localize(href: string) {
    if (lang !== "bn" || !href.startsWith("/")) return href;
    return href === "/" ? "/bn/" : `/bn${href}`;
  }

  return (
    <LangContext.Provider
      value={{ lang, setLang, t: lang === "bn" ? bn : en, localize }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
