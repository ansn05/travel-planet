import { test, expect } from '@playwright/test';
import { incorrectloginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { PulpitPage } from '../pages/pulpit.page';
import { HomePage } from '../pages/home.page';
import { urlList } from '../test-data/urls.data';
import { CookieDialog } from '../pages/components/cookie-dialog.components';

test.describe.parallel('Basic functionalities check', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let cookieDialog: CookieDialog;

  let context;

  test.beforeEach(async ({ browser, page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    cookieDialog = new CookieDialog(page);

    context = await browser.newContext();
  });

  for (const url of urlList) {
    test.only(`unsucessfull login ${url}`, async () => {
      await homePage?.open(url);
      await cookieDialog.cookiesAllowButton.click();
      //loginPage.openLoginForm(homePage.loginTopButton);
      // await loginPage.login(
      //   incorrectloginData.loginEmail,
      //   incorrectloginData.userPassword,
      // );
      //await expect(loginPage.loginError).toHaveText(loginPage.errorMessage);
    });
  }
});

// test.describe('User login to Demobank', () => {
//   let loginPage: LoginPage;

//   test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     loginPage = new LoginPage(page);
//   });

//   test('succesfull login with correct credentials', async ({ page }) => {
//     //Arange
//     const expectedUserName = 'Jan Demobankowy';
//     const pass = loginData.userPassword;
//     const userId = loginData.userId;

//     //act
//     await loginPage.login(userId, pass);

//     const pulpitPage = new PulpitPage(page);
//     //Assert
//     await expect(pulpitPage.userName).toHaveText(expectedUserName);
//   });

//   test('unsucessfull login with too short name', async ({ page }) => {
//     //Arange
//     const incorrectLogin = 'tester';
//     const errorLogin = 'identyfikator ma min. 8 znaków';
//     //Act
//     await loginPage.loginInput.fill(incorrectLogin);
//     await loginPage.passwordInput.click();
//     //Assert
//     await expect(loginPage.loginError).toHaveText(errorLogin);
//   });

//   test('unsucessfull login with too short password', async ({ page }) => {
//     //Arange
//     const incorrectPassword = '1234';
//     const errorPassword = 'hasło ma min. 8 znaków';
//     const login = 'tester12';
//     //Act
//     await loginPage.loginInput.fill(login);
//     await loginPage.passwordInput.fill(incorrectPassword);
//     await loginPage.passwordInput.blur();
//     //Assert
//     await expect(loginPage.passwordError).toHaveText(errorPassword);
//   });
// });
