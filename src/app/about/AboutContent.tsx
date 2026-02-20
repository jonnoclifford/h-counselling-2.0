"use client";

import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import Button from "@/components/ui/Button";

const qualifications = [
  "BA Honours Degree",
  "Diploma in Counselling and Psychotherapy",
  "CPD Certificate in Creative Techniques",
  "BACP Accredited Member (MBACP)",
  "Registered with the BACP (Membership No. 407181)",
];

export default function AboutContent() {
  return (
    <>
      {/* My Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <AnimateIn>
                <span className="inline-block text-terracotta font-body font-medium text-sm tracking-wide mb-3">
                  My story
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-warm-charcoal">
                  The winding path that brought me here
                </h2>
              </AnimateIn>
            </div>
            <div className="lg:col-span-8">
              <AnimateIn delay={0.1}>
                <div className="space-y-5 text-warm-muted leading-relaxed text-base md:text-[17px]">
                  <p>
                    I didn&apos;t always know I wanted to be a therapist. Like
                    many people, I took a winding path to get here. And I
                    think that&apos;s part of what makes me good at what I do.
                  </p>
                  <p>
                    My own experiences with life&apos;s challenges taught me how
                    powerful it is to be truly listened to. Not fixed, not
                    advised, not judged. Just heard. That feeling of being
                    understood, without conditions, changed something in me.
                  </p>
                  <p>
                    I trained as a person-centred counsellor because I believe
                    deeply that people have the capacity to find their own
                    answers. They just need the right space to do it.
                  </p>
                  <p>
                    I completed my Diploma in Counselling and Psychotherapy and
                    went on to gain additional training in creative therapeutic
                    techniques. I&apos;m a fully accredited member of the BACP,
                    which means I&apos;m bound by their ethical framework and
                    committed to ongoing professional development.
                  </p>
                  <p>
                    Today, I work online and by telephone, which means you can
                    access therapy from wherever feels most comfortable and safe
                    for you. Whether that&apos;s your living room, your
                    car, or a quiet corner of your day.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 md:py-24 bg-blush-light/30">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <AnimateIn>
                <span className="inline-block text-lilac-dark font-body font-medium text-sm tracking-wide mb-3">
                  My approach
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-warm-charcoal mb-6">
                  You are the expert on your own life
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <div className="space-y-5 text-warm-muted leading-relaxed">
                  <p>
                    I don&apos;t tell you what to do or give you a list of
                    exercises to try. Instead, I create a space where you can
                    talk openly about whatever matters to you, without being
                    judged.
                  </p>
                  <p>
                    Person-centred therapy is built on the belief that you are
                    the expert on your own life. You know yourself better than
                    anyone else.
                  </p>
                  <p>
                    We work at your pace. Some sessions might feel heavy, others
                    might feel lighter. There&apos;s no wrong way to do it. What
                    matters is that the space is yours.
                  </p>
                </div>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.2} direction="right">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-3xl bg-lilac-light/40 overflow-hidden relative">
                  <Image
                    src="/images/illustrations/man-playing-birds.svg"
                    alt="Illustration of a person at peace"
                    fill
                    className="object-contain p-10"
                  />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <AnimateIn>
                <span className="inline-block text-matcha-dark font-body font-medium text-sm tracking-wide mb-3">
                  Qualifications
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-warm-charcoal">
                  Training &amp; credentials
                </h2>
              </AnimateIn>
            </div>
            <div className="lg:col-span-8">
              <AnimateIn delay={0.1}>
                <ul className="space-y-4">
                  {qualifications.map((qual, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-warm-muted"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-matcha flex-shrink-0" />
                      <span className="leading-relaxed">{qual}</span>
                    </li>
                  ))}
                </ul>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-oat-dark/50">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-warm-charcoal mb-5">
              Ready to say hello?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-warm-muted text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              If you&apos;d like to find out more, or you&apos;re ready to get
              started, I&apos;d love to hear from you. No pressure, no
              commitment. Just a conversation.
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
