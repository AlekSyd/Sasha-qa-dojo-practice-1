import {test, expect, Locator} from '@playwright/test';


test.beforeEach(async ({page}) => {

    await page.goto('https://telemart.ua/ua/')
}
);

test('Sasha001 - merry-go-round test', async ({ page }) => {
    const swiperSlide: Locator = page.locator(`//*[@class="categories-slider"]//*[contains(@id, 'swiper-wrapper')]//*[contains(@class, 'swiper-slide')]`);
    const nextButton: Locator = page.locator(`//*[@class='swiper-button-next' and @aria-label='Next slide']`);
    const swiperSlideActive: Locator = page.locator(`//*[@class="categories-slider"]//*[contains(@class, 'swiper-slide-active')]`);
    

    await expect ((await swiperSlide.all()).length).toBeGreaterThanOrEqual(2);
    await nextButton.click();
    await nextButton.click();
    const activeSlideUrl: string | null = await swiperSlideActive.getAttribute("href");
    await swiperSlideActive.click();
    await expect(page.url()).toEqual(activeSlideUrl);

})

