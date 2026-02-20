import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/cms";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Harriet to book your free 15-minute consultation. Online and telephone therapy available.",
};

export default async function ContactPage() {
  const config = await getSiteConfig();
  const { contact } = config;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-terracotta font-body font-medium text-sm tracking-wide mb-4">
            {contact.hero.label}
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-warm-charcoal mb-5">
            {contact.hero.heading}
          </h1>
          <p className="text-warm-muted text-lg leading-relaxed max-w-xl mx-auto">
            {contact.hero.description}
          </p>
        </div>
      </section>

      <ContactContent data={contact} />
    </>
  );
}
