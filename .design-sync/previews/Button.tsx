import { Button } from "@urvar/design-system";

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-3 p-6 bg-white">
    <Button href="/contact">Contact Us</Button>
    <Button href="https://wa.me/919035708943" variant="secondary" target="_blank" rel="noopener noreferrer">
      Chat on WhatsApp
    </Button>
    <Button variant="ghost">View dosage</Button>
  </div>
);

export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-3 p-6 bg-white">
    <Button size="sm">Enquire</Button>
    <Button size="md">View Products</Button>
    <Button size="lg">Become a Distributor</Button>
  </div>
);

export const OnDark = () => (
  <div className="flex flex-wrap items-center gap-3 p-8 bg-urvar-dark">
    <Button variant="onDark" size="lg">Become a Distributor</Button>
    <Button variant="onDark" disabled>
      Sending…
    </Button>
  </div>
);
