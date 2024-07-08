import { expect, test } from "@playwright/test";

const links = [
  "Features and Implementations",
  "Getting Started",
  "Presentations and Demos",
  "News",
  "Contact",
];

test("has main heading and top level navigation", async ({ page }) => {
  await page.goto("/");

  const header = page.getByLabel("Global");
  await expect(header).toBeVisible();

  await expect(header.getByAltText("Hyku logo")).toBeVisible();

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
  await expect(
    page.getByRole("heading", { name: "Presentations and Demos" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "News" }).nth(1).click();
  await expect(
    page.getByRole("heading", { name: "News and Events" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Contact" }).nth(1).click();
  await expect(
    page.getByRole("heading", { name: "Get in touch" }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: "Learn more" }).nth(1),
  ).toHaveAttribute("href", "https://github.com/samvera/hyku");
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

  await expect(footerLayout.getByRole("link", { name: "X" })).toHaveAttribute(
    "href",
    "http://twitter.com/HykuRepo",
  );
  await expect(page.getByRole("link", { name: "GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/samvera/hyku",
  );
  await expect(page.getByRole("link", { name: "YouTube" })).toHaveAttribute(
    "href",
    "https://www.youtube.com/channel/UC_m1Ovaaasa2ksyGaqz5i0Q",
  );
});

test("color theme switcher", async ({ page }) => {
  await page.goto("/");
  const htmlElement = page.locator("html");

  // Check for theme switcher
  await page.getByLabel("Color mode").selectOption("dark");
  expect(htmlElement).toHaveClass("dark");

  await page.getByLabel("Color mode").selectOption("light");
  expect(htmlElement).toHaveClass("light");
});
