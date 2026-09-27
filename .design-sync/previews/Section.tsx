import { Section, Button, Card } from "@urvar/design-system";

export const ConversionBand = () => (
  <Section bg="earth" containerClassName="text-center max-w-lg">
    <h2 className="font-[family-name:var(--font-campaign)] uppercase text-urvar-dark text-[28px] sm:text-[36px] leading-[1.1] mb-3">
      Need help building a program for your field?
    </h2>
    <p className="text-neutral-600 text-[15px] leading-relaxed mb-7">
      Talk to our team for crop-specific advice, dosage and pricing.
    </p>
    <div className="flex justify-center gap-3 flex-wrap">
      <Button href="/contact">Contact Us</Button>
      <Button href="https://wa.me/919035708943" variant="secondary">
        Chat on WhatsApp
      </Button>
    </div>
  </Section>
);

export const WhyChoose = () => (
  <Section bg="white">
    <p className="text-[11px] font-bold text-stone tracking-[1.5px] uppercase mb-2">Built on science, proven in the field</p>
    <h2 className="font-[family-name:var(--font-campaign)] uppercase text-ink text-[36px] sm:text-[48px] leading-none mb-8">
      Why Choose Urvar
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Card className="p-6">
        <h3 className="font-bold text-ink text-base mb-2">Restores Soil Health</h3>
        <p className="text-mute text-[14px] leading-relaxed">
          Organic and biological inputs that rebuild depleted soils and restore microbial life season after season.
        </p>
      </Card>
      <Card className="p-6">
        <h3 className="font-bold text-ink text-base mb-2">Field-Tested</h3>
        <p className="text-mute text-[14px] leading-relaxed">
          Proven on paddy, vegetables, potato, mustard and fruit crops across real Indian farm conditions.
        </p>
      </Card>
    </div>
  </Section>
);

export const Dark = () => (
  <Section bg="dark" containerClassName="max-w-2xl">
    <h2 className="font-[family-name:var(--font-campaign)] uppercase text-white text-[36px] leading-none mb-3">
      Grow Your Business with India's Rising Organic Agri Brand
    </h2>
    <p className="text-white/70 text-[15px] leading-relaxed mb-6">High margins. Real support. Booming organic demand across India.</p>
    <Button variant="onDark">Become a Distributor</Button>
  </Section>
);
