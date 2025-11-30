import AppLayout from "./components/layout/AppLayout";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import JourneySection from "./sections/JourneySection";
import ContactSection from "./sections/ContactSection";
import CvSection from "./sections/CvSection";
import CommandPalette from "./components/common/CommandPalette";

export default function App() {
  return (
    <>
      <AppLayout>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CvSection />
        <JourneySection />
        <ContactSection />
      </AppLayout>
      <CommandPalette />
    </>
  );
}
