"use client";

import type { ReactNode } from "react";
import StyleRail from "@/styles/shared/chrome/StyleRail";
import { StyleProvider } from "@/styles/shared/providers/StyleProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { StyleMode } from "@/styles/registry";

export default function AppProviders({
  style,
  children,
}: {
  style: StyleMode;
  children: ReactNode;
}) {
  return (
    <ThemeProvider>
      <StyleProvider style={style}>
        {children}
        <StyleRail />
      </StyleProvider>
    </ThemeProvider>
  );
}
