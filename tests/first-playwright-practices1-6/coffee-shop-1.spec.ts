import { test, expect, Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
})

test('OLSY-001 - promotional message', async ({ page }) => {

  const espressoCup: Locator = page.locator('[data-test="Espresso"]');
  const espressoMacciatoCup: Locator = page.locator('[data-test="Espresso_Macchiato"]');
  const cappuccinoCup: Locator = page.locator('[data-test="Cappuccino"]');
  const promoForm: Locator = page.locator(`//*[@class='promo']`);
  const yesButton: Locator = page.locator(`//button[@class='yes']`);
  const noButton: Locator = page.locator(`//button[@class='yes']/following-sibling::button`)

 
  await espressoCup.click();
  await espressoMacciatoCup.click();
  await cappuccinoCup.click();
  
  await expect (promoForm).toBeVisible();

  await expect(yesButton).toContainText('Yes, of course!');
 
  await expect(noButton).toContainText('Nah, I\'ll skip.');

  await expect(promoForm).toContainText(`It\'s your lucky day! Get an extra cup of Mocha for $4.`);
});

