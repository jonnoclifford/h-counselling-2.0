"use client";

import StepCard from "@/components/ui/StepCard";
import AnimateIn from "@/components/ui/AnimateIn";

interface ProcessProps {
  data: {
    label: string;
    heading: string;
    steps: { number: string; title: string; description: string }[];
  };
}

export default function Process({ data }: ProcessProps) {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <AnimateIn>
            <span className="inline-block text-matcha-dark font-body font-medium text-sm tracking-wide mb-4">
              {data.label}
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-warm-charcoal">
              {data.heading}
            </h2>
          </AnimateIn>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {data.steps.map((step, index) => (
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
