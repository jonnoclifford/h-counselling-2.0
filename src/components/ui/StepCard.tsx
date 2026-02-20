"use client";

import AnimateIn from "./AnimateIn";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export default function StepCard({
  number,
  title,
  description,
  delay = 0,
}: StepCardProps) {
  return (
    <AnimateIn delay={delay}>
      <div className="text-center md:text-left">
        <span className="inline-block font-display text-5xl md:text-6xl text-terracotta/40 mb-3">
          {number}
        </span>
        <h3 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-3">
          {title}
        </h3>
        <p className="text-warm-muted leading-relaxed max-w-sm mx-auto md:mx-0">
          {description}
        </p>
      </div>
    </AnimateIn>
  );
}
