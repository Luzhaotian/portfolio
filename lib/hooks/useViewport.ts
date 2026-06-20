"use client";

import { useEffect, useState } from "react";
import { getViewportSize, MEDIA_QUERIES, type ViewportSize } from "@/lib/breakpoints";

export interface ViewportState {
  viewport: ViewportSize;
  isMobile: boolean;
}

const DEFAULT_STATE: ViewportState = {
  viewport: "mobile",
  isMobile: true,
};

function readViewport(): ViewportState {
  const viewport = getViewportSize(window.innerWidth);
  return {
    viewport,
    isMobile: viewport === "mobile",
  };
}

/** 读取当前视口档位，resize / matchMedia 变化时自动更新 */
export function useViewport(): ViewportState {
  const [state, setState] = useState<ViewportState>(DEFAULT_STATE);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setState(readViewport()));
    };

    const queries = [
      MEDIA_QUERIES.mobile,
      MEDIA_QUERIES.tablet,
      MEDIA_QUERIES.desktop,
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
