"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

// Delegated listener so every wa.me / tel: link on the site is tracked
// without wiring onClick into each component (several are server components).
export default function AnalyticsEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      const href = link.href;
      if (href.includes("wa.me/")) {
        track("whatsapp_click", { page: window.location.pathname });
      } else if (href.startsWith("tel:")) {
        track("call_click", { page: window.location.pathname });
      }
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
