import "server-only";
import sanitizeHtml from "sanitize-html";

// Whitelist matching what the admin editor toolbar can produce. Everything
// else (scripts, styles, iframes, event handlers) is stripped on save, so
// the stored HTML is safe to render with dangerouslySetInnerHTML.
export function sanitizePostHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ["p", "h2", "h3", "strong", "em", "u", "s", "a", "ul", "ol", "li", "blockquote", "img", "br", "hr"],
    // target/rel are only ever set by transformTags below, never passed through.
    allowedAttributes: { a: ["href", "target", "rel"], img: ["src", "alt"] },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowProtocolRelative: false,
    exclusiveFilter: (frame) =>
      (frame.tag === "img" && !/^(\/blog-media\/|\/images\/|https:\/\/)/.test(frame.attribs.src ?? "")) ||
      // Drop empty paragraphs left by pressing Enter at the end.
      (frame.tag === "p" && !frame.text.trim() && frame.mediaChildren.length === 0),
    transformTags: {
      a: (tagName, attribs) => {
        const href = attribs.href ?? "";
        const external = /^https?:\/\//.test(href) && !/^https?:\/\/(www\.)?urvarindia\.com/.test(href);
        const out: sanitizeHtml.Attributes = { href };
        if (external) Object.assign(out, { target: "_blank", rel: "noopener noreferrer" });
        return { tagName, attribs: out };
      },
    },
  }).trim();
}

/** True when the editor HTML has no visible text or images. */
export function isEmptyHtml(html: string): boolean {
  return !/<img\b/.test(html) && sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} }).trim() === "";
}
