import HeroBento from "@/components/HeroBento";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import TerminalWindow from "@/components/TerminalWindow";
import ArticlesSection from "@/components/ArticlesSection";
import ContactSection from "@/components/ContactSection";
import NavDock from "@/components/NavDock";
import GridBackground from "@/components/GridBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <GridBackground />
      <NavDock />
      <HeroBento />
      <ProjectsSection />
      <ResearchSection />
      <TerminalWindow />
      <ArticlesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
