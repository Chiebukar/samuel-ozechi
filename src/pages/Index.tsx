import HeroBento from "@/components/HeroBento";
import ProjectsSection from "@/components/ProjectsSection";
import TerminalWindow from "@/components/TerminalWindow";
import ArticlesSection from "@/components/ArticlesSection";
import ContactSection from "@/components/ContactSection";
import NavDock from "@/components/NavDock";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavDock />
      <HeroBento />
      <ProjectsSection />
      <TerminalWindow />
      <ArticlesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
