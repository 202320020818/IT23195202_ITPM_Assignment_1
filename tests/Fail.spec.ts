import { test, expect } from "@playwright/test";

const negativeCases = [
  { tcId: "Neg_Fun_01", input: "" },
  { tcId: "Neg_Fun_02", input: "123456789" },
  { tcId: "Neg_Fun_03", input: "#$%^&*()" },
  { tcId: "Neg_Fun_04", input: "ab#12@zx" },
  { tcId: "Neg_Fun_05", input: "நான் இன்று வரவில்லை" }, // Tamil by dictionary
  { tcId: "Neg_Fun_06", input: "I am going to the Campus today" },
  { tcId: "Neg_Fun_07", input: "imoji" },
  { tcId: "Neg_Fun_08", input: "aaaaaa aaaaaa aaaaaa aaaaaa" },
  { tcId: "Neg_Fun_09", input: "<script>alert('test')</script>" },
  { tcId: "Neg_Fun_10", input: "මම gedhara inne" },
];

test.describe("Negative Functional Tests – Singlish to Sinhala", () => {
  for (const tc of negativeCases) {
    test(tc.tcId, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/");

      const inputBox = page.locator("textarea").first();
      await inputBox.fill(tc.input);

      await page.waitForTimeout(1500);

      const pageText = await page.locator("body").innerText();

      // FAIL condition: No proper Sinhala translation generated
      expect(pageText).not.toMatch(/[අ-ෆ]/);
    });
  }
});
