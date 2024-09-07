import { expect, Locator, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
 await page.goto("https://demo.learnwebdriverio.com/login");

})

test('OLSY-006 login test validation', async ({ page }) => {

    const articleTitle = 'Mriia: The Ukrainian Giant of the Skies';
    const articleDescription = 'This article explores the incredible story of the Antonov An-225 "Mriia" the world\'s largest cargo aircraft built in Ukraine. Discover its history, engineering marvels, and the unique missions that have made it a symbol of Ukrainian innovation and aviation prowess.';
    const articleText = 'The Antonov An-225 "Mriia," meaning "Dream" in Ukrainian, is a one-of-a-kind aircraft that holds the title of the world\'s largest and heaviest cargo plane. Designed and built in the 1980s by the Antonov Design Bureau in the Ukrainian SSR, Mriia was initially created to transport the Soviet space shuttle, Buran, and other oversized cargo.';
    const emailField: Locator = page.locator(`//input[@type='email']`);
    const pwdField: Locator = page.locator(`//input[@type='password']`);
    const signInButton: Locator = page.locator(`//button[contains(text(), 'Sign in')]`);
    const userNameView: Locator = page.locator(`//a[@class="nav-link"][contains(text(), 'sasha')`);
    const newArticleButton: Locator = page.locator(`//*[contains(text(), 'New Article')]`);
    const articleTitleField: Locator = page.locator(`//input[@data-qa-id="editor-title"]`);
    const articleDescriptionField: Locator = page.locator(`//input[@data-qa-id="editor-description"]`);
    const articleTextField: Locator = page.locator(`//textarea[@placeholder="Write your article (in markdown)"]`);
    const tagField: Locator = page.locator(`//*[@data-qa-id="editor-tags"]`);
    const publishButton: Locator = page.locator(`//*[@data-qa-id="editor-publish"]`);
    const articleTitleText: Locator = page.locator(`//*[@data-qa-id="article-page"]//*[@data-qa-id="article-title"]`);



    await emailField.fill('sasha@test.com');
    await pwdField.fill('12345');
    await signInButton.click();

    await expect(userNameView).toBeVisible();

    await newArticleButton.click();
    await articleTitleField.fill(articleTitle);
    await articleDescriptionField.fill(articleDescription)
    await articleTextField.fill(articleText);
    await tagField.fill('sasha, tag');
    await publishButton.click();
    await expect(articleTitleText).toHaveText(articleTitle)



} );
