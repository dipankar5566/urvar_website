// Stand-in for next/link outside the Next.js runtime: a plain anchor.
import { forwardRef, type AnchorHTMLAttributes } from "react";

type Href = string | { pathname?: string | null; hash?: string | null };

export type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: Href;
  prefetch?: boolean | null;
  replace?: boolean;
  scroll?: boolean;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, prefetch: _prefetch, replace: _replace, scroll: _scroll, ...rest },
  ref,
) {
  const url = typeof href === "string" ? href : `${href.pathname ?? ""}${href.hash ? `#${href.hash}` : ""}` || "#";
  return <a ref={ref} href={url} {...rest} />;
});

export default Link;
