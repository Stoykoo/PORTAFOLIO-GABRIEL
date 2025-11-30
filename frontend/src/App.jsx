// APP

import AppLayout from "./components/layout/AppLayout";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
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
        <CvSection />
        <JourneySection />
        <ContactSection />
      </AppLayout>
      <CommandPalette />
    </>
  );
}
