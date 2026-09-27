// Stand-in for next/image outside the Next.js runtime: a plain <img>.
// Site-relative paths (/products/x.webp) resolve against the live site so
// images render inside Claude Design, where the site's public/ isn't served.
import type { CSSProperties, ImgHTMLAttributes } from "react";

const ORIGIN = "https://www.urvarindia.com";

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
  const url = raw.startsWith("/") ? ORIGIN + raw : raw;
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
