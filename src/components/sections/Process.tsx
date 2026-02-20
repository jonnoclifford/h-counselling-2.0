"use client";

import StepCard from "@/components/ui/StepCard";
import AnimateIn from "@/components/ui/AnimateIn";

const steps = [
  {
    number: "01",
    title: "Get in touch",
    description:
      "Fill in my contact form or send me an email. No pressure, no commitment. Just a hello.",
  },
  {
    number: "02",
    title: "Free 15-minute chat",
    description:
      "We'll have a relaxed phone call so you can ask questions and see if it feels right for you.",
  },
  {
    number: "03",
    title: "Begin your sessions",
    description:
      "50-minute sessions by Zoom or phone, at a time that works for you. We go at your pace, always.",
  },
];

export default function Process() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <AnimateIn>
            <span className="inline-block text-matcha-dark font-body font-medium text-sm tracking-wide mb-4">
              How it works
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-warm-charcoal">
              Three gentle steps
            </h2>
          </AnimateIn>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={index * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
