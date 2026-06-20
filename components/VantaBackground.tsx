"use client";

import { useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import NET from "vanta/dist/vanta.net.min";
import { BREAKPOINTS } from "@/lib/breakpoints";
import { getVantaTHREE } from "@/lib/vantaThree";

type VantaEffect = { destroy: () => void; resize?: () => void };

const SHARED_OPTIONS = {
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200,
  minWidth: 200,
  scale: 1,
  scaleMobile: 0.85,
  backgroundColor: 0x050508,
};

export default function VantaBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const THREE = getVantaTHREE();
    let effect: VantaEffect | null = null;
    let fallbackTimer: number | undefined;
    const isMobile = window.innerWidth < BREAKPOINTS.md;

    const initNet = () => {
      effect?.destroy();
      effect = NET({
        el,
        THREE,
        ...SHARED_OPTIONS,
        color: 0x14b8a6,
        points: isMobile ? 10 : 14,
        maxDistance: isMobile ? 18 : 24,
        spacing: isMobile ? 20 : 17,
      });
      effectRef.current = effect;
    };

    try {
      effect = BIRDS({
        el,
        THREE,
        ...SHARED_OPTIONS,
        color1: 0x14b8a6,
        color2: 0x14b8a6,
        colorMode: "lerp",
        birdSize: isMobile ? 1 : 1.15,
        wingSpan: isMobile ? 22 : 28,
        speedLimit: isMobile ? 3.5 : 4.5,
        separation: 22,
        alignment: 22,
        cohesion: 22,
        quantity: isMobile ? 2 : 4,
      });
      effectRef.current = effect;

      fallbackTimer = window.setTimeout(() => {
        const canvas = el.querySelector("canvas");
        if (!canvas || canvas.clientHeight < 50) {
          console.warn("[Vanta] BIRDS 未渲染，回退到 NET 效果");
          initNet();
        }
      }, 500);
    } catch (error) {
      console.warn("[Vanta] BIRDS 初始化失败，回退到 NET 效果", error);
      initNet();
    }

    const onResize = () => effectRef.current?.resize?.();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("resize", onResize);
      effect?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 min-h-screen min-w-full"
      aria-hidden="true"
    />
  );
}
