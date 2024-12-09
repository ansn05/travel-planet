import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { PulpitPage } from '../pages/pulpit.page';

test.describe('User login to Demobank', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPage = new LoginPage(page);
  });

  test('succesfull login with correct credentials', async ({ page }) => {
    //Arange
    const expectedUserName = 'Jan Demobankowy';
    const pass = loginData.userPassword;
    const userId = loginData.userId;

    //act
    await loginPage.login(userId, pass);

    const pulpitPage = new PulpitPage(page);
    //Assert
    await expect(pulpitPage.userName).toHaveText(expectedUserName);
  });

  test('unsucessfull login with too short name', async ({ page }) => {
    //Arange
    const incorrectLogin = 'tester';
    const errorLogin = 'identyfikator ma min. 8 znaków';
    //Act
    await loginPage.loginInput.fill(incorrectLogin);
    await loginPage.passwordInput.click();
    //Assert
    await expect(loginPage.loginError).toHaveText(errorLogin);
  });

  test('unsucessfull login with too short password', async ({ page }) => {
    //Arange
    const incorrectPassword = '1234';
    const errorPassword = 'hasło ma min. 8 znaków';
    const login = 'tester12';
    //Act
    await loginPage.loginInput.fill(login);
    await loginPage.passwordInput.fill(incorrectPassword);
    await loginPage.passwordInput.blur();
    //Assert
    await expect(loginPage.passwordError).toHaveText(errorPassword);
  });
});
