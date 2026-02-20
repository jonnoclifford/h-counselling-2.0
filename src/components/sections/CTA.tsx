"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";

interface CTAProps {
  data: {
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    emailText: string;
    email: string;
  };
}

export default function CTA({ data }: CTAProps) {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative blobs */}
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
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-warm-charcoal mb-6">
            {data.heading}
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-warm-muted text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
            {data.description}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href={data.buttonHref} size="lg">
              {data.buttonText}
            </Button>
          </div>
          <p className="mt-6 text-warm-light text-sm">
            {data.emailText}{" "}
            <a
              href={`mailto:${data.email}`}
              className="text-terracotta hover:underline"
            >
              {data.email}
            </a>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
