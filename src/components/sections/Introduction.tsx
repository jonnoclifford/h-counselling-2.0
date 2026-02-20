"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";

interface IntroductionProps {
  data: {
    label: string;
    heading: string;
    paragraphs: string[];
    buttonText: string;
    buttonHref: string;
    image: string;
    imageAlt: string;
  };
}

export default function Introduction({ data }: IntroductionProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimateIn direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  fill
                  className="object-cover object-bottom scale-110 origin-bottom"
                />
              </div>
            </div>
          </AnimateIn>

          {/* Text */}
          <div>
            <AnimateIn delay={0.1}>
              <span className="inline-block text-matcha-dark font-body font-medium text-sm tracking-wide mb-4">
                {data.label}
              </span>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl text-warm-charcoal mb-6">
                {data.heading}
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="space-y-4 text-warm-muted leading-relaxed">
                {data.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <div className="mt-8">
                <Button href={data.buttonHref} variant="outline">
                  {data.buttonText}
                </Button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
