import { test, expect, Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
})



test('OLSY-001 - promotional message', async ({ page }) => {

  async function chooseCupOfDrink(drinkName: String){
    const drinkLocator: Locator = page.locator(`[data-test="${drinkName}"]`)
    await drinkLocator.click();
  
  }
  async function promoFormVisibility(promoForm: Locator){
    await expect(promoForm).toBeVisible();
  }

  async function buttonsVerification(buttonName: Locator, expectedText: String){
    await expect(buttonName).toContainText(expectedText);

  }
  // const espressoCup: Locator = page.locator('[data-test="Espresso"]');
  // const espressoMacciatoCup: Locator = page.locator('[data-test="Espresso_Macchiato"]');
  // const cappuccinoCup: Locator = page.locator('[data-test="Cappuccino"]');
  const promoForm: Locator = page.locator(`//*[@class='promo']`);
  const yesButton: Locator = page.locator(`//button[@class='yes']`);
  const noButton: Locator = page.locator(`//button[@class='yes']/following-sibling::button`)

  await chooseCupOfDrink("Espresso");
  await chooseCupOfDrink("Espresso_Macchiato");
  await chooseCupOfDrink("Cappuccino");
  

  await promoFormVisibility(promoForm);

  await buttonsVerification(yesButton, 'Yes, of course!');
 
  await buttonsVerification(noButton, 'Nah, I\'ll skip.');

  await expect(promoForm).toContainText(`It\'s your lucky day! Get an extra cup of Mocha for $4.`);
});

