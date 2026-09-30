import { HeroSection } from "@/app/components/sections/HeroSection";
import { ProjectsSection } from "@/app/components/sections/ProjectsSection";
import { ReferencesSection } from "@/app/components/sections/ReferencesSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ContactSection } from "@/app/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ReferencesSection />
      <ContactSection />
    </div>
  );
}