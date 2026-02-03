import { About } from "@/src/components/About/AboutSection";
import { ContactTerminal } from "@/src/components/Contact/Contact";
// import { ContactTerminal } from "@/src/components/Contact/TerminalContact copy";
import { Timeline } from "@/src/components/Education/EducationTimeline";
import { Hero } from "@/src/components/Hero/HeroSection";
import { Projects } from "@/src/components/Projects/ProjectsSection";
import { TechStack } from "@/src/components/TechStack/TechStackSection";
export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Timeline />
      <ContactTerminal />
    </>
  );
}
