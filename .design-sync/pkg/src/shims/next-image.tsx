// Stand-in for next/image outside the Next.js runtime: a plain <img>.
// Site-relative paths (/products/x.webp) resolve against the live site so
// images render inside Claude Design, where the site's public/ isn't served.
import type { CSSProperties, ImgHTMLAttributes } from "react";

const ORIGIN = "https://www.urvarindia.com";

// Build-time path → URL overrides (URVAR_IMG_MAP env in build.mjs) for hosts
// that can't reach the live site, e.g. a sandboxed design canvas.
declare const __URVAR_IMG_MAP__: Record<string, string>;
const IMG_MAP: Record<string, string> = typeof __URVAR_IMG_MAP__ !== "undefined" ? __URVAR_IMG_MAP__ : {};

type StaticSrc = { src: string; width?: number; height?: number };

export type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> & {
  src: string | StaticSrc;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  placeholder?: string;
  blurDataURL?: string;
  unoptimized?: boolean;
  loader?: unknown;
};

export default function Image({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  quality: _quality,
  placeholder: _placeholder,
  blurDataURL: _blur,
  unoptimized: _unoptimized,
  loader: _loader,
  style,
  ...rest
}: ImageProps) {
  const raw = typeof src === "string" ? src : src.src;
  const url = IMG_MAP[raw] ?? (raw.startsWith("/") ? ORIGIN + raw : raw);
  const fillStyle: CSSProperties = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%" }
    : {};
  return (
    <img
      src={url}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      style={{ ...fillStyle, ...style }}
      {...rest}
    />
  );
}
