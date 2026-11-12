import type { StyleDefinition } from "@/styles/types";

export const blueprintStyle = {
  id: "blueprint",
  path: "/blueprint",
  favicon: "/favicon-blueprint.svg",
  title: "卢照天 | 蓝图",
  labelKey: "blueprint",
  chrome: "atelier",
} as const satisfies StyleDefinition;
