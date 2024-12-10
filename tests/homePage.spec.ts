import test, { expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { urlList } from '../test-data/urls.data';

test.describe.parallel('Basic functionalities check', () => {
  let homePage: HomePage;
  let context;

  test.beforeEach(async ({ browser, page }) => {
    homePage = new HomePage(page);

    context = await browser.newContext();
  });

  for (const url of urlList) {
    test(`navigate to the URL ${url}`, async () => {
      await homePage?.open(url);
      await expect(homePage.page).toHaveURL(url);
    });

    test(`elements presence on the home page: ${url}`, async () => {
      await homePage?.open(url);
      await expect(homePage.destinationPicker).toBeVisible();
      await expect(homePage.datePicker).toBeVisible();
      await expect(homePage.transportationPicker).toBeVisible();
      await expect(homePage.selectRoom).toBeVisible();
      await expect(homePage.loginTopButton).toBeVisible();
      await expect(homePage.searchButton).toBeVisible();
    });
  }
});
