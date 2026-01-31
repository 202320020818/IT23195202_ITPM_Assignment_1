import { test, expect } from "@playwright/test";

/*
test('Real-time Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input area (Singlish)
  const input = page.locator('textarea').first();

  await input.fill('ehema karala balapan');

  // Wait briefly for real-time conversion
  await page.waitForTimeout(1500);

  // Validate Sinhala output appears anywhere on the page
  await expect(page.locator('body')).toContainText('එහෙම කරල බලපන්');
});

*/

const positiveCases = [
  {
    Tcid: "Pos_Fun_01",
    input:
      "mata baya enavaa,machan mage hithata hari na wage mama mokakda karanna ona dawasak gane thiyena prashana aduwenneth naha mage",
    expected: "බය එනවා",
  },
  {
    Tcid: "Pos_Fun_02",
    input:
      "oyaa hari dha?, naha api hamogema waradi thiyenawa neda mata danenne ehema thiyenawa kiyala , apita puluwan ewa hadaganna",
    expected: "ඔයා හරි ද?",
  },
  {
    Tcid: "Pos_Fun_03",
    input:
      "issarahata yanna, api balagamu issarahata gahanna enne kauda kiyala mama gahanm ena unta uba baya nathuwa palayan dn issarahatama",
    expected: "ඉස්සරහට යන්න",
  },
  {
    Tcid: "Pos_Fun_04",
    input: "mata ehema ekak ona nae",
    expected: "මට එහෙම එකක් ඔන නැ",
  },
  {
    Tcid: "Pos_Fun_05",
    input: "mama dhaen aluth vaedakata laesthi wenavaa",
    expected: "ලැස්ති",
  },
  {
    Tcid: "Pos_Fun_06",
    input: "api kalin dawasakata ehema kathaa kalaa",
    expected: "කතා",
  },
  {
    Tcid: "Pos_Fun_07",
    input: "heta raa api aluth film ekak balanna yanavaa",
    expected: "හෙට",
  },
  {
    Tcid: "Pos_Fun_08",
    input: "mama enna hithuwaa namuth waedaa thiyenavaa",
    expected: "නමුත්",
  },
  {
    Tcid: "Pos_Fun_09",
    input: "oya hariyata kiyoth mama eka karannam",
    expected: "කර",
  },
  { Tcid: "Pos_Fun_10", input: "eyaala gedhara inne", expected: "ගෙදර" },
  {
    Tcid: "Pos_Fun_11",
    input: "karunakarala mata meeka poddak pahadili karanna puLuvan dha",
    expected: "කරුනකරල මට මේක පොඩ්ඩක් පහඩිලි කරන්න පුළුවන් ද",
  },
  {
    Tcid: "Pos_Fun_12",
    input: "ehema karala balapan",
    expected: "එහෙම කරල බලපන්",
  },
  {
    Tcid: "Pos_Fun_13",
    input: "adha class eka online widihata thiyenavaa",
    expected: "අද",
  },
  { Tcid: "Pos_Fun_14", input: "9.15 PM passe enna", expected: "එන්න" },
  { Tcid: "Pos_Fun_15", input: "total eka Rs 2750", expected: "2750" },
  { Tcid: "Pos_Fun_16", input: "water litre 2 ganna", expected: "ගන්න" },
  { Tcid: "Pos_Fun_17", input: "mama gedhara inne", expected: "ඉන්නේ" },
  {
    Tcid: "Pos_Fun_18",
    input: "mama inne gedhara\no ya enne kohomadha",
    expected: "කොහොම",
  },
  { Tcid: "Pos_Fun_19", input: "tikak tikak hondatama", expected: "හොඳ" },
  { Tcid: "Pos_Fun_20", input: "oyagedharainne", expected: "ගෙදර" },
  { Tcid: "Pos_Fun_21", input: "Galle yanna thiyenavaa", expected: "යන්න" },
  {
    Tcid: "Pos_Fun_22",
    input: "mama adha godak waeda kalaa. heta thawa waeda thiyenavaa...",
    expected: "මම",
  },
  { Tcid: "Pos_Fun_23", input: "oyaa ennae dha", expected: "ඔයා එන්නැ ද" },
  {
    Tcid: "Pos_Fun_24",
    input: "hari eka hodhayi needha",
    expected: "හරි එක හොදයි නේද",
  },
];

test.describe("Positive Functional Tests – Singlish to Sinhala", () => {
  for (const tc of positiveCases) {
    test(tc.Tcid, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/");

      const inputBox = page.locator("textarea").first();
      await inputBox.fill(tc.input);

      await page.waitForTimeout(1500);

      await expect(page.locator("body")).toContainText(tc.expected);
    });
  }
});
