import { expect, test } from "@playwright/test";
import { gotoStyle } from "./helpers";

test.describe("atelier canvas layers", () => {
  test.beforeEach(async ({ page }) => {
    await gotoStyle(page, "/atelier");
  });

  test("pointer aura renders its three layers", async ({ page }) => {
    await expect(page.locator(".pointer-aura")).toHaveCount(3);
  });

  test("hero particle object renders a canvas", async ({ page }) => {
    await expect(page.locator("#top canvas")).toHaveCount(1);
  });

  test("selected projects use the flame wrap canvases", async ({ page }) => {
    const canvases = page.locator("#selected canvas");
    await expect.poll(async () => canvases.count()).toBeGreaterThanOrEqual(2);
  });

  test("footer shatter renders its canvases", async ({ page }) => {
    await expect(page.locator("footer canvas")).toHaveCount(2);
  });
});

test.describe("atelier sections", () => {
  test("exposes selected and work index sections", async ({ page }) => {
    await gotoStyle(page, "/atelier");

    await expect(page.locator("#selected")).toContainText("近期企业项目");
    await expect(page.locator("#work")).toContainText("近期企业项目");
  });
});
