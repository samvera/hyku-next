import { expect, test } from "@playwright/test";

test("homepage elements", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading")).toContainText(
    "The Next Generation Repository Solution",
  );
  await expect(page.getByRole("main")).toContainText(
    "Hyku is a digital repository that provides a robust and flexible platform for institutions to manage, preserve, and provide access to digital content.",
  );

  await page.getByRole("link", { name: "Get started" }).click();
  await page.waitForURL("**/getting-started");

  await expect(page.locator("h1")).toContainText("Getting Started");

  await page.goto("/");
  await page.waitForURL("/");

  await expect(page.getByRole("main")).toContainText("Documentation →");
  await expect(page.getByRole("img", { name: "App screenshot" })).toBeVisible();
});
