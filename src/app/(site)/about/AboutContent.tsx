"use client";

import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import Button from "@/components/ui/Button";
import type { AboutConfig } from "@/types/content";

interface AboutContentProps {
  data: AboutConfig;
}

export default function AboutContent({ data }: AboutContentProps) {
  return (
    <>
      {/* My Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <AnimateIn>
                <span className="inline-block text-terracotta font-body font-medium text-sm tracking-wide mb-3">
                  {data.story.label}
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-warm-charcoal">
                  {data.story.heading}
                </h2>
              </AnimateIn>
            </div>
            <div className="lg:col-span-8">
              <AnimateIn delay={0.1}>
                <div className="space-y-5 text-warm-muted leading-relaxed text-base md:text-[17px]">
                  {data.story.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 md:py-24 bg-blush-light/30">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <AnimateIn>
                <span className="inline-block text-lilac-dark font-body font-medium text-sm tracking-wide mb-3">
                  {data.approach.label}
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-warm-charcoal mb-6">
                  {data.approach.heading}
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <div className="space-y-5 text-warm-muted leading-relaxed">
                  {data.approach.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.2} direction="right">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-3xl bg-lilac-light/40 overflow-hidden relative">
                  <Image
                    src={`/images/illustrations/${data.approach.illustration}`}
                    alt={data.approach.illustrationAlt}
                    fill
                    className="object-contain p-10"
                  />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <AnimateIn>
                <span className="inline-block text-matcha-dark font-body font-medium text-sm tracking-wide mb-3">
                  {data.qualifications.label}
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-warm-charcoal">
                  {data.qualifications.heading}
                </h2>
              </AnimateIn>
            </div>
            <div className="lg:col-span-8">
              <AnimateIn delay={0.1}>
                <ul className="space-y-4">
                  {data.qualifications.items.map((qual, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-warm-muted"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-matcha flex-shrink-0" />
                      <span className="leading-relaxed">{qual}</span>
                    </li>
                  ))}
                </ul>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-oat-dark/50">
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
