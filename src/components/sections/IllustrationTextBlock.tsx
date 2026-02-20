"use client";

import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";

interface IllustrationTextBlockProps {
  heading: string;
  paragraphs: string[];
  illustration: string;
  illustrationAlt: string;
  flipped?: boolean;
  illustrationBg?: string;
  sectionBg?: string;
}

export default function IllustrationTextBlock({
  heading,
  paragraphs,
  illustration,
  illustrationAlt,
  flipped = false,
  illustrationBg = "bg-lilac-light/40",
  sectionBg,
}: IllustrationTextBlockProps) {
  return (
    <section className={`py-16 md:py-24 ${sectionBg ?? ""}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Illustration */}
          <AnimateIn
            direction={flipped ? "right" : "left"}
            className={flipped ? "order-1 lg:order-2" : "order-1"}
          >
            <div
              className={`aspect-square rounded-3xl overflow-hidden relative ${illustrationBg} flex items-center justify-center`}
            >
              <div className="relative w-3/4 h-3/4">
                <Image
                  src={`/images/illustrations/${illustration}`}
                  alt={illustrationAlt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </AnimateIn>

          {/* Text */}
          <div className={flipped ? "order-2 lg:order-1" : "order-2"}>
            <AnimateIn delay={0.1} direction={flipped ? "left" : "right"}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-warm-charcoal mb-6">
                {heading}
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.2} direction={flipped ? "left" : "right"}>
              <div className="space-y-5 text-warm-muted leading-relaxed text-base md:text-lg">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
