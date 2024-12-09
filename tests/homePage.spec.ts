import test, { expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { loginData } from '../test-data/login.data';
import { PulpitPage } from '../pages/pulpit.page';
import { HomePage } from '../pages/home.page';

const urlList: string[] = [
  'https://www.travelplanet.pl/',
  'https://www.invia.cz',
  'https://www.invia.sk',
  'https://www.invia.hu',
];

test.describe.parallel('Basic functionalities check', () => {
  let homePage: HomePage;
  let context;

  test.beforeEach(async ({ browser, page }) => {
    homePage = new HomePage(page);
    context = await browser.newContext();
  });

  for (const url of urlList) {
    test.only(`${url}`, async () => {
      await homePage?.open(url);
      await expect(homePage.page).toHaveURL(url);
    });
  }
});