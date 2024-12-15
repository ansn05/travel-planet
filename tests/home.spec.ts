import test, { expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { urlList } from '../test-data/urls.data';
import { DatePicker } from '../pages/components/datePicker.components';
import { CookieDialog } from '../pages/components/cookie-dialog.components';
import { HolidayPage } from '../pages/holiday.page';

test.describe.parallel('Basic functionalities check', () => {
  let homePage: HomePage;
  let context;
  let datePicker: DatePicker;
  let cookieDialog: CookieDialog;
  let holidayPage: HolidayPage;

  test.beforeEach(async ({ browser, page }) => {
    homePage = new HomePage(page);
    datePicker = new DatePicker(page);
    cookieDialog = new CookieDialog(page);
    holidayPage = new HolidayPage(page);

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

    test(`destination and date selection: ${url}`, async () => {
      await homePage?.open(url);
      await cookieDialog.closeDialog();
      await homePage.inputDestination(
        homePage.destinationPicker,
        homePage.checkboxFirstElement,
        homePage.destinationSubmitButton,
      );
      await datePicker.selectCalendarDate(7, 8);

      await homePage.searchButton.click();
      // await expect(datePicker.datePicker).toHaveAttribute(
      //   'value',
      //   datePicker.selectedClendarDates,
      // );
      await expect(holidayPage.productList.first()).toBeVisible();
      //   await expect(datePicker.datePicker).toHaveAttribute(
      //     'value',
      //     '09.01. - 16.01.2025 | 7-14 dni',
      //  );
    });
  }
});
