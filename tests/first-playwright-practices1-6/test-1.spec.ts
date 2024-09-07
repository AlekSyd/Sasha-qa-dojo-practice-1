import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.fr/');
  await page.getByRole('button', { name: 'Refuser' }).click();
  await page.getByLabel('navigation').getByLabel('Choisissez une langue pour').click();
  await page.locator('#nav-flyout-icp > .nav-flyout-buffer-top').click();
  await page.getByRole('link', { name: 'English - EN' }).click();
  await page.locator('#nav-flyout-accountList > .nav-flyout-buffer-top').click();
  await page.getByPlaceholder('Search Amazon.fr').fill('iphone');
  await page.getByLabel('iphone 15 pro max').click();
  await page.getByRole('link', { name: 'Sponsored Ad – Apple iPhone 15 Pro (128GB) - Titanium Blue Previous image Next' }).click();
  await page.getByLabel('Add to Basket').click();
  await page.getByLabel('item in shopping basket').click();
  await page.getByLabel('Delete Apple iPhone 15 Pro (').click();
});