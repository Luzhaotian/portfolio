"use client";

import { useMemo, useSyncExternalStore } from "react";
import ParticleObject from "@/components/canvasui/ParticleObject";
import { useI18n } from "@/components/I18nProvider";
import { useTheme } from "@/components/ThemeProvider";
import { useViewport } from "@/lib/hooks/useViewport";
import { basePath } from "@/lib/site";
import { profile } from "@/data/profile";

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );
}

export default function HeroSection() {
  const { t } = useI18n();
  const { resolved } = useTheme();
  const { isMobile } = useViewport();
  const reducedMotion = usePrefersReducedMotion();
  const particleSrc = useMemo(() => `${basePath}/brand-particles.svg`, []);
  const particleColor = resolved === "dark" ? "#c4a882" : "#8f7355";
  const showParticles = !reducedMotion && !isMobile;

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 md:px-8"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow-secondary pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-mesh pointer-events-none absolute inset-0" aria-hidden="true" />

      {showParticles ? (
        <div
          className="absolute inset-x-0 top-[8%] z-0 mx-auto h-[min(58vh,460px)] w-[min(100%,1100px)] opacity-75 sm:opacity-90"
          aria-hidden="true"
        >
          <ParticleObject
            className="h-full w-full"
            src={particleSrc}
            count={9000}
            size={2.1}
            sizeVariance={0.55}
            color={particleColor}
            radius={130}
            strength={1.35}
            swirl={0.85}
            spring={1.1}
            damping={0.32}
            drift={0.75}
            background=""
            scale={3.4}
            floatIntensity={1.4}
            rotationIntensity={0.55}
            floatSpeed={1.4}
            orbit={false}
            zoom={false}
            autoRotate={false}
            fov={42}
            cameraDistance={4.2}
          />
        </div>
      ) : null}

      <div className="section-inner pointer-events-none relative z-10">
        <div className="pointer-events-auto">
        <div className="animate-fade-in mb-8 sm:mb-10">
          <p
            className="inline-block px-1 font-mono text-[11px] uppercase tracking-[0.28em] text-faint"
            translate="no"
          >
            {t.hero.role}
          </p>
        </div>

        <h1 className="animate-rise mb-6 font-serif text-[clamp(3.25rem,12vw,7.25rem)] font-medium leading-[0.95] tracking-tight text-heading text-balance sm:mb-8">
          {t.profile.name}
        </h1>

        <p className="animate-rise animate-delay-100 mb-3 text-lg text-heading sm:mb-4 sm:text-xl md:text-2xl">
          {t.profile.title}
        </p>

        <p className="animate-rise animate-delay-200 mb-10 max-w-xl text-[15px] leading-relaxed text-muted sm:mb-12 sm:text-base text-pretty">
          {t.profile.tagline}
        </p>

        <div className="animate-rise animate-delay-300 flex flex-wrap items-center gap-x-8 gap-y-3">
          <a href="#about" className="text-link">
            <span>{t.hero.viewResume}</span>
            <span className="text-link-arrow" aria-hidden="true">
              →
            </span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link-muted"
          >
            <span>{t.hero.github}</span>
            <span className="text-link-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
