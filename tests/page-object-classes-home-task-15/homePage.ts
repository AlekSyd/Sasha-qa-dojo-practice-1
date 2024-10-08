import { expect, Locator, Page, test } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    private signInLink: Locator;
    private signUpLink: Locator;
  
    constructor(page: Page) {
      super(page);
      this.signInLink = this.page.locator(`//a[@href="/login"][@class="nav-link"]`); 
      this.signUpLink = this.page.locator(`//a[@href="/register"][@class="nav-link"]`); 
    }
    async clickSignIn() {
      await this.signInLink.click();
    };
  
    async clickSignUp() {
      await this.signUpLink.click();
    }}
