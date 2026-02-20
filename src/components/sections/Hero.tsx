"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";

export default function Hero() {
  return (
    <section className="relative md:min-h-screen flex items-center overflow-hidden pt-32 pb-10 md:pt-0 md:pb-0">
      {/* Decorative blobs */}
      <div className="absolute -top-10 -left-20 w-64 h-64 md:w-[420px] md:h-[420px] bg-blush-light/25 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 -right-32 w-56 h-56 md:w-[380px] md:h-[380px] bg-lilac-light/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-16 left-1/2 w-48 h-48 md:w-80 md:h-80 bg-matcha-light/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          {/* Text Side */}
          <div className="order-2 lg:order-1">
            <AnimateIn delay={0.1}>
              <span className="inline-block text-terracotta font-body font-medium text-sm md:text-base tracking-wide mb-4">
                Online &amp; telephone therapy
              </span>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <h1 className="font-display text-[2.5rem] md:text-7xl lg:text-8xl text-warm-charcoal leading-[1.1] mb-4 md:mb-6">
                You don&apos;t need to have it all figured out
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.35}>
              <p className="text-warm-muted text-lg md:text-2xl leading-relaxed max-w-lg mb-6 md:mb-8">
                A safe, warm space to talk about whatever matters to you.
                Person-centred therapy at your pace, from wherever feels
                most comfortable.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.45}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Book a Free 15-Min Chat
                </Button>
                <Button href="/about" variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </AnimateIn>
          </div>

          {/* Illustration Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <AnimateIn delay={0.3} direction="right">
              <div className="relative w-56 h-56 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]">
                {/* Soft background circle */}
                <div className="absolute -inset-2 md:inset-0 md:scale-110 bg-[#E1DDE8] rounded-full" />
                <Image
                  src="/images/illustrations/man-playing-birds.svg"
                  alt="Illustration of a person finding peace, surrounded by birds"
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
  );
}
