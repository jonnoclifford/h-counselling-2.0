import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/cms";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ & Pricing",
  description:
    "Frequently asked questions about online therapy, pricing, and what to expect from sessions with H Counselling.",
};

export default async function FAQPage() {
  const config = await getSiteConfig();
  const { faq } = config;

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-lilac-dark font-body font-medium text-sm tracking-wide mb-4">
            {faq.hero.label}
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-warm-charcoal mb-5">
            {faq.hero.heading}
          </h1>
          <p className="text-warm-muted text-lg leading-relaxed max-w-xl mx-auto">
            {faq.hero.description}
          </p>
        </div>
      </section>

      <FAQContent data={faq} />
    </>
  );
}
