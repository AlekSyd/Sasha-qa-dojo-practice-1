import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
})

test('OLSY-002 - numbet og items in the cart', async ({ page }) => {
 
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="Cafe_Latte"]').click();
  await page.getByRole('button', { name: 'Nah, I\'ll skip.' }).click();

  await page.locator(`button[data-test="checkout"]`).hover();
  //await expect(page.locator(`//*[@class='pay-container']/ul[@class='cart-preview']`)).toBeVisible();


  // how to write the correct locators for the below expects?
  await expect(page.locator(`//*[text() = 'Cafe Latte']/following-sibling::[@class="unit-desc"]`)).toContainText('x 1'); 
  await expect(page.locator(`//button[@arial-label="Add one Cafe Latte"]`)).toContainText('+');
  await expect(page.locator(`//button[@arial-label="Remove one Cafe Latte"]`)).toContainText('-')
  
  await expect(page.locator(`//*[text() = 'Espresso']/following-sibling::[@class="unit-desc"]`)).toContainText('x 1');
  await expect(page.locator(`//*[text() = 'Mocha']/following-sibling::[@class="unit-desc"]`)).toContainText('x 1');
  
  await page.locator(`//button[@arial-label="Add one Mocha"]`).click();
  await expect(page.locator(`//*[text() = 'Mocha']/following-sibling::[@class="unit-desc"]`)).toContainText(' x 2')

 await expect(page.locator(`//button[@data-test="checkout"]`)).toContainText('Total: $42.00');
})

test('OLSY-003 - cart', async ({ page }) => {

  await page.locator('[data-test="Cafe_Latte"]').click();
  await page.locator('[data-test="Espresso_Con Panna"]').click();
  await page.locator('[data-test="Cafe_Breve"]').click();
  await page.locator(`Button[class='yes']`).click();
  await page.locator(`[aria-label="Cart page"]`).click();
  await page.locator(`button[aria-label="Add one (Discounted) Mocha"]`).click();
  await page.locator(`button[aria-label="Add one (Discounted) Mocha"]`).click();
  
  // how to write the correct locators for the below expects?
  await expect(page.locator(`[class=list-item] div['(Discounted) Mocha']`)).toContainText('(Discounted) Mocha$4.00 x 3+-$12.00x');
  // await expect(page.locator(`[class=list-item] div['(Discounted) Mocha']`)).toContainText('(Discounted) Mocha$4.00 x 3+-$12.00x');
  await expect(page.locator('#app')).toContainText('Cafe Breve$15.00 x 1+-$15.00x');
  await expect(page.locator('#app')).toContainText('Cafe Latte$16.00 x 1+-$16.00x');
  await expect(page.locator('#app')).toContainText('Espresso Con Panna$14.00 x 1+-$14.00x');
 
 
})
