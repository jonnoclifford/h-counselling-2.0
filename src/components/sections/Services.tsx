"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import AnimateIn from "@/components/ui/AnimateIn";

interface ServicesProps {
  data: {
    label: string;
    heading: string;
    description: string;
    items: { title: string; description: string; illustration: string; bgColor: string }[];
  };
}

export default function Services({ data }: ServicesProps) {
  return (
    <section className="py-20 md:py-32 bg-oat-dark/50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <AnimateIn>
            <span className="inline-block text-terracotta font-body font-medium text-sm tracking-wide mb-4">
              {data.label}
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-warm-charcoal mb-4">
              {data.heading}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-warm-muted text-lg">
              {data.description}
            </p>
          </AnimateIn>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {data.items.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              illustration={service.illustration}
              bgColor={service.bgColor}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
