import { ProductCard, products } from "@urvar/design-system";

export const Grid = () => (
  <div className="grid grid-cols-3 gap-5 p-6 bg-white max-w-3xl">
    {products.slice(0, 3).map((p) => (
      <ProductCard key={p.slug} product={p} />
    ))}
  </div>
);

export const PillCta = () => (
  <div className="grid grid-cols-2 gap-5 p-6 bg-white max-w-xl">
    {products.slice(5, 7).map((p) => (
      <ProductCard key={p.slug} product={p} ctaVariant="pill" />
    ))}
  </div>
);
