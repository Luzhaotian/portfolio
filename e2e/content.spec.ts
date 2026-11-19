import { expect, test } from "@playwright/test";
import {
  STYLE_ROUTES,
  backToTopButton,
  dismissCookieConsent,
  gotoBlueprintSettled,
  gotoStyle,
} from "./helpers";

/** Styles that render a DOM page (blueprint draws on canvas until started). */
const DOM_ROUTES = STYLE_ROUTES.filter((route) => route !== "/blueprint");

test.describe("shared content", () => {
  for (const route of DOM_ROUTES) {
    test(`${route} renders profile, section copy and footer`, async ({ page }) => {
      await gotoStyle(page, route);

      await expect(page.getByRole("heading", { level: 1 })).toHaveText(/卢照天/);
      await expect(page.locator("#about")).toContainText("关于我");
      await expect(page.locator("#skills")).toContainText("技术栈");
      await expect(page.locator("#blog")).toContainText("技术博客");
      await expect(page.locator("#experience")).toContainText("经验领域");
      await expect(page.locator("#skills")).toContainText("Vue 2/3");
      await expect(page.locator("#blog")).toContainText("我把 Cursor 调教成");

      const footer = page.locator("footer");
      await expect(footer).toContainText(/© \d{4} 卢照天/);
      await expect(footer.getByRole("link", { name: "CSDN" })).toHaveAttribute(
        "href",
        "https://blog.csdn.net/paopao_pop"
      );
    });
  }
});

test.describe("hero calls to action", () => {
  for (const route of ["/atelier", "/classic"] as const) {
    test(`${route} links to about and GitHub`, async ({ page }) => {
      await gotoStyle(page, route);

      await expect(
        page.getByRole("link", { name: /查看履历|View resume/ })
      ).toHaveAttribute("href", "#about");
      await expect(
        page.locator("section").first().getByRole("link", { name: "GitHub" })
      ).toHaveAttribute("href", "https://github.com/Luzhaotian");
    });
  }

  test("/particle links to GitHub and about", async ({ page }) => {
    await gotoStyle(page, "/particle");

    await expect(
      page.locator("#top").getByRole("link", { name: "GitHub" })
    ).toHaveAttribute("href", "https://github.com/Luzhaotian");
    await expect(
      page.locator("#top").getByRole("link", { name: "关于我" })
    ).toHaveAttribute("href", "#about");
  });
});

test.describe("skip link", () => {
  for (const route of DOM_ROUTES) {
    test(`${route} focuses on Tab and jumps to main content`, async ({ page }) => {
      await gotoStyle(page, route);

      const skip = page.locator("a.skip-link");
      await expect(skip).toHaveAttribute("href", "#main-content");

      await page.keyboard.press("Tab");
      await expect(skip).toBeFocused();
      await expect
        .poll(() => skip.evaluate((el) => getComputedStyle(el).opacity))
        .toBe("1");

      await page.keyboard.press("Enter");
      await expect
        .poll(() => page.evaluate(() => window.location.hash))
        .toBe("#main-content");
    });
  }
});

test.describe("back to top", () => {
  test.describe("window-scrolled styles", () => {
    // Reduced motion skips the full-page canvas backgrounds (the renderer
    // crash source on CI runners) and makes scrollToTop instant, so the
    // scroll-back assertion has no smooth-scroll race.
    test.use({ reducedMotion: "reduce" });

    for (const route of ["/atelier", "/classic"] as const) {
      test(`${route} appears after scrolling and returns to top`, async ({ page }) => {
        await gotoStyle(page, route);
        await dismissCookieConsent(page);

        const backToTop = backToTopButton(page);
        await expect(backToTop).toBeHidden();

        await page.evaluate(() => window.scrollTo({ top: 1200, behavior: "instant" }));
        await expect(backToTop).toBeVisible();

        await backToTop.click();
        await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
        await expect(backToTop).toBeHidden();
      });
    }
  });

  test("/particle scrolls its own column back to top", async ({ page }) => {
    await gotoStyle(page, "/particle");
    await dismissCookieConsent(page);

    const column = page.locator(".particle-snap-column");
    const backToTop = backToTopButton(page);
    await expect(backToTop).toBeHidden();

    await column.evaluate((el) => el.scrollTo({ top: 900, behavior: "instant" }));
    await expect(backToTop).toBeVisible();

    await backToTop.click();
    await expect.poll(() => column.evaluate((el) => el.scrollTop)).toBe(0);
  });
});

test.describe("blueprint settled content", () => {
  test.use({ reducedMotion: "reduce" });

  test("reduced motion renders the full settled page", async ({ page }) => {
    await gotoBlueprintSettled(page);

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(/卢照天/);
    await expect(page.locator("#about")).toContainText("关于我");
    await expect(page.locator("#work")).toContainText("近期企业项目");
    await expect(page.locator("#skills")).toContainText("技术栈");
    await expect(page.locator("#blog")).toContainText("技术博客");
    await expect(page.locator("#experience")).toContainText("经验领域");
    await expect(page.locator("#selected")).toHaveCount(0);

    await expect(page.locator("footer")).toContainText(/© \d{4} 卢照天/);
  });

  test("settled back to top appears only after scrolling", async ({ page }) => {
    await gotoBlueprintSettled(page);

    await expect(backToTopButton(page)).toHaveCount(0);
    await page.evaluate(() => window.scrollTo({ top: 900, behavior: "instant" }));
    await expect(backToTopButton(page)).toBeVisible();
  });

  test("settled skip link jumps to main content", async ({ page }) => {
    await gotoBlueprintSettled(page);

    const skip = page.locator("a.skip-link");
    await expect(skip).toHaveAttribute("href", "#main-content");
    await page.keyboard.press("Tab");
    await expect(skip).toBeFocused();
    await page.keyboard.press("Enter");
    await expect
      .poll(() => page.evaluate(() => window.location.hash))
      .toBe("#main-content");
  });
});
