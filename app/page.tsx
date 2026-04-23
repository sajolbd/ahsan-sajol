import Hero from "components/home/Hero";
import ProjectsSection from "components/home/ProjectsSection";
import SkillsSection from "components/home/SkillsSection";
import ImpactSection from "components/ImpactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}
