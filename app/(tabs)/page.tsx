import { HeroSection } from "@/app/components/sections/HeroSection";
import { ProjectsSection } from "@/app/components/sections/ProjectsSection";
import { ReferencesSection } from "@/app/components/sections/ReferencesSection";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <ProjectsSection />
      <ReferencesSection />
    </div>
  );
}