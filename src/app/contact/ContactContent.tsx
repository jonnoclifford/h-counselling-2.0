"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactContent() {
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
                      href="mailto:hcounselling@outlook.com"
                      className="text-terracotta hover:underline break-all"
                    >
                      hcounselling@outlook.com
                    </a>
                    <p className="text-warm-muted text-sm mt-3 leading-relaxed">
                      I&apos;ll get back to you within 24&ndash;48 hours.
                    </p>
                  </div>

                  {/* What Happens Next */}
                  <div className="bg-oat-dark/60 rounded-2xl p-6 md:p-8">
                    <h3 className="font-display text-xl text-warm-charcoal mb-3">
                      What happens next?
                    </h3>
                    <ol className="space-y-3 text-warm-muted text-sm leading-relaxed">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold flex items-center justify-center mt-0.5">
                          1
                        </span>
                        <span>
                          I&apos;ll respond to your message within 24&ndash;48
                          hours.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold flex items-center justify-center mt-0.5">
                          2
                        </span>
                        <span>
                          We&apos;ll arrange a free 15-minute phone call,
                          just a relaxed chat to see if we&apos;re a good fit.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold flex items-center justify-center mt-0.5">
                          3
                        </span>
                        <span>
                          If it feels right, we&apos;ll book your first session
                          at a time that works for you.
                        </span>
                      </li>
                    </ol>
                  </div>

                  {/* Calendly Placeholder */}
                  <div className="bg-lilac-light/30 rounded-2xl p-6 md:p-8 border-2 border-dashed border-lilac/40">
                    <h3 className="font-display text-xl text-warm-charcoal mb-2">
                      Book directly
                    </h3>
                    <p className="text-warm-muted text-sm leading-relaxed mb-4">
                      Prefer to pick a time yourself? You can book your free
                      15-minute consultation directly.
                    </p>
                    <div className="bg-oat rounded-xl p-8 text-center text-warm-light text-sm">
                      Calendly booking widget will appear here
                    </div>
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
