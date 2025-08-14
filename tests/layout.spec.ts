import { expect, test } from "@playwright/test";

const links = [
  "Features and Implementations",
  "Getting Started",
  "Presentations and Demos",
  "News",
  "Contact",
];

test("has main heading and top level navigation", async ({
  page,
}, testInfo) => {
  const isMobile = testInfo.project.name.includes("Mobile");

  await page.goto("/");
  await page.waitForURL("/");

  const header = page.getByLabel("Global");
  await expect(header).toBeVisible();

  await expect(header.getByAltText("Hyku logo")).toBeVisible();

  // Test desktop navigation
  if (!isMobile) {
    await page
      .getByRole("link", { name: "Features and Implementations" })
      .nth(1)
      .click();
    await expect(
      page.getByRole("heading", { name: "Features and Implementations" }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Getting Started" }).nth(1).click();
    await expect(
      page.getByRole("heading", { name: "Getting Started" }),
    ).toBeVisible();

    await page
      .getByRole("link", { name: "Presentations and Demos" })
      .nth(1)
      .click();
    await page.waitForURL("/presentations");
    await expect(
      page.getByRole("heading", { name: "Presentations and Demos" }),
    ).toBeVisible();

    await page.getByRole("link", { name: "News" }).nth(1).click();
    await page.waitForURL("/news");
    await expect(
      page.getByRole("heading", { name: "News and Events" }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Contact" }).nth(1).click();
    await page.waitForURL("/contact");
    await expect(
      page.getByRole("heading", { name: "Get in touch" }),
    ).toBeVisible();

    await expect(
      page.getByRole("link", { name: "Learn more" }).nth(1),
    ).toHaveAttribute(
      "href",
      "https://samvera.atlassian.net/wiki/spaces/hyku/overview",
    );
  }

  // Test mobile navigation
  if (isMobile) {
    await page.goto("/");

    const mobileMenuEl = page.getByTestId("mobile-menu");
    const hamburgerEl = page.getByRole("button", { name: "Open main menu" });

    await hamburgerEl.click();
    await mobileMenuEl
      .getByRole("link", { name: "Features and Implementations" })
      .click();

    await expect(page.locator("h1")).toContainText(
      "Features and Implementations",
    );

    await hamburgerEl.click();
    await mobileMenuEl.getByRole("link", { name: "Getting Started" }).click();

    await expect(page.locator("h1")).toContainText("Getting Started");

    await hamburgerEl.click();
    await mobileMenuEl
      .getByRole("link", { name: "Presentations and Demos" })
      .click();

    await expect(page.locator("h1")).toContainText("Presentations and Demos");

    await hamburgerEl.click();
    await mobileMenuEl.getByRole("link", { name: "News" }).click();

    await expect(page.locator("h1")).toContainText("News and Events");

    await hamburgerEl.click();
    await mobileMenuEl.getByRole("link", { name: "Contact" }).click();

    await expect(
      page.getByRole("heading", { name: "Get in touch" }),
    ).toBeVisible();
  }
});

test("has footer with links to social media", async ({ page }) => {
  await page.goto("/");

  const footerNav = page.getByLabel("Footer");
  await expect(footerNav).toBeVisible();

  // Check for main nav links within the footer
  await Promise.all(
    links.map((link) =>
      expect(footerNav.getByRole("link", { name: link })).toBeVisible(),
    ),
  );

  // Check for social media links within the footer
  const footerLayout = page.getByTestId("layout-footer");

  await expect(
    footerLayout.getByRole("link", { name: "GitHub" }),
  ).toHaveAttribute("href", "https://github.com/samvera/hyku");
  await expect(
    footerLayout.getByRole("link", { name: "YouTube" }),
  ).toHaveAttribute(
    "href",
    "https://www.youtube.com/channel/UC_m1Ovaaasa2ksyGaqz5i0Q",
  );
  await expect(
    footerLayout.getByText("© 2025 Hyku. All rights"),
  ).toBeVisible();
});

test.skip("color theme switcher", async ({ page }) => {
  await page.goto("/");
  const htmlElement = page.locator("html");

  // Check for theme switcher
  await page.getByLabel("Color mode").selectOption("dark");
  expect(htmlElement).toHaveClass("dark");

  await page.getByLabel("Color mode").selectOption("light");
  expect(htmlElement).toHaveClass("light");
});
