import { COLORS, TEXT_STYLES, monoStyle, sansStyle } from "@fxshelf/swarm-cursors";

/** Layout constants used by SceneBuilder frames (same as package theme.js). */
export const FRAME_LEFT = 80;
export const CONTENT_LEFT = FRAME_LEFT + 36;

const LIGHT_COLORS = {
  ink: "#1A1C1F",
  muted: "#5E646C",
  line: "#D5D8DE",
  accent: "#0D99FF",
  card: "#FFFFFF",
  solid: "#1A1C1F",
  onSolid: "#FFFFFF",
  track: "#E1E3E6",
  stem: "#9DA2A9",
  dim: "#8F949B",
  wash: "#F3F9FF",
  code: "#1E1E1E",
};

const DARK_COLORS = {
  ink: "#E8ECF1",
  muted: "#8B93A1",
  line: "#2C3846",
  accent: "#5EB8C6",
  card: "#16202A",
  solid: "#E8ECF1",
  onSolid: "#0E141B",
  track: "#24303C",
  stem: "#6A727C",
  dim: "#8B93A1",
  wash: "#16303A",
  code: "#0A0E12",
};

/**
 * Refresh package COLORS / TEXT_STYLES for light or dark.
 * Needed because applyScenePalette is not exported, and the published
 * bundle currently drops dark palette branches.
 * @param {"light"|"dark"} resolved
 */
export function applyScenePalette(resolved) {
  Object.assign(COLORS, resolved === "dark" ? DARK_COLORS : LIGHT_COLORS);
  Object.assign(TEXT_STYLES, {
    h1: sansStyle(64, 600, 1.02, COLORS.ink, -0.035),
    h2: sansStyle(40, 600, 1.08, COLORS.ink, -0.03),
    h3: sansStyle(21, 600, 1.25, COLORS.ink, -0.012),
    lead: sansStyle(19, 400, 1.5, COLORS.muted, -0.005),
    body: sansStyle(15.5, 400, 1.55, COLORS.muted),
    item: sansStyle(14.5, 450, 1.4, COLORS.ink),
    nav: sansStyle(14, 500, 1.4, COLORS.ink),
    btn: sansStyle(14.5, 600, 1.4, COLORS.onSolid),
    btnDark: sansStyle(14.5, 600, 1.4, COLORS.ink),
    logo: sansStyle(19, 650, 1.3, COLORS.muted, -0.025),
    brand: sansStyle(18, 650, 1.3, COLORS.ink, -0.02),
    stat: sansStyle(52, 600, 1, COLORS.ink, -0.04),
    price: sansStyle(44, 600, 1.05, COLORS.ink, -0.035),
    code: monoStyle(13.5, "#E0E2E5", 400, { lh: 1.7, code: true, pre: true }),
    codeDim: monoStyle(12, "#81868D"),
    nodeName: monoStyle(13, COLORS.ink, 500),
    nodeWhite: monoStyle(14, COLORS.onSolid, 500),
    small: monoStyle(12, COLORS.muted),
  });
}
