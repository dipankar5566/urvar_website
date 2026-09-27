import { Container, Button } from "@urvar/design-system";

export const HeaderBar = () => (
  <div className="bg-soft-cloud py-8">
    <Container className="flex items-center justify-between gap-6">
      <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[36px] leading-none">Our Products</h2>
      <Button href="/products" variant="secondary" size="sm">
        View all
      </Button>
    </Container>
  </div>
);

export const Breadcrumb = () => (
  <div className="bg-white border-b border-hairline py-3">
    <Container>
      <nav className="text-[13px]" aria-label="Breadcrumb">
        <a href="/crop-solutions" className="text-mute hover:text-ink">Crop Solutions</a>
        <span className="mx-2 text-stone">/</span>
        <span className="text-ink font-medium">Potato</span>
      </nav>
    </Container>
  </div>
);
