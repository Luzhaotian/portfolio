import { expect, test } from "@playwright/test";
import {
  SITE_TITLE_EN,
  SITE_TITLE_ZH,
  STYLE_ROUTES,
  STYLE_TITLES,
  clearClientStorage,
  consentDialog,
  dismissCookieConsent,
  gotoStyle,
} from "./helpers";

test.describe("cookie consent", () => {
  test("rejecting persists across reloads", async ({ page }) => {
    await page.goto("/atelier");
    await clearClientStorage(page);
    await page.reload();
    await expect(page.locator("#main-content")).toBeVisible({ timeout: 30_000 });

    const dialog = consentDialog(page);
    await expect(dialog).toBeVisible();
    await dialog.getByRole("button", { name: "全部拒绝" }).click();
    await expect(dialog).toBeHidden();
    expect(
      await page.evaluate(() => localStorage.getItem("portfolio-cookie-consent"))
    ).toBe("rejected");

    await page.reload();
    await expect(page.locator("#main-content")).toBeVisible({ timeout: 30_000 });
    await expect(dialog).toBeHidden();
  });
});

test.describe("routing edge cases", () => {
  test("unknown route responds with 404", async ({ page }) => {
    const response = await page.goto("/this-route-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByText("404").first()).toBeVisible();
  });

  test("visiting a style route is remembered by the home redirect", async ({ page }) => {
    await gotoStyle(page, "/classic");
    expect(
      await page.evaluate(() => localStorage.getItem("portfolio-style"))
    ).toBe("classic");

    await page.goto("/");
    await page.waitForURL(/\/classic\/?$/);
    await expect(page.locator("html")).toHaveAttribute("data-style", "classic");
  });

  test("invalid stored style falls back to the default", async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem("portfolio-style", "not-a-style");
    });
    await page.goto("/");
    await page.waitForURL(/\/blueprint\/?$/);
    await expect(page.locator("html")).toHaveAttribute("data-style", "blueprint");
  });
});

test.describe("stored preference validation", () => {
  test("invalid locale and theme values fall back to defaults", async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem("portfolio-locale", "klingon");
      localStorage.setItem("portfolio-theme", "neon");
    });
    await gotoStyle(page, "/atelier");

    await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");
    await expect(page.locator("html")).toHaveAttribute("data-locale", "zh");
    await expect(page.locator("html")).toHaveAttribute("data-theme-mode", "auto");
  });
});

test.describe("skill share failure", () => {
  test("reports copy failure when the clipboard is unavailable", async ({ page }) => {
    await gotoStyle(page, "/atelier");
    await dismissCookieConsent(page);

    await page.evaluate(() => {
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: undefined,
      });
      document.execCommand = (() => false) as typeof document.execCommand;
    });

    await page.getByRole("button", { name: /复制 Skill|Copy skill/i }).click();
    await expect(page.getByRole("tooltip")).toContainText(/复制失败|Copy failed/);
  });
});

test.describe("document metadata", () => {
  for (const route of STYLE_ROUTES) {
    test(`${route} loads without uncaught page errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text());
      });

      await gotoStyle(page, route);

      expect(errors, errors.join("\n")).toEqual([]);
    });
  }

  for (const route of STYLE_ROUTES) {
    test(`${route} uses its style metadata title`, async ({ page }) => {
      await gotoStyle(page, route);
      await expect(page).toHaveTitle(STYLE_TITLES[route]);
    });
  }

  test("default locale drives lang and meta tags", async ({ page }) => {
    await gotoStyle(page, "/atelier");

    await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /8 年经验的高级前端工程师/
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      SITE_TITLE_ZH
    );
  });

  test("switching to English updates the document title", async ({ page }) => {
    await gotoStyle(page, "/atelier");
    await dismissCookieConsent(page);

    await page.getByRole("group", { name: "Language" }).getByRole("button", { name: "English" }).click();

    await expect(page).toHaveTitle(SITE_TITLE_EN);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });
});

test.describe("viewport sync", () => {
  test("html data-viewport tracks breakpoints", async ({ page }) => {
    await gotoStyle(page, "/atelier");

    await expect(page.locator("html")).toHaveAttribute("data-viewport", "desktop");

    await page.setViewportSize({ width: 800, height: 900 });
    await expect(page.locator("html")).toHaveAttribute("data-viewport", "tablet");

    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.locator("html")).toHaveAttribute("data-viewport", "mobile");
  });
});
