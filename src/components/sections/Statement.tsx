"use client";

import AnimateIn from "@/components/ui/AnimateIn";

interface StatementProps {
  children: React.ReactNode;
  subtitle?: React.ReactNode;
  bg?: "none" | "lilac" | "terracotta";
  shadow?: "orange" | "purple" | "none";
  className?: string;
}

const bgStyles = {
  none: {
    section: "",
    heading: "text-warm-charcoal",
    subtitle: "text-warm-muted",
  },
  lilac: {
    section: "bg-lilac",
    heading: "text-white",
    subtitle: "text-white/80",
  },
  terracotta: {
    section: "bg-terracotta",
    heading: "text-oat",
    subtitle: "text-oat/80",
  },
};

const shadowStyles = {
  none: undefined,
  orange: "1.5px 1.5px 0px #D4845A",
  purple: "1.5px 1.5px 0px #C7BADA",
};

export default function Statement({
  children,
  subtitle,
  bg = "none",
  shadow = "none",
  className = "",
}: StatementProps) {
  const styles = bgStyles[bg];

  return (
    <section className={`py-20 md:py-32 ${styles.section} ${className}`}>
      <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
        <AnimateIn>
          <h2
            className={`font-display text-4xl md:text-6xl lg:text-7xl ${styles.heading} leading-[1.15]`}
            style={
              shadow !== "none"
                ? { textShadow: shadowStyles[shadow] }
                : undefined
            }
          >
            {children}
          </h2>
        </AnimateIn>
        {subtitle && (
          <AnimateIn delay={0.2}>
            <p
              className={`mt-6 md:mt-8 ${styles.subtitle} text-lg md:text-xl max-w-2xl mx-auto leading-relaxed`}
            >
              {subtitle}
            </p>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
