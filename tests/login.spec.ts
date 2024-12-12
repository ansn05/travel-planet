import { test, expect } from '@playwright/test';
import { incorrectloginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';
import { urlList } from '../test-data/urls.data';
import { CookieDialog } from '../pages/components/cookie-dialog.components';
import { ErrorMessage } from '../pages/components/errorMessages.ts';

test.describe.parallel('Basic functionalities check', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let cookieDialog: CookieDialog;
  let context;
  let errorMessage: ErrorMessage;

  test.beforeEach(async ({ browser, page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    cookieDialog = new CookieDialog(page);
    errorMessage = new ErrorMessage(page);

    context = await browser.newContext();
  });

  for (const url of urlList) {
    test(`unsuccessful login with invalid credentials ${url}`, async () => {
      await homePage?.open(url);
      cookieDialog.ifCookiesModalWindowPresent();
      await homePage.loginTopButton.click();
      
      await loginPage.login(
        incorrectloginData.loginEmail,
        incorrectloginData.userPassword,
      );

      const errorMessageIsVisible = await errorMessage.isErrorMessageVisible();
      expect(errorMessageIsVisible).toBe(true);
    });
  }
});

