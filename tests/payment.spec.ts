import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { PaymentPage } from '../pages/payment.page';
import { SideMenuComponent } from '../pages/components/side-menu.components';

test.describe('Payment tests', () => {
  let paymentPage: PaymentPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const pass = loginData.userPassword;
    const userId = loginData.userId;

    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(pass);
    await loginPage.loginButton.click();

    paymentPage = new PaymentPage(page);
    await paymentPage.sideMenu.paymentsButton.click();
  });

  test('simple payment', async ({ page }) => {
    //Arange
    const receiverName = 'Aldona Hawer';
    const accountNumber = '33 7872 2200 0000 0121 3224 35446';
    const paymentAmount = '500';
    const expectedMessage = `Przelew wykonany! ${paymentAmount},00PLN dla ${receiverName}`;
    //Act
    await paymentPage.transferReceiver.fill(receiverName);
    await paymentPage.accountNumber.fill(accountNumber);
    await paymentPage.paymentAmount.fill(paymentAmount);
    await paymentPage.executeTransfer.click();
    await paymentPage.closeButton.click();

    await page.getByRole('button', { name: 'wykonaj przelew' }).press('Home');
    //Asert
    await expect(paymentPage.showMessages).toHaveText(expectedMessage);
  });
});
