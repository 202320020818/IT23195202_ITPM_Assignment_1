import { test, expect } from "@playwright/test";

test.describe("UI Functionality Tests", () => {
  test("Pos_UI_RealTime - Sinhala output updates as user types", async ({
    page,
  }) => {
    await page.goto("https://www.swifttranslator.com/");

    // Update selectors according to actual website
    const inputField = page.locator("#input-text"); // replace with real ID
    const outputField = page.locator("#output-text"); // replace with real ID

    // Wait for fields to appear
    await inputField.waitFor({ state: "visible", timeout: 5000 });
    await outputField.waitFor({ state: "visible", timeout: 5000 });

    // Type input slowly
    const testInput = "mama gedhara yanavaa";
    await inputField.type(testInput, { delay: 50 });

    // Wait for output to appear
    await expect(outputField).toHaveText(/.+/, { timeout: 5000 });

    // Verify output is not empty
    const outputText = await outputField.textContent();
    expect(outputText?.trim().length).toBeGreaterThan(0);
  });
});
