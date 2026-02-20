"use client";

import Marquee from "@/components/ui/Marquee";

interface MarqueeBandProps {
  text: string;
}

export default function MarqueeBand({ text }: MarqueeBandProps) {
  return (
    <section className="bg-terracotta overflow-hidden">
      <Marquee
        text={text}
        separator={"\u00A0\u00A0\u00A0\u00A0\u00A0\u2022\u00A0\u00A0\u00A0\u00A0\u00A0"}
        speed={25}
        className="font-display text-3xl md:text-5xl lg:text-6xl text-oat leading-[1.2] py-3 md:py-4 tracking-wide"
      />
    </section>
  );
}
