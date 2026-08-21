import { atelierStyle } from "@/styles/atelier/meta";
import { classicStyle } from "@/styles/classic/meta";
import type { StyleDefinition, StyleMode } from "@/styles/types";

/**
 * Style catalog — add a new entry (and `styles/<id>/`) to extend.
 * Routes, StyleRail, FOUC script, and Uno tokens all derive from this.
 */
export const STYLE_REGISTRY = {
  atelier: atelierStyle,
  classic: classicStyle,
} as const satisfies Record<StyleMode, StyleDefinition>;

export type { StyleMode, StyleDefinition } from "@/styles/types";

export const STYLE_IDS = Object.keys(STYLE_REGISTRY) as StyleMode[];

export const DEFAULT_STYLE: StyleMode = "atelier";

export const STYLE_PATHS: Record<StyleMode, string> = {
  atelier: atelierStyle.path,
  classic: classicStyle.path,
};

export function getStyleDefinition(mode: StyleMode): StyleDefinition {
  return STYLE_REGISTRY[mode];
}

export function isStyleMode(value: unknown): value is StyleMode {
  return typeof value === "string" && value in STYLE_REGISTRY;
}
