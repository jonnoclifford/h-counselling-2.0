"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import AnimateIn from "@/components/ui/AnimateIn";

const services = [
  {
    title: "Anxiety & Stress",
    description:
      "Racing thoughts, constant worry, or that feeling of dread that won't shift. You don't have to manage it alone.",
    illustration: "/images/illustrations/anxious-man-tangled-thoughts.svg",
    bgColor: "bg-lilac-light/40",
  },
  {
    title: "Low Mood & Depression",
    description:
      "When everything feels heavy and getting through the day is a struggle. There's no pressure to 'snap out of it' here.",
    illustration: "/images/illustrations/distressed-man.svg",
    bgColor: "bg-blush-light/50",
  },
  {
    title: "Relationships",
    description:
      "Navigating tricky dynamics, boundaries, or breakups. Whatever's going on, we can talk it through together.",
    illustration: "/images/illustrations/self-criticism-mirror.svg",
    bgColor: "bg-matcha-light/40",
  },
  {
    title: "Self-Esteem & Identity",
    description:
      "Feeling like you're not enough, or not sure who you really are. This is a space to explore that without judgement.",
    illustration: "/images/illustrations/overwhelmed-woman.svg",
    bgColor: "bg-oat-dark",
  },
  {
    title: "Burnout & Work Stress",
    description:
      "Running on empty, dreading Mondays, or feeling like you can't switch off. Let's find a way through.",
    illustration: "/images/illustrations/work-stress.svg",
    bgColor: "bg-lilac-light/30",
  },
  {
    title: "Life Transitions",
    description:
      "Big changes can be overwhelming. New jobs, moves, loss, or just feeling stuck. Whatever it is, you don't have to figure it out alone.",
    illustration: "/images/illustrations/problem-solving.svg",
    bgColor: "bg-blush/30",
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-oat-dark/50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <AnimateIn>
            <span className="inline-block text-terracotta font-body font-medium text-sm tracking-wide mb-4">
              What I can help with
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-warm-charcoal mb-4">
              You don&apos;t need a label
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-warm-muted text-lg">
              If something doesn&apos;t feel right, that&apos;s enough. Here are
              some of the things people come to me with.
            </p>
          </AnimateIn>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
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
