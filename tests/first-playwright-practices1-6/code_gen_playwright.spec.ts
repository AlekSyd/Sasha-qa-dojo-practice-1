import { test, expect } from '@playwright/test';

test('navigation_test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  expect(page.getByRole('heading', { name: 'Playwright enables reliable' }).locator('span'));
});

test('search_test', async ({ page }) => {
await page.goto('https://playwright.dev/');
await page.getByLabel('Search').click();
await page.getByPlaceholder('Search docs').fill('play');
await page.getByRole('link', { name: 'Installing Playwright​' }).click();
await page.getByRole('heading', { name: 'Installing PlaywrightDirect' }).click();
expect(page.getByRole('main').locator('div').filter({ hasText: 'Getting StartedInstallationOn' }).first());
});



test('theme_test', async ({ page }) => {
await page.goto('https://playwright.dev/');
await page.getByLabel('Switch between dark and light').click();
expect(page.locator('[data-theme="dark"]'))
});

