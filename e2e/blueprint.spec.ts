import { expect, test } from "@playwright/test";
import { gotoBlueprintSettled, gotoStyle } from "./helpers";

test.describe("blueprint build phase", () => {
  test.beforeEach(async ({ page }) => {
    await gotoStyle(page, "/blueprint");
  });

  test("intro trigger starts drawing the page", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Start building the page" });
    await expect(trigger).toBeVisible();
    await expect(page.locator(".intro-logo")).toHaveAttribute("aria-hidden", "false");

    await trigger.click();

    await expect(page.locator(".intro-logo")).toHaveAttribute("aria-hidden", "true");
    await expect(page.locator(".intro-logo")).toHaveClass(/gone/);
    await expect(page.locator(".intro-trigger")).toBeDisabled();
  });

  test("start hint fades out once drawing starts", async ({ page }) => {
    const hint = page.getByText("点击或下滑，光标会逐屏把这一页画出来");
    await expect(hint).toBeVisible();

    await page.getByRole("button", { name: "Start building the page" }).click();

    await expect(hint).toHaveClass(/opacity-0/);
  });

  test("replay rebuilds the scene from scratch", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Start building the page" });
    await trigger.click();
    await expect(page.locator(".intro-logo")).toHaveAttribute("aria-hidden", "true");

    const replay = page.getByRole("button", { name: "重播共建" });
    await expect(replay).toBeVisible();
    await replay.click();

    // Remounted engine: intro mark returns and the trigger is armed again.
    await expect(page.locator(".intro-logo")).toHaveAttribute("aria-hidden", "false");
    await expect(trigger).toBeEnabled();
    await expect(page.locator(".swarm-experience")).toBeVisible();
  });

  test("build chrome exposes compact theme and locale toggles", async ({ page }) => {
    await expect(
      page.getByRole("group", { name: "主题模式" })
    ).toBeVisible();
    await expect(page.getByRole("group", { name: "Language" })).toBeVisible();
  });

  test("drawn navigation is exposed as the main navigation", async ({ page }) => {
    const nav = page.getByRole("navigation", { name: /主导航|Main navigation/ });
    await expect(nav).toBeVisible();

    await page.getByRole("button", { name: "Start building the page" }).click();

    await expect(nav).toContainText("卢照天");
  });
});

test.describe("blueprint settled page", () => {
  test.use({ reducedMotion: "reduce" });

  test("reduced motion skips the drawn build", async ({ page }) => {
    await gotoBlueprintSettled(page);

    await expect(page.locator(".swarm-experience")).toHaveCount(0);
    await expect(page.locator("#main-content")).toBeVisible();
  });

  test("mobile viewport also lands on the settled page", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await gotoBlueprintSettled(page);

    await expect(page.locator(".swarm-experience")).toHaveCount(0);
    await expect(page.locator("#about")).toContainText("关于我");
  });

  test("settled hero keeps a replay affordance", async ({ page }) => {
    await gotoBlueprintSettled(page);

    await expect(
      page.locator("#top").getByRole("button", { name: "重播共建" })
    ).toBeVisible();
    await expect(
      page.locator("#top").getByRole("link", { name: "GitHub" })
    ).toHaveAttribute("href", "https://github.com/Luzhaotian");
  });
});
