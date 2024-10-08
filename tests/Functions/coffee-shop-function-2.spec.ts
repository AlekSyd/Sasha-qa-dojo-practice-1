import { test, expect, Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  
}
)

test('OLSY-002 - number of items in the cart', async ({ page }) => {
 

  async function getCupOfBeverage(beverageType: string){
      const cupOfBeverage: Locator = page.locator(`//*[@data-test="${beverageType}"]`);
      await cupOfBeverage.click()
  }
  await getCupOfBeverage("Espresso");
  await getCupOfBeverage("Mocha");
  await getCupOfBeverage("Cafe_Latte");

  await page.locator(`//button[text()="Nah, I'll skip."]` ).click();

  await page.locator(`//button[@data-test="checkout"]`).hover();
  await expect(page.locator(`//*[@class="unit-controller"]/ancestor::ul`)).toBeVisible();

  async function numberOfBeverages(beverageType: string, text: string){
    const beverageCart: Locator = page.locator(`//span[text()="${beverageType}"]/following-sibling::span[@class="unit-desc"]`);
    await expect(beverageCart).toContainText(text)
  }

  await numberOfBeverages("Cafe Latte", 'x 1');
  await numberOfBeverages("Espresso", 'x 1');

  //expect(page.locator(`//span[text()="Cafe Latte"]/following-sibling::span[@class="unit-desc"]`)).toContainText('x 1'); 
 // await expect(page.locator(`//span[text()="Espresso"]/following-sibling::span[@class="unit-desc"]`)).toContainText('x 1');

 
  await page.locator(`//button[@aria-label="Add one Mocha"]`).click();
  await page.locator(`//button[@aria-label="Add one Mocha"]`).click();
  await numberOfBeverages("Mocha", 'x 3');
  //await expect(page.locator(`//span[text()="Mocha"]/following-sibling::span[@class="unit-desc"]`)).toContainText('x 3');
});

 test('OLSY-003 - cart', async ({ page }) => {

  async function getCupOfBeverage(beverageType: string){
    const beverageCup: Locator = page.locator(`//*[@data-test="${beverageType}"]`);
    await beverageCup.click();
  }
  
  await getCupOfBeverage("Cafe_Latte"); 
  await getCupOfBeverage("Espresso_Con Panna");
  await getCupOfBeverage("Cafe_Breve");
  await page.locator(`Button[class='yes']`).click();
  await page.locator(`[aria-label="Cart page"]`).click();
  await page.locator(`//li//div[text() = "(Discounted) Mocha"]/following-sibling::div//div//button[@aria-label="Add one (Discounted) Mocha"]`).click();
  await page.locator(`//li//div[text() = "(Discounted) Mocha"]/following-sibling::div//div//button[@aria-label="Add one (Discounted) Mocha"]`).click();
  
  async function numberOfBeverages(beverageType: string, text: string){
    const beverageCart: Locator = page.locator(`//li//div[text() = "${beverageType}"]/following-sibling::div//span[@class="unit-desc"]`);
    await expect(beverageCart).toContainText(text);
  } ;
  // how to write the correct locators for the below expects?
  await numberOfBeverages("(Discounted) Mocha", '$4.00 x 3');
  // await expect(page.locator(`[class=list-item] div['(Discounted) Mocha']`)).toContainText('(Discounted) Mocha$4.00 x 3+-$12.00x');
  await numberOfBeverages("Cafe Breve", '$15.00 x 1');
  await numberOfBeverages("Cafe Latte", '$16.00 x 1');
  await numberOfBeverages("Espresso Con Panna", '$14.00 x 1');
 
})
