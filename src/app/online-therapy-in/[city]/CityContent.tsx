"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";
import Statement from "@/components/sections/Statement";
import IllustrationTextBlock from "@/components/sections/IllustrationTextBlock";
import type { CityPage } from "@/lib/constants";

interface CityContentProps {
  page: CityPage;
}

export default function CityContent({ page }: CityContentProps) {
  return (
    <>
      {/* Hero — two-column: text left, illustration right */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute -top-10 -left-20 w-64 h-64 md:w-[380px] md:h-[380px] bg-matcha-light/20 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/3 -right-32 w-56 h-56 md:w-[320px] md:h-[320px] bg-blush-light/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <AnimateIn delay={0.1}>
                <span className="inline-block text-terracotta font-body font-medium text-sm tracking-wide mb-4">
                  Online &amp; telephone therapy
                </span>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-warm-charcoal leading-[1.1] mb-6">
                  {page.heading}
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <p className="text-warm-muted text-lg md:text-xl leading-relaxed max-w-lg">
                  {page.intro}
                </p>
              </AnimateIn>
            </div>

            {/* Illustration */}
            <div className="flex justify-center lg:justify-end">
              <AnimateIn delay={0.3} direction="right">
                <div className="relative w-72 h-72 md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px]">
                  <div className="absolute inset-0 bg-matcha-light/30 rounded-full scale-110" />
                  <Image
                    src={`/images/illustrations/${page.illustration}`}
                    alt={page.illustrationAlt}
                    fill
                    className="object-contain relative z-10 p-10"
                    priority
                  />
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 0 — image left, text right */}
      {page.sections[0] && (
        <IllustrationTextBlock
          heading={page.sections[0].heading}
          paragraphs={page.sections[0].paragraphs}
          illustration={page.illustration}
          illustrationAlt={page.illustrationAlt}
          illustrationBg="bg-blush-light/40"
        />
      )}

      {/* Statement Block */}
      <Statement bg={page.statementBg} shadow={page.statementShadow}>
        {page.statementText}
      </Statement>

      {/* Content Section 1 — text left, image right (flipped) */}
      {page.sections[1] && (
        <IllustrationTextBlock
          heading={page.sections[1].heading}
          paragraphs={page.sections[1].paragraphs}
          illustration={page.illustration}
          illustrationAlt={page.illustrationAlt}
          flipped
          illustrationBg="bg-matcha-light/40"
        />
      )}

      {/* CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-matcha-light/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blush/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn>
            <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-8">
              <Image
                src="/images/illustrations/woman-meditating.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="text-warm-muted text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
              {page.ctaText}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <Button href="/contact" size="lg">
              Book Your Free Consultation
            </Button>
            <p className="mt-6 text-warm-light text-sm">
              Or email me directly at{" "}
              <a
                href="mailto:hcounselling@outlook.com"
                className="text-terracotta hover:underline"
              >
                hcounselling@outlook.com
              </a>
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
