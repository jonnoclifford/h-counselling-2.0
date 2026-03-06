import { getSiteConfig } from "@/lib/cms";
import Hero from "@/components/sections/Hero";
import MarqueeBand from "@/components/sections/MarqueeBand";
import Introduction from "@/components/sections/Introduction";
import StatementOne from "@/components/sections/StatementOne";
import Services from "@/components/sections/Services";

import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import StatementThree from "@/components/sections/StatementThree";
import CTA from "@/components/sections/CTA";

export default async function Home() {
  const config = await getSiteConfig();
  const { homepage } = config;

  return (
    <>
      <Hero data={homepage.hero} />
      <MarqueeBand text={homepage.marquee.text} />
      <Introduction data={homepage.introduction} />
      <StatementOne data={homepage.statements[0]} />
      <Services data={homepage.services} />
      <Process data={homepage.process} />
      <Testimonials data={homepage.testimonials} />
      <StatementThree data={homepage.statements[2]} />
      <CTA data={homepage.cta} />
    </>
  );
}
