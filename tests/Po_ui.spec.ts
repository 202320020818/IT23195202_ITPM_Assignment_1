import { test, expect } from '@playwright/test';

test.describe('UI Functionality Tests – Singlish to Sinhala', () => {

  test('Pos_UI_01 - Real-time Sinhala output updates while typing', async ({ page }) => {

    await page.goto('https://www.swifttranslator.com/');

    // Input textarea (Singlish)
    const inputField = page.locator('textarea').first();

    // Ensure input is visible
    await expect(inputField).toBeVisible({ timeout: 5000 });

    // Type slowly to simulate real-time typing
    const testInput = 'mama gedhara yanavaa';
    await inputField.type(testInput, { delay: 80 });

    // Wait for real-time conversion
    await page.waitForTimeout(1500);

    // Validate Sinhala characters appear on UI
    await expect(page.locator('body')).toContainText(/[අ-ෆ]/);
  });

});
