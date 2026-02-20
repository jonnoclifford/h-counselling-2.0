"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import type { FAQConfig } from "@/types/content";

interface FAQContentProps {
  data: FAQConfig;
}

export default function FAQContent({ data }: FAQContentProps) {
  return (
    <>
      {/* FAQ Accordion */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimateIn>
            <Accordion items={data.items} />
          </AnimateIn>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-oat-dark/50">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <AnimateIn>
              <span className="inline-block text-terracotta font-body font-medium text-sm tracking-wide mb-3">
                {data.pricing.label}
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-warm-charcoal">
                {data.pricing.heading}
              </h2>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free Consultation */}
            <AnimateIn delay={0.1}>
              <div className="bg-oat rounded-3xl p-8 md:p-10 h-full border border-warm-charcoal/5">
                <span className="inline-block font-display text-4xl text-matcha-dark mb-1">
                  {data.pricing.consultation.price}
                </span>
                <p className="text-warm-muted text-sm mb-5">
                  {data.pricing.consultation.description}
                </p>
                <div className="w-full h-px bg-warm-charcoal/10 mb-5" />
                <p className="text-warm-muted leading-relaxed text-sm">
                  {data.pricing.consultation.details}
                </p>
              </div>
            </AnimateIn>

            {/* Session */}
            <AnimateIn delay={0.2}>
              <div className="bg-oat rounded-3xl p-8 md:p-10 h-full border-2 border-terracotta/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-terracotta text-white text-xs font-medium px-4 py-1.5 rounded-bl-2xl">
                  {data.pricing.session.badge}
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display text-4xl text-terracotta">
                    {data.pricing.session.price}
                  </span>
                </div>
                <p className="text-warm-muted text-sm mb-5">
                  {data.pricing.session.description}
                </p>
                <div className="w-full h-px bg-warm-charcoal/10 mb-5" />
                <p className="text-warm-muted leading-relaxed text-sm">
                  {data.pricing.session.details}
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimateIn>
            <div className="text-center mb-10">
              <span className="inline-block text-matcha-dark font-body font-medium text-sm tracking-wide mb-3">
                {data.logistics.label}
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-warm-charcoal">
                {data.logistics.heading}
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="space-y-6 text-warm-muted leading-relaxed">
              {data.logistics.items.map((item, index) => (
                <div key={index} className="bg-oat-dark/50 rounded-2xl p-6 md:p-8">
                  <h3 className="font-display text-xl text-warm-charcoal mb-2">
                    {item.heading}
                  </h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-lilac-light/20">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-warm-charcoal mb-5">
              {data.cta.heading}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-warm-muted text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              {data.cta.description}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Button href={data.cta.buttonHref} size="lg">
              {data.cta.buttonText}
            </Button>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
