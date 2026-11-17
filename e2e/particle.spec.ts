import { expect, test } from "@playwright/test";
import { gotoStyle } from "./helpers";

test.describe("particle snap navigation", () => {
  test.beforeEach(async ({ page }) => {
    await gotoStyle(page, "/particle");
  });

  test("desktop uses the snap column and marks the active section", async ({ page }) => {
    const column = page.locator(".particle-snap-column");
    await expect(column).toBeVisible();

    const top = page.getByRole("button", { name: "卢照天" });
    const about = page.getByRole("button", { name: "关于我" });
    await expect(top).toHaveAttribute("data-active", "true");
    await expect(about).toHaveAttribute("data-active", "false");

    await about.click();

    await expect(about).toHaveAttribute("data-active", "true");
    await expect.poll(() => column.evaluate((el) => el.scrollTop)).toBeGreaterThan(0);
  });

  test("arrow keys snap to the next section", async ({ page }) => {
    // The snap controller ignores keys while the particle stage is busy with
    // its initial load, so wait until navigation is actually unlocked.
    await expect(page.locator(".particle-stage")).toHaveAttribute(
      "data-ready",
      "true"
    );

    await page.keyboard.press("ArrowDown");

    await expect(
      page.getByRole("button", { name: "关于我" })
    ).toHaveAttribute("data-active", "true");
  });

  test("particle stage renders a canvas or image fallback", async ({ page }) => {
    await expect(page.locator(".particle-stage")).toBeVisible();
    await expect(
      page.locator(".particle-stage canvas, .particle-stage img")
    ).toHaveCount(1);
  });

  test("mobile falls back to a native scroll column", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    await expect(page.locator(".particle-snap-column")).toHaveCount(0);
    await expect(page.locator(".particle-column")).toBeVisible();
  });
});

test.describe("particle reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  test("fallback artwork follows section navigation", async ({ page }) => {
    await gotoStyle(page, "/particle");

    const stageImage = page.locator(".particle-stage img");
    await expect(stageImage).toBeVisible();
    await expect(stageImage).toHaveAttribute("src", /portrait-mark\.svg/);

    await page.getByRole("button", { name: "关于我" }).click();

    await expect(stageImage).not.toHaveAttribute("src", /portrait-mark\.svg/);
  });
});
