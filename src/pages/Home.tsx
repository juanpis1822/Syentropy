import Hero from "../components/Hero";
import MarketContext from "../components/MarketContext";
import TechStack from "../components/TechStack";
import ValueProposition from "../components/ValueProposition";
import CaseStudies from "../components/CaseStudies";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <MarketContext />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <TechStack />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <ValueProposition />
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <CaseStudies />
      </ScrollReveal>
    </>
  );
}
