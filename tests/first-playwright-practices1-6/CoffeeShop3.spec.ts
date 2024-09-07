import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
})

test('OLSY-004 - payment details validation', async ({ page }) => {
 
  await page.locator('[data-test="Flat_White"]').click();
  await page.locator('[data-test="Americano"]').click();
  await page.locator('[data-test="Cafe_Breve"]').click();
  await page.locator(`button[class='yes']`).click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator(`button[id="submit-payment"]`).click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  
  //how to pick the locator for the validation message "Please fill in this field?"
  
  await page.locator(`input[id="name"]`).click();
  await page.locator(`input[id="name"]`).fill('test_name');
  await page.locator(`input[id="name"]`).press('Tab');
  await page.locator(`input[id="email"]`).fill('test@name.com');
  await page.locator(`input[id="promotion"]`).click();
  await page.locator(`button[id="submit-payment"]`).click();
  
  await expect(page.locator('#app')).toContainText('Thanks for your purchase. Please check your email for payment.');
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
  
})

test('OLSY-005 - Finishing the purchase', async ({ page }) => {
 
  await page.locator('[data-test="Flat_White"]').click();
  await page.locator('[data-test="Americano"]').click();
  await page.locator('[data-test="Cafe_Breve"]').click();
  await page.locator(`button[class='yes']`).click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator(`input[id="name"]`).click();
  await page.locator(`input[id="name"]`).fill('test_name');
  await page.locator(`input[id="name"]`).press('Tab');
  await page.locator(`input[id="email"]`).fill('test@name.com');
  await page.locator(`input[id="promotion"]`).click();
  await page.locator(`button[id="submit-payment"]`).click();
  
  await expect(page.locator(`[class="snackbar success"][role="button"]`)).toContainText('Thanks for your purchase. Please check your email for payment.');
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
  
})
