import { expect, test } from "@playwright/test";
import { gotoStyle } from "./helpers";

test.describe("classic vanta background", () => {
  test("mounts a WebGL canvas behind the content", async ({ page }) => {
    await gotoStyle(page, "/classic");

    const container = page.locator("div.fixed.inset-0.z-0");
    await expect(container).toBeVisible();
    await expect(container.locator("canvas")).toHaveCount(1, { timeout: 15_000 });
  });

  test("hero resume link jumps to about", async ({ page }) => {
    await gotoStyle(page, "/classic");

    await expect(
      page.getByRole("link", { name: /查看履历|View resume/ })
    ).toHaveAttribute("href", "#about");
  });
});

test.describe("classic project sections", () => {
  test.beforeEach(async ({ page }) => {
    await gotoStyle(page, "/classic");
  });

  test("renders enterprise projects", async ({ page }) => {
    const enterprise = page.locator("#enterprise");
    await expect(enterprise).toContainText("近期企业项目");
    await expect(enterprise).toContainText("ce-telephone SDK");
    await expect(enterprise).toContainText("TypeScript");
  });

  test("renders open source projects with repository links", async ({ page }) => {
    const openSource = page.locator("#github");
    await expect(openSource).toContainText("开源项目");
    await expect(openSource).toContainText("card-orbit");

    await expect(
      openSource.getByRole("link", { name: "card-orbit" })
    ).toHaveAttribute(
      "href",
      "https://github.com/Luzhaotian/fxshelf/tree/main/packages/card-orbit"
    );
    await expect(
      openSource.getByRole("link", { name: /查看仓库/ }).first()
    ).toHaveAttribute(
      "href",
      "https://github.com/Luzhaotian/fxshelf/tree/main/packages/card-orbit"
    );
  });
});
