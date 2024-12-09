import { expect, test } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { PulpitPage } from '../pages/pulpit.page';

test.describe('Pulpit tests', () => {
  let pulpitPage: PulpitPage;

  test.beforeEach(async ({ page }) => {
    const login = loginData.userId;
    const password = loginData.userPassword;
    const url = 'https://demo-bank.vercel.app/';
    await page.goto(url);
    pulpitPage = new PulpitPage(page);

    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(login);
    await loginPage.passwordInput.fill(password);
    await loginPage.loginButton.click();
  });
  test('quick payment with correct data', async ({ page }) => {
    const transferTitle = 'zwrot środków';
    const receiverName = 'Chuck Demobankowy';
    const transferAmount = '150';
    const receiverId = '2';

    await pulpitPage.transferReceiver.selectOption(receiverId);
    await pulpitPage.transferAmount.fill(transferAmount);
    await pulpitPage.transferTitle.fill(transferTitle);
    await pulpitPage.executeButton.click();
    await pulpitPage.closeButton.click();

    // //Assert
    await expect(pulpitPage.showMessage).toHaveText(
      `Przelew wykonany! ${receiverName} - ${transferAmount},00PLN - ${transferTitle}`,
    );
  });

  test('topup mobile phone', async ({ page }) => {
    const message = 'Doładowanie wykonane! 30,00PLN na numer 500 xxx xxx';
    const topUpAmount = '30';
    const topUpReceiver = '500 xxx xxx';

    await pulpitPage.sideMenu.topUpPhone.click();

    await page.locator('#widget_1_topup_receiver').selectOption(topUpReceiver);
    await page.locator('#widget_1_topup_amount').fill(topUpAmount);
    await page.locator('#uniform-widget_1_topup_agreement span').click();
    await page.getByRole('button', { name: 'doładuj telefon' }).click();
    await page.getByTestId('close-button').click();

    await expect(page.locator('#show_messages')).toHaveText(message);
  });

  test('correct balance after topup mobile phone', async ({ page }) => {
    const topUpAmount = '30';
    const topUpReceiver = '500 xxx xxx';

    const initialBalance = await page.locator('#money_value').innerText();
    const expectedBalance = Number(initialBalance) - Number(topUpAmount);

    await page.locator('#widget_1_topup_receiver').selectOption(topUpReceiver);
    await page.locator('#widget_1_topup_amount').fill(topUpAmount);
    await page.locator('#uniform-widget_1_topup_agreement span').click();
    await page.getByRole('button', { name: 'doładuj telefon' }).click();
    await page.getByTestId('close-button').click();

    await expect(page.locator('#money_value')).toHaveText(`${expectedBalance}`);
  });
});
