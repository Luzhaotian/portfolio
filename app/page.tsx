import NavBar from "@/components/NavBar";
import ViewportSync from "@/components/ViewportSync";
import VantaBackground from "@/components/VantaBackgroundClient";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";
import { ThemeProvider } from "@/components/ThemeProvider";
import { enterpriseProjects, githubProjects } from "@/data/projects";

export default function Home() {
  return (
    <ThemeProvider>
      <ViewportSync />
      <VantaBackground />
      <div className="relative z-10">
        <NavBar />
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection
            id="enterprise"
            sectionIndex="03 — ENTERPRISE"
            title="近期企业项目"
            subtitle="近年参与的代表性核心业务平台与管理系统"
            projects={enterpriseProjects}
          />
          <ProjectsSection
            id="github"
            sectionIndex="04 — OPEN SOURCE"
            title="开源项目"
            subtitle="GitHub 上的个人开源项目与技术探索"
            projects={githubProjects}
            showLinks
          />
          <BlogSection />
          <ExperienceSection />
        </main>
        <FooterSection />
      </div>
    </ThemeProvider>
  );
}
