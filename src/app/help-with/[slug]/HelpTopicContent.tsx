"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";
import Statement from "@/components/sections/Statement";
import IllustrationTextBlock from "@/components/sections/IllustrationTextBlock";
import type { HelpTopicPage } from "@/lib/constants";

interface HelpTopicContentProps {
  topic: HelpTopicPage;
  relatedTopics: HelpTopicPage[];
}

export default function HelpTopicContent({
  topic,
  relatedTopics,
}: HelpTopicContentProps) {
  return (
    <>
      {/* Hero — two-column: text left, illustration right */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-10 -left-20 w-64 h-64 md:w-[380px] md:h-[380px] bg-blush-light/25 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/3 -right-32 w-56 h-56 md:w-[320px] md:h-[320px] bg-lilac-light/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <AnimateIn delay={0.1}>
                <span className="inline-block text-terracotta font-body font-medium text-sm tracking-wide mb-4">
                  Online counselling
                </span>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-warm-charcoal leading-[1.1] mb-6">
                  {topic.heading}
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <p className="text-warm-muted text-lg md:text-xl leading-relaxed max-w-lg">
                  {topic.intro}
                </p>
              </AnimateIn>
            </div>

            {/* Illustration */}
            <div className="flex justify-center lg:justify-end">
              <AnimateIn delay={0.3} direction="right">
                <div className="relative w-72 h-72 md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px]">
                  <div className="absolute inset-0 bg-lilac-light/40 rounded-full scale-110" />
                  <Image
                    src={`/images/illustrations/${topic.illustration}`}
                    alt={topic.illustrationAlt}
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

      {/* Statement Block */}
      <Statement bg={topic.statementBg} shadow={topic.statementShadow}>
        {topic.statementText}
      </Statement>

      {/* Content Sections — alternating IllustrationTextBlock layouts */}
      {topic.sections.map((section, index) => (
        <IllustrationTextBlock
          key={section.heading}
          heading={section.heading}
          paragraphs={section.paragraphs}
          illustration={topic.illustration}
          illustrationAlt={topic.illustrationAlt}
          flipped={index % 2 !== 0}
          illustrationBg={
            index % 2 === 0 ? "bg-blush-light/40" : "bg-matcha-light/40"
          }
          sectionBg={index % 2 !== 0 ? "bg-oat-dark/30" : undefined}
        />
      ))}

      {/* Related Topics */}
      {relatedTopics.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <AnimateIn>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-8">
                You might also find these helpful
              </h2>
            </AnimateIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTopics.map((related, i) => (
                <AnimateIn key={related.slug} delay={i * 0.1}>
                  <Link
                    href={`/help-with/${related.slug}`}
                    className="block rounded-2xl border border-warm-charcoal/10 bg-oat p-6 transition-all duration-300 hover:shadow-md hover:border-terracotta/30"
                  >
                    <span className="text-lg font-display text-warm-charcoal">
                      {related.title}
                    </span>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
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
              {topic.ctaText}
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
