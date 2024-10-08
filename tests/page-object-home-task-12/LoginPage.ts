import { expect, test } from "@playwright/test";
import { getCredentials } from "../../credentials/creds";

export function LoginPage(page) {
    this.page = page;

    this.emailField = `//input[@type='email']`;
    this.pwdField = `//input[@type='password']`;
    this.signInButton = `//button[contains(text(), 'Sign in')]`;
    //const userNameView: Locator = page.locator(`//li[@class='nav-item']/a[@class='nav-link'][contains(text(), 'sasha')]`);
}

LoginPage.prototype.login = async function (){
    const authCreds = getCredentials()
    await this.page.locator(this.emailField).fill(authCreds.email);
    await this.page.locator(this.pwdField).fill(authCreds.password);
    await this.page.locator(this.signInButton).click();
};

