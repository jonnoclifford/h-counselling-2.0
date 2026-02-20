"use client";

import AnimateIn from "@/components/ui/AnimateIn";

const testimonials = [
  {
    quote:
      "Harriet made me feel completely at ease from the very first session. I'd never had therapy before and was really nervous, but she created such a warm and safe space. I finally feel like myself again.",
    author: "Former Client",
  },
  {
    quote:
      "I was struggling with anxiety for years before I reached out. Harriet listened without judgement and helped me understand myself in ways I never had before. I can't recommend her enough.",
    author: "Former Client",
  },
  {
    quote:
      "The online sessions were so much more comfortable than I expected. Being able to talk from my own home made such a difference. Harriet is kind, patient, and genuinely cares.",
    author: "Former Client",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-lilac-light/20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <AnimateIn>
            <span className="inline-block text-lilac-dark font-body font-medium text-sm tracking-wide mb-4">
              Kind words
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-warm-charcoal">
              What my clients say
            </h2>
          </AnimateIn>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
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
