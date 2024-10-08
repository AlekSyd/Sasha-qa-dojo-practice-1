import { expect, Locator, test } from "@playwright/test";
import { LoginPage } from "./LoginPage";



test.beforeEach(async ({ page }) => {
 await page.goto("https://demo.learnwebdriverio.com/login");

})

test('OLSY-006 login test validation', async ({ page }) => {

    async function getByCredentials(credType: string, text: string) {
        const dataField: Locator = page.locator(`//input[@type='${credType}']`);
        await dataField.fill(text);
    }
    // const emailField: Locator = page.locator(`//input[@type='email']`);
    // const pwdField: Locator = page.locator(`//input[@type='password']`);
    const signInButton: Locator = page.locator(`//button[contains(text(), 'Sign in')]`);
    const userNameView: Locator = page.locator(`//li[@class='nav-item']/a[@class='nav-link'][contains(text(), 'sasha')]`);
    



    await getByCredentials('email', 'sasha@test.com');
    await getByCredentials('password', '12345');
   
    await signInButton.click();

    await expect(userNameView).toBeVisible();



} );

test('OLSY-007 login page object', async({page}) => {
    const loginPage = new LoginPage(page);
    

    await loginPage.login();
    await expect(page.locator(`//li[@class='nav-item']/a[@class='nav-link'][contains(text(), 'sasha')]`)).toBeVisible();

})

