"use client";

import { useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import NET from "vanta/dist/vanta.net.min";
import { getVantaTHREE } from "@/lib/vantaThree";

type VantaEffect = { destroy: () => void };

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

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const THREE = getVantaTHREE();
    let effect: VantaEffect | null = null;
    let fallbackTimer: number | undefined;

    const initNet = () => {
      effect?.destroy();
      effect = NET({
        el,
        THREE,
        ...SHARED_OPTIONS,
        color: 0x2563eb,
        points: 14,
        maxDistance: 24,
        spacing: 17,
      });
    };

    try {
      effect = BIRDS({
        el,
        THREE,
        ...SHARED_OPTIONS,
        color1: 0x2563eb,
        color2: 0x2563eb,
        colorMode: "lerp",
        birdSize: 1.15,
        wingSpan: 28,
        speedLimit: 4.5,
        separation: 22,
        alignment: 22,
        cohesion: 22,
        quantity: 4,
      });

      // BIRDS 内部 GPGPU 失败时不会 throw，延迟检测 canvas 是否渲染
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

    return () => {
      clearTimeout(fallbackTimer);
      effect?.destroy();
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
