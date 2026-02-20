"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";

export default function Introduction() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimateIn direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
                <Image
                  src="/images/harriet-home.png"
                  alt="Harriet, person-centred counsellor"
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
                Nice to meet you
              </span>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl text-warm-charcoal mb-6">
                Hello, I&apos;m Harriet
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="space-y-4 text-warm-muted leading-relaxed">
                <p>
                  I&apos;m a fully qualified, BACP-accredited, person-centred
                  counsellor. I offer online and telephone therapy sessions from
                  the comfort of your own space.
                </p>
                <p>
                  I believe that everyone deserves to be heard. Without
                  judgement, without pressure, and without being told what to do.
                  My role is to create a safe, warm space where you can talk
                  openly about whatever matters to you.
                </p>
                <p>
                  Whether you&apos;re going through something specific or just
                  feel like something isn&apos;t quite right, I&apos;m here to
                  listen. We work at your pace, always.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <div className="mt-8">
                <Button href="/about" variant="outline">
                  Learn More About Me
                </Button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
