import Hero from "@/components/sections/Hero";
import MarqueeBand from "@/components/sections/MarqueeBand";
import Introduction from "@/components/sections/Introduction";
import StatementOne from "@/components/sections/StatementOne";
import Services from "@/components/sections/Services";
import StatementTwo from "@/components/sections/StatementTwo";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import StatementThree from "@/components/sections/StatementThree";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <Introduction />
      <StatementOne />
      <Services />
      <StatementTwo />
      <Process />
      <Testimonials />
      <StatementThree />
      <CTA />
    </>
  );
}
