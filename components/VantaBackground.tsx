"use client";

import { useEffect, useRef } from "react";
import { BREAKPOINTS, MEDIA_QUERIES } from "@/lib/breakpoints";
import { useTheme } from "@/components/ThemeProvider";
import { getVantaTHREE } from "@/lib/vantaThree";

type VantaEffect = { destroy: () => void; resize?: () => void };

const THEME_COLORS = {
  dark: { bg: 0x050508, accent: 0x14b8a6 },
  light: { bg: 0xe2e8f0, accent: 0x0d9488 },
} as const;

function getThemeColors(resolved: "light" | "dark") {
  return THEME_COLORS[resolved];
}

export default function VantaBackground() {
  const { resolved } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia(MEDIA_QUERIES.reducedMotion).matches) return;

    const THREE = getVantaTHREE();
    let effect: VantaEffect | null = null;
    let fallbackTimer: number | undefined;
    let cancelled = false;
    const isMobile = window.innerWidth < BREAKPOINTS.md;
    const colors = getThemeColors(resolved);

    const sharedOptions = {
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 0.85,
      backgroundColor: colors.bg,
    };

    const initNet = async () => {
      const { default: NET } = await import("vanta/dist/vanta.net.min");
      if (cancelled) return;
      effect?.destroy();
      effect = NET({
        el,
        THREE,
        ...sharedOptions,
        color: colors.accent,
        points: isMobile ? 10 : 14,
        maxDistance: isMobile ? 18 : 24,
        spacing: isMobile ? 20 : 17,
      });
      effectRef.current = effect;
    };

    const init = async () => {
      if (isMobile || resolved === "light") {
        await initNet();
        return;
      }

      try {
        const { default: BIRDS } = await import("vanta/dist/vanta.birds.min");
        if (cancelled) return;

        effect = BIRDS({
          el,
          THREE,
          ...sharedOptions,
          color1: colors.accent,
          color2: colors.accent,
          colorMode: "lerp",
          birdSize: 1.15,
          wingSpan: 28,
          speedLimit: 4.5,
          separation: 22,
          alignment: 22,
          cohesion: 22,
          quantity: 4,
        });
        effectRef.current = effect;

        fallbackTimer = window.setTimeout(() => {
          const canvas = el.querySelector("canvas");
          if (!canvas || canvas.clientHeight < 50) {
            console.warn("[Vanta] BIRDS 未渲染，回退到 NET 效果");
            void initNet();
          }
        }, 500);
      } catch (error) {
        console.warn("[Vanta] BIRDS 初始化失败，回退到 NET 效果", error);
        await initNet();
      }
    };

    void init();

    const onResize = () => effectRef.current?.resize?.();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelled = true;
      clearTimeout(fallbackTimer);
      window.removeEventListener("resize", onResize);
      effect?.destroy();
      effectRef.current = null;
    };
  }, [resolved]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 min-h-screen min-w-full transition-opacity duration-300"
      aria-hidden="true"
    />
  );
}
