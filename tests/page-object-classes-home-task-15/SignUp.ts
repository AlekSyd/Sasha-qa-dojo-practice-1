   import{Locator, Page, expect} from "@playwright/test";


   export class SignUpPage  {
   protected page: Page;
    private userNameField: Locator;
    private emailField: Locator;
    private passwordField: Locator;
    public signUpButton: Locator
  
    constructor(page: Page) {
      this.page = page;
      this.userNameField = this.page.locator(`//input[@placeholder="Username"]`);
      this.emailField = this.page.locator(`//input[@placeholder="Email"]`);
      this.passwordField = this.page.locator(`//input[@placeholder="Password"]`);
      this.signUpButton = this.page.locator(`//button[@class="btn btn-lg btn-primary pull-xs-right"]`)

    }
  
    async fillInCreds() {
      await this.userNameField.fill('Sasha');
      await this.emailField.fill("sasha_ne@test.com");
      await this.passwordField.fill("12345");
    }
    async clickSignUpButton(){
      await this.signUpButton.click();
    }

    async verifyProfileUrlByUser(user: string) {
      expect(this.page.locator("a[contains(@href)")).toBe(
        `https://demo.learnwebdriverio.com/@${user}/`
      );
  

  }}
