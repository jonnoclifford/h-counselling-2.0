"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

interface ServiceCardProps {
  title: string;
  description: string;
  illustration: string;
  bgColor?: string;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  illustration,
  bgColor = "bg-oat-dark",
  delay = 0,
}: ServiceCardProps) {
  return (
    <AnimateIn delay={delay} className="h-full">
      <div
        className={`${bgColor} rounded-3xl p-6 md:p-8 h-full flex flex-col items-start transition-transform duration-300 hover:scale-[1.02]`}
      >
        <div className="w-20 h-20 md:w-24 md:h-24 mb-5 relative flex-shrink-0">
          <Image
            src={illustration}
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>
        <h3 className="font-display text-xl md:text-2xl text-warm-charcoal mb-2">
          {title}
        </h3>
        <p className="text-warm-muted text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </AnimateIn>
  );
}
