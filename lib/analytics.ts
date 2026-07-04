// Thin wrapper over gtag so components can fire GA4 events without
// caring whether analytics is loaded (dev, ad-blockers, missing GA ID).
type GtagParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: GtagParams) => void;
  }
}

export function track(eventName: string, params?: GtagParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}
