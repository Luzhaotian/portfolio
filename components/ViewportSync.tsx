"use client";

import { useEffect } from "react";
import { useViewport } from "@/lib/hooks/useViewport";

/** 将视口状态同步到 <html>，供 CSS [data-viewport] 与全局样式使用 */
export default function ViewportSync() {
  const { viewport, isMobile, breakpoint } = useViewport();

  useEffect(() => {
    const root = document.documentElement;

    root.dataset.viewport = viewport;
    root.dataset.breakpoint = breakpoint;
    root.classList.toggle("is-mobile", isMobile);
    root.classList.toggle("is-desktop", !isMobile);

    return () => {
      delete root.dataset.viewport;
      delete root.dataset.breakpoint;
      root.classList.remove("is-mobile", "is-desktop");
    };
  }, [viewport, isMobile, breakpoint]);

  return null;
}
