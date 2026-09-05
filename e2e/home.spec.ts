import { expect, test } from "@playwright/test";

test("home redirects to a style route", async ({ page }) => {
  await page.goto("/");
  await page.waitForURL(/\/(classic|atelier|particle)\/?$/);
  await expect(page.locator("html")).toHaveAttribute("data-style", /classic|atelier|particle/);
});
