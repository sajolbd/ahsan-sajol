import ContactSection from "components/home/ContactSection";
import Hero from "components/home/Hero";
import ProjectsSection from "components/home/ProjectsSection";
import SectionRouteScroller from "components/home/SectionRouteScroller";
import SkillsSection from "components/home/SkillsSection";
import ImpactSection from "components/home/ImpactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <SectionRouteScroller />
    </>
  );
}
