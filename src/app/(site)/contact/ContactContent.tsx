"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import ContactForm from "@/components/ui/ContactForm";
import type { ContactConfig } from "@/types/content";

interface ContactContentProps {
  data: ContactConfig;
}

export default function ContactContent({ data }: ContactContentProps) {
  return (
    <>
      {/* Form + Sidebar */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <AnimateIn>
                <ContactForm />
              </AnimateIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <AnimateIn delay={0.15}>
                <div className="space-y-8">
                  {/* Email Direct */}
                  <div className="bg-oat-dark/60 rounded-2xl p-6 md:p-8">
                    <h3 className="font-display text-xl text-warm-charcoal mb-2">
                      Email me directly
                    </h3>
                    <a
                      href={`mailto:${data.email}`}
                      className="text-terracotta hover:underline break-all"
                    >
                      {data.email}
                    </a>
                    <p className="text-warm-muted text-sm mt-3 leading-relaxed">
                      {data.emailResponseTime}
                    </p>
                  </div>

                  {/* What Happens Next */}
                  <div className="bg-oat-dark/60 rounded-2xl p-6 md:p-8">
                    <h3 className="font-display text-xl text-warm-charcoal mb-3">
                      {data.whatHappensNext.heading}
                    </h3>
                    <ol className="space-y-3 text-warm-muted text-sm leading-relaxed">
                      {data.whatHappensNext.steps.map((step, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold flex items-center justify-center mt-0.5">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
