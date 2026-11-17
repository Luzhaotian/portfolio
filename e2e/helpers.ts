import { type Page, expect } from "@playwright/test";

export const STYLE_ROUTES = [
  "/atelier",
  "/classic",
  "/particle",
  "/blueprint",
] as const;

export type StyleRoute = (typeof STYLE_ROUTES)[number];

const STORAGE_KEYS = [
  "portfolio-theme",
  "portfolio-locale",
  "portfolio-style",
  "portfolio-cookie-consent",
] as const;

/** Clear preference keys on the current origin (call after a same-origin navigation). */
export async function clearClientStorage(page: Page) {
  await page.evaluate(
    (keys) => {
      for (const key of keys) localStorage.removeItem(key);
    },
    [...STORAGE_KEYS]
  );
}

/**
 * Open a style route with a clean preference state.
 * Clears storage once, then reloads so init scripts see the empty state.
 * Blueprint stays on the drawn page. Other styles expose #main-content.
 */
export async function gotoStyle(page: Page, route: StyleRoute) {
  await page.goto(route);
  await clearClientStorage(page);
  await page.reload();
  if (route === "/blueprint") {
    await expect(page.locator(".swarm-experience")).toBeVisible({ timeout: 30_000 });
    await expect(
      page.getByRole("navigation", { name: /主导航|Main navigation/ })
    ).toBeVisible({
      timeout: 30_000,
    });
    await expect(
      page.getByRole("button", { name: /跳过动画|Skip animation/i })
    ).toHaveCount(0);
  } else {
    await expect(page.locator("#main-content")).toBeVisible({ timeout: 30_000 });
  }
  await expect(page.locator("html")).toHaveAttribute("data-style", route.slice(1));
}

export async function dismissCookieConsent(page: Page) {
  const consent = consentDialog(page);
  if (await consent.isVisible().catch(() => false)) {
    await consent
      .getByRole("button")
      .filter({ hasText: /接受|Accept/i })
      .click();
    await expect(consent).toBeHidden();
  }
}

/** Style metadata titles from styles/<id>/meta.ts. */
export const STYLE_TITLES: Record<StyleRoute, string> = {
  "/atelier": "卢照天 | 静奢",
  "/classic": "卢照天 | 经典",
  "/particle": "卢照天 | 粒子",
  "/blueprint": "卢照天 | 蓝图",
};

/** Document titles applied client-side by I18nProvider. */
export const SITE_TITLE_ZH = "卢照天 | 高级前端工程师";
export const SITE_TITLE_EN = "Luzhaotian | Senior Frontend Engineer";

export const CONSENT_DIALOG =
  '[role="dialog"][aria-labelledby="cookie-consent-title"]';

export function consentDialog(page: Page) {
  return page.locator(CONSENT_DIALOG);
}

/** Floating back-to-top control; copy follows the active locale. */
export function backToTopButton(page: Page, locale: "zh" | "en" = "zh") {
  return page.getByRole("button", {
    name: locale === "en" ? /Back to top/ : /回到顶部/,
  });
}

/**
 * Open /blueprint in its settled (non-drawn) state.
 * Used with reduced-motion or mobile viewports, where Home skips BuildPhase.
 */
export async function gotoBlueprintSettled(page: Page) {
  await page.goto("/blueprint");
  await clearClientStorage(page);
  await page.reload();
  await expect(page.locator("#main-content")).toBeVisible({ timeout: 30_000 });
  await expect(page.locator(".swarm-experience")).toHaveCount(0);
  await expect(page.locator("html")).toHaveAttribute("data-style", "blueprint");
}
