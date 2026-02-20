import type { Metadata } from "next";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ & Pricing",
  description:
    "Frequently asked questions about online therapy, pricing, and what to expect from sessions with H Counselling.",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "I've never had therapy before. Is that okay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Most people feel nervous before their first session. That's completely normal. We'll take it at your pace and there's no pressure to talk about anything you're not ready for.",
      },
    },
    {
      "@type": "Question",
      name: "What happens in a session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We meet for 50 minutes by Zoom or phone. There's no set agenda, you talk about whatever feels important to you. I'm there to listen, support you, and help you make sense of what you're going through.",
      },
    },
    {
      "@type": "Question",
      name: "How many sessions will I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends entirely on you. Some people find a few sessions helpful, others prefer to work together over a longer period. We'll check in regularly so it always feels right for you.",
      },
    },
    {
      "@type": "Question",
      name: "Is everything I say confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. What you share with me stays between us. The only exception is if I believe there's a serious risk of harm to you or someone else, in which case I'd always try to discuss this with you first. I follow BACP ethical guidelines at all times.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'person-centred' mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It means I believe you are the expert on your own life. I won't tell you what to do or give you homework. Instead, I'll create a space where you can explore your thoughts and feelings at your own pace, without judgement.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sessions are £50 for 50 minutes. I also offer a free 15-minute phone consultation before we start, so you can ask questions and see if it feels right.",
      },
    },
    {
      "@type": "Question",
      name: "I'm not sure therapy is for me. Can I just try it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course. That's exactly what the free consultation is for. And even after we start, there's no long-term commitment. You're in control.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer face-to-face sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I currently offer sessions online (via Zoom) and by telephone. Many clients find this more convenient and comfortable, as you can attend from your own home or any private space.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-lilac-dark font-body font-medium text-sm tracking-wide mb-4">
            Questions &amp; answers
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-warm-charcoal mb-5">
            Things you might be wondering
          </h1>
          <p className="text-warm-muted text-lg leading-relaxed max-w-xl mx-auto">
            There&apos;s no such thing as a silly question. Here are some things
            people often ask before getting started.
          </p>
        </div>
      </section>

      <FAQContent />
    </>
  );
}
