// Stand-in for next/navigation outside the Next.js runtime. LangProvider
// derives the language from the pathname, so designs render English by
// default; set window.__URVAR_PATH__ = "/bn/" before rendering for Bengali.
type Win = { __URVAR_PATH__?: string };

export function usePathname(): string {
  return (typeof window !== "undefined" && (window as unknown as Win).__URVAR_PATH__) || "/";
}

export function useRouter() {
  return {
    push: (href: string) => window.location.assign(href),
    replace: (href: string) => window.location.replace(href),
    back: () => window.history.back(),
    forward: () => window.history.forward(),
    refresh: () => {},
    prefetch: () => {},
  };
}

export function useSearchParams() {
  return new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
}
