"use client";

import NavBar from "@/components/NavBar";
import ViewportSync from "@/components/ViewportSync";
import PointerAura from "@/components/PointerAura";
import PageDroplets from "@/components/PageDroplets";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import SelectedProjects from "@/components/SelectedProjects";
import WorkIndex from "@/components/WorkIndex";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import BlogSection from "@/components/BlogSection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";
import { ThemeProvider } from "@/components/ThemeProvider";

function HomeContent() {
  return (
    <>
      <ViewportSync />
      <div className="page-noise fixed inset-0 z-[1]" aria-hidden="true" />
      <PointerAura />
      <PageDroplets />
      <div className="relative z-10">
        <NavBar />
        <main id="main-content">
          <HeroSection />
          <SelectedProjects />
          <AboutSection />
          <WorkIndex />
          <SkillsSection />
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
