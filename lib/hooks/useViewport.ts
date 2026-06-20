"use client";

import { useEffect, useState } from "react";
import {
  BREAKPOINTS,
  getBreakpoint,
  getViewportSize,
  type BreakpointKey,
  type ViewportSize,
} from "@/lib/breakpoints";

export interface ViewportState {
  width: number;
  height: number;
  breakpoint: BreakpointKey | "xs";
  viewport: ViewportSize;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const DEFAULT_STATE: ViewportState = {
  width: 0,
  height: 0,
  breakpoint: "xs",
  viewport: "mobile",
  isMobile: true,
  isTablet: false,
  isDesktop: false,
};

function readViewport(): ViewportState {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const viewport = getViewportSize(width);

  return {
    width,
    height,
    breakpoint: getBreakpoint(width),
    viewport,
    isMobile: viewport === "mobile",
    isTablet: viewport === "tablet",
    isDesktop: viewport === "desktop",
  };
}

/** 读取当前窗口尺寸与断点，resize / matchMedia 变化时自动更新 */
export function useViewport(): ViewportState {
  const [state, setState] = useState<ViewportState>(DEFAULT_STATE);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setState(readViewport()));
    };

    const queries = [
      `(max-width: ${BREAKPOINTS.md - 1}px)`,
      `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`,
      `(min-width: ${BREAKPOINTS.lg}px)`,
    ].map((query) => window.matchMedia(query));

    queries.forEach((mql) => mql.addEventListener("change", update));
    window.addEventListener("resize", update, { passive: true });
    update();

    return () => {
      cancelAnimationFrame(raf);
      queries.forEach((mql) => mql.removeEventListener("change", update));
      window.removeEventListener("resize", update);
    };
  }, []);

  return state;
}

/** 监听任意 CSS media query，例如 useMediaQuery(MEDIA_QUERIES.mdUp) */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
