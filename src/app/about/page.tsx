import type { Metadata } from "next";
import Image from "next/image";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Harriet, a BACP-accredited person-centred counsellor offering online and telephone therapy.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-matcha-dark font-body font-medium text-sm tracking-wide mb-4">
                About me
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-warm-charcoal mb-6">
                Hi, I&apos;m Harriet
              </h1>
              <p className="text-warm-muted text-lg md:text-xl leading-relaxed max-w-lg">
                A person-centred counsellor who believes you already have the
                answers. You just need the right space to find them.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-96 md:w-96 md:h-[480px] lg:w-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/harriet-about.png"
                  alt="Harriet, person-centred counsellor"
                  fill
                  className="object-cover object-top scale-125"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutContent />
    </>
  );
}
