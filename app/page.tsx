"use client";

"use client";

import NavBar from "@/components/NavBar";
import ViewportSync from "@/components/ViewportSync";
import VantaBackground from "@/components/VantaBackgroundClient";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import BlogSection from "@/components/BlogSection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useI18n } from "@/components/I18nProvider";

function HomeContent() {
  const { t } = useI18n();

  return (
    <>
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
            sectionIndex={t.enterprise.index}
            title={t.enterprise.title}
            subtitle={t.enterprise.subtitle}
            projects={t.enterprise.projects}
          />
          <ProjectsSection
            id="github"
            sectionIndex={t.github.index}
            title={t.github.title}
            subtitle={t.github.subtitle}
            projects={t.github.projects}
            showLinks
          />
          <BlogSection />
          <ExperienceSection />
        </main>
        <FooterSection />
        <BackToTop />
        <CookieConsent />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}
