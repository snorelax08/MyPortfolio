import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import FloatingLines from "@/components/FloatingLines";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* 3D Interactive Background */}
      <div className="fixed inset-0 z-0">
        <FloatingLines 
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={2.0}
          bendStrength={-1.5}
          mouseDamping={0.1}
          interactive={true}
          parallax={true}
        />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
};

export default Index;
