// Re-exports the website's real components under named exports so the
// design-sync converter can bundle them. No component logic lives here.
export { default as Badge } from "../../../components/ui/Badge";
export { default as Button } from "../../../components/ui/Button";
export { default as Card } from "../../../components/ui/Card";
export { default as Container } from "../../../components/ui/Container";
export { default as Section } from "../../../components/ui/Section";

export { default as Navbar } from "../../../components/Navbar";
export { default as Footer } from "../../../components/Footer";
export { default as Hero } from "../../../components/Hero";
export { default as ProductCard } from "../../../components/ProductCard";
export { default as TrustBadges } from "../../../components/TrustBadges";
export { default as VideoEmbed } from "../../../components/VideoEmbed";
export { default as WhatsAppButton } from "../../../components/WhatsAppButton";
export { default as ContactForm } from "../../../components/ContactForm";
export { default as DealerEnquiryForm } from "../../../components/DealerEnquiryForm";

export { LangProvider, useLang } from "../../../context/LangContext";

export { default as products } from "../../../data/products";
export { default as crops } from "../../../data/crops";
