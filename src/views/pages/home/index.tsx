import ContactSection from "./sections/contact-section";
import EducationSection from "./sections/education-section";
import ExperienceSection from "./sections/experience-section";
import HeroSection from "./sections/hero-section";
import SkillsSection from "./sections/skills-section";
import WorkSection from "./sections/work-section";

function HomePage() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage:
          "radial-gradient(circle, var(--border) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <HeroSection />
      <div className="bg-background relative">
        <ExperienceSection />
        <WorkSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default HomePage;
