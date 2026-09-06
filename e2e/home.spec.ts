import { expect, test } from "@playwright/test";

test.describe("home redirect", () => {
  test("defaults to atelier when no stored style", async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.removeItem("portfolio-style");
    });
    await page.goto("/");
    await page.waitForURL(/\/atelier\/?$/);
    await expect(page.locator("html")).toHaveAttribute("data-style", "atelier");
  });

  test("honors last chosen style from localStorage", async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem("portfolio-style", "particle");
    });
    await page.goto("/");
    await page.waitForURL(/\/particle\/?$/);
    await expect(page.locator("html")).toHaveAttribute("data-style", "particle");
  });
});
