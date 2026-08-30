import type { StyleDefinition } from "@/styles/types";

export const particleStyle = {
  id: "particle",
  path: "/particle",
  favicon: "/favicon-particle.svg",
  title: "卢照天 | 粒子",
  labelKey: "particle",
  chrome: "atelier",
} as const satisfies StyleDefinition;
