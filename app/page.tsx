import NavBar from "@/components/NavBar";
import VantaBackground from "@/components/VantaBackgroundClient";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";
import { enterpriseProjects, githubProjects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <VantaBackground />
      <div className="relative z-10">
        <NavBar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection
            id="enterprise"
            title="企业项目"
            subtitle="在宜信（Yixin）期间参与的核心业务平台与管理系统"
            projects={enterpriseProjects}
          />
          <ProjectsSection
            id="github"
            title="开源项目"
            subtitle="GitHub 上的个人开源项目与技术探索"
            projects={githubProjects}
            showLinks
          />
          <ExperienceSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
