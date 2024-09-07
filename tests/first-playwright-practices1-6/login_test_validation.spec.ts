import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
 await page.goto("https://demo.learnwebdriverio.com/login");

})

test('OLSY-006 login test validation', async ({ page }) => {

    const randomNum = Math.floor(Math.random() * 333);
    const username = `test${randomNum}`

    await page.locator(`//input[@type='email']`).fill('test@gmail.com');
    await page.locator(`//input[@type='password']`).fill('12345');
    await page.locator(`//button[contains(text(), 'Sign in')]`).click();

    await expect(page.locator(`//li[contains(text(), 'email or password is invalid')]`)).toBeVisible()
} );
