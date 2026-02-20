"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";

const faqItems = [
  {
    question: "I've never had therapy before. Is that okay?",
    answer:
      "Absolutely. Most people feel nervous before their first session. That's completely normal. We'll take it at your pace and there's no pressure to talk about anything you're not ready for.",
  },
  {
    question: "What happens in a session?",
    answer:
      "We meet for 50 minutes by Zoom or phone. There's no set agenda, you talk about whatever feels important to you. I'm there to listen, support you, and help you make sense of what you're going through.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "It depends entirely on you. Some people find a few sessions helpful, others prefer to work together over a longer period. We'll check in regularly so it always feels right for you.",
  },
  {
    question: "Is everything I say confidential?",
    answer:
      "Yes. What you share with me stays between us. The only exception is if I believe there's a serious risk of harm to you or someone else, in which case I'd always try to discuss this with you first. I follow BACP ethical guidelines at all times.",
  },
  {
    question: "What does 'person-centred' mean?",
    answer:
      "It means I believe you are the expert on your own life. I won't tell you what to do or give you homework. Instead, I'll create a space where you can explore your thoughts and feelings at your own pace, without judgement.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Sessions are £50 for 50 minutes. I also offer a free 15-minute phone consultation before we start, so you can ask questions and see if it feels right.",
  },
  {
    question: "I'm not sure therapy is for me. Can I just try it?",
    answer:
      "Of course. That's exactly what the free consultation is for. And even after we start, there's no long-term commitment. You're in control.",
  },
  {
    question: "Do you offer face-to-face sessions?",
    answer:
      "I currently offer sessions online (via Zoom) and by telephone. Many clients find this more convenient and comfortable, as you can attend from your own home or any private space.",
  },
];

export default function FAQContent() {
  return (
    <>
      {/* FAQ Accordion */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimateIn>
            <Accordion items={faqItems} />
          </AnimateIn>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-oat-dark/50">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <AnimateIn>
              <span className="inline-block text-terracotta font-body font-medium text-sm tracking-wide mb-3">
                Simple &amp; transparent
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-warm-charcoal">
                Pricing
              </h2>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free Consultation */}
            <AnimateIn delay={0.1}>
              <div className="bg-oat rounded-3xl p-8 md:p-10 h-full border border-warm-charcoal/5">
                <span className="inline-block font-display text-4xl text-matcha-dark mb-1">
                  Free
                </span>
                <p className="text-warm-muted text-sm mb-5">
                  15-minute phone consultation
                </p>
                <div className="w-full h-px bg-warm-charcoal/10 mb-5" />
                <p className="text-warm-muted leading-relaxed text-sm">
                  A relaxed chat to ask questions and see if we&apos;re a good
                  fit. No pressure, no commitment.
                </p>
              </div>
            </AnimateIn>

            {/* Session */}
            <AnimateIn delay={0.2}>
              <div className="bg-oat rounded-3xl p-8 md:p-10 h-full border-2 border-terracotta/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-terracotta text-white text-xs font-medium px-4 py-1.5 rounded-bl-2xl">
                  Most common
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display text-4xl text-terracotta">
                    &pound;50
                  </span>
                </div>
                <p className="text-warm-muted text-sm mb-5">
                  per 50-minute session
                </p>
                <div className="w-full h-px bg-warm-charcoal/10 mb-5" />
                <p className="text-warm-muted leading-relaxed text-sm">
                  Zoom or phone. Short-term or long-term, we&apos;ll find
                  what works best for you.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimateIn>
            <div className="text-center mb-10">
              <span className="inline-block text-matcha-dark font-body font-medium text-sm tracking-wide mb-3">
                Good to know
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-warm-charcoal">
                Logistics &amp; practicalities
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="space-y-6 text-warm-muted leading-relaxed">
              <div className="bg-oat-dark/50 rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl text-warm-charcoal mb-2">
                  Sessions
                </h3>
                <p>
                  Sessions are 50 minutes long and take place weekly at a
                  regular time. I offer sessions via Zoom (video) or telephone,
                  whichever you prefer.
                </p>
              </div>

              <div className="bg-oat-dark/50 rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl text-warm-charcoal mb-2">
                  Cancellation policy
                </h3>
                <p>
                  I understand things come up. I ask for at least 24 hours&apos;
                  notice if you need to cancel or reschedule. Late cancellations
                  or missed sessions will be charged at the full session rate.
                </p>
              </div>

              <div className="bg-oat-dark/50 rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl text-warm-charcoal mb-2">
                  Confidentiality
                </h3>
                <p>
                  Everything you share is confidential and kept in line with the
                  BACP Ethical Framework. The only exception is if I believe
                  there&apos;s a serious risk of harm, which I&apos;d always try
                  to discuss with you first.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-lilac-light/20">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-warm-charcoal mb-5">
              Still have questions?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-warm-muted text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              That&apos;s totally fine. Drop me a message and I&apos;ll get back
              to you within 24&ndash;48 hours.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Button href="/contact" size="lg">
              Get In Touch
            </Button>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
