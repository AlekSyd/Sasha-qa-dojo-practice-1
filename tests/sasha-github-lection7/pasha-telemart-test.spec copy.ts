import { test, expect, Locator, Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://telemart.ua/ua/");
});

test.afterEach(({ page }) => {
  page.close();
});

test("TM-1: Check banners carrousel", async ({ page }) => {
  const carousel = carouselObject(page);
  const currentBannerPosition: number = Number(
    await carousel.currentBannerPositionOld()
  );

  await carousel.swipeButton();
  await carousel.swipeButton();

  const bannerPosition = await carousel.activeBanner.getAttribute(
    "data-banner-position"
  );
  const bannerPositionNum = Number(bannerPosition);
  expect(bannerPositionNum).toEqual(Number(currentBannerPosition) + 2);
});

async function swipeBanner(page: Page, swipeButton: Locator) {
  const ids = await getBannersId(page);
  await Promise.all([
    page
      .locator(
        `a[class*= 'active']:not(.swiper-slide-duplicate)[data-banner-id = '${ids.nextBannerId}']`
      )
      .waitFor(),
    swipeButton.click(),
  ]);
}

function carouselObject(page: Page) {
  return {
    activeBanner: this.page.locator(
      `a[class*= 'active']:not(.swiper-slide-duplicate)`
    ),
    swipeButton: this.page.locator('//div[@class="swiper-button-next"]'),
    currentBannerPositionOld: async () =>
      await this.activeBanner.getAttribute("data-banner-position"),
    getBannersId: async (page: Page) => {
      const prevBannerId: string | null = await page
        .locator(`a[class*= 'prev']:not(.swiper-slide-duplicate)`)
        .getAttribute("data-banner-id");

      const activeBannerId: string | null = await page
        .locator(`a[class*= 'active']:not(.swiper-slide-duplicate)`)
        .getAttribute("data-banner-id");

      const nextBannerId: string | null = await page
        .locator(`a[class*= 'next']:not(.swiper-slide-duplicate)`)
        .getAttribute("data-banner-id");

      return { prevBannerId, activeBannerId, nextBannerId };
    },
  };
}
async function getBannersId(page: Page) {
  const prevBannerId: string | null = await page
    .locator(`a[class*= 'prev']:not(.swiper-slide-duplicate)`)
    .getAttribute("data-banner-id");

  const activeBannerId: string | null = await page
    .locator(`a[class*= 'active']:not(.swiper-slide-duplicate)`)
    .getAttribute("data-banner-id");

  const nextBannerId: string | null = await page
    .locator(`a[class*= 'next']:not(.swiper-slide-duplicate)`)
    .getAttribute("data-banner-id");

  return { prevBannerId, activeBannerId, nextBannerId };
}

/*
expect(1).toBe(1); //==
expect(1).not.toBe(1); // !=

expect(12415).toBeTruthy(); //  {some value} == true
expect(12415).toBeFalsy(); //  {some value} == false

expect(12415).toBeGreaterThan(214); //  {some value} > {some value}
expect(12415).toBeGreaterThanOrEqual(214); //  {some value} >= {some value}

expect(12415).toBeLessThan(214); //  {some value} <= {some value}
expect(12415).toBeLessThanOrEqual(214); //  {some value} <= {some value}

/*
  false 
  0
  null - не працює
  undefined - не працює
  NaN - не працює
  ''
*/