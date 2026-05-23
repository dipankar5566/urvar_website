"use client";

import { createContext, useContext, useEffect, useState } from "react";
import en from "@/messages/en";
import bn from "@/messages/bn";
import type { Messages } from "@/messages/en";

type Lang = "en" | "bn";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Messages;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("urvar-lang") as Lang | null;
    if (saved === "en" || saved === "bn") setLangState(saved);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("urvar-lang", l);
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: lang === "bn" ? bn : en }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
