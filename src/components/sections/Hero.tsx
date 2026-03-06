"use client";

import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";

interface HeroProps {
  data: {
    label: string;
    heading: string;
    subheading: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
    illustration: string;
    illustrationAlt: string;
  };
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative md:min-h-screen flex items-center overflow-hidden pt-32 pb-10 md:pt-0 md:pb-0">
      {/* Decorative blobs */}
      <div className="absolute -top-10 -left-20 w-64 h-64 md:w-[420px] md:h-[420px] bg-blush-light/25 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 -right-32 w-56 h-56 md:w-[380px] md:h-[380px] bg-lilac-light/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-16 left-1/2 w-48 h-48 md:w-80 md:h-80 bg-matcha-light/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="lg:w-3/4">
          <AnimateIn delay={0.1}>
            <span className="inline-block text-terracotta font-body font-medium text-sm md:text-base tracking-wide mb-4">
              {data.label}
            </span>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <h1
              className="font-display text-[2.5rem] md:text-7xl lg:text-8xl text-warm-charcoal leading-[1.1] mb-4 md:mb-6"
              style={{ textShadow: "2px 2px 0px #C7BADA" }}
            >
              {data.heading}
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.35}>
            <p className="text-warm-muted text-lg md:text-2xl leading-relaxed mb-6 md:mb-8">
              {data.subheading.split('. ').map((sentence, i, arr) => (
                <span key={i} className={i > 0 ? "block mt-2" : ""}>
                  {sentence}{i < arr.length - 1 ? '.' : ''}
                </span>
              ))}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={data.primaryCta.href} size="lg">
                {data.primaryCta.text}
              </Button>
              <Button href={data.secondaryCta.href} variant="outline" size="lg">
                {data.secondaryCta.text}
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
