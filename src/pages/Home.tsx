import Hero from "../components/Hero";
import MarketContext from "../components/MarketContext";
import TechStack from "../components/TechStack";
import ValueProposition from "../components/ValueProposition";
import CaseStudies from "../components/CaseStudies";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketContext />
      <TechStack />
      <ValueProposition />
      <CaseStudies />
    </>
  );
}
