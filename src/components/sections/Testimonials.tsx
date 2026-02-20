"use client";

import AnimateIn from "@/components/ui/AnimateIn";

interface TestimonialsProps {
  data: {
    label: string;
    heading: string;
    items: { quote: string; author: string }[];
  };
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <section className="py-20 md:py-32 bg-lilac-light/20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <AnimateIn>
            <span className="inline-block text-lilac-dark font-body font-medium text-sm tracking-wide mb-4">
              {data.label}
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-warm-charcoal">
              {data.heading}
            </h2>
          </AnimateIn>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {data.items.map((testimonial, index) => (
            <AnimateIn key={index} delay={index * 0.1}>
              <blockquote className="bg-oat rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between">
                <p className="text-warm-charcoal leading-relaxed text-[15px] md:text-base italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="text-warm-muted text-sm font-medium">
                  {testimonial.author}
                </footer>
              </blockquote>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
