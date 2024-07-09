import { expect, test } from "@playwright/test";

import mockFeaturesResponse from "./fixtures/features-response.json";

test("Features and Implementations page returns Features", async ({ page }) => {
  // Mock the API response before navigating
  await page.route("*/**/entries?content_type=feature", async (route) => {
    await route.fulfill({ json: mockFeaturesResponse });
  });

  await page.goto("/features");
  await expect(page.locator("h1")).toContainText(
    "Features and Implementations",
  );
  await expect(page.getByRole("main")).toContainText(
    "Hyku began as the Hydra-in-a-Box project. Based on Hyrax, it offers an easy-to-install, easy-to-configure, feature-rich solution supporting next-generation web technologies. Hyku reduces barriers to effective asset management and preservation for collections and content types of many kinds, and is supported by a vibrant and ever-growing open source community.",
  );

  await expect(
    page.getByRole("heading", { name: "Features", exact: true }),
  ).toBeVisible();

  // Test mocked features data:
  const featureList = page.getByTestId("feature-list");
  await expect(featureList).toBeVisible();
  await expect(featureList.locator("li")).toContainText(
    "I am a test featured description for the test feature",
  );

  await expect(page.getByRole("main")).toContainText(
    "Building on Hyrax, Hyku has a long list of features and distinctions, including:",
  );
  await expect(page.getByRole("main")).toContainText("Hyku 5.0");
  await expect(
    page.getByRole("heading", { name: "Implementations", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "University of Louisville" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Shared Research Repository" }),
  ).toBeVisible();
});
