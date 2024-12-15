import test, { expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { DatePicker } from '../pages/components/datePicker.components';
import { CookieDialog } from '../pages/components/cookie-dialog.components';
import { urlList } from '../test-data/urls.data';
import { HolidayPage } from '../pages/holiday.page';
import { OfferPage } from '../pages/offerPage';

test.describe.parallel('Basic functionalities check', () => {
  let homePage: HomePage;
  let context;
  let datePicker: DatePicker;
  let cookieDialog: CookieDialog;
  let holidayPage: HolidayPage;
  let offerPage: OfferPage;

  test.beforeEach(async ({ browser, page }) => {
    homePage = new HomePage(page);
    datePicker = new DatePicker(page);
    cookieDialog = new CookieDialog(page);
    holidayPage = new HolidayPage(page);
    offerPage = new OfferPage(page);

    context = await browser.newContext();
  });

  for (const url of urlList) {
    test(`offer selection: ${url}`, async () => {
      const currentPageNumber = '2';
      await homePage?.open(url);
      cookieDialog.closeDialog();
      await datePicker.selectCalendarDate(7, 8);
      await homePage.searchButton.click();
      await holidayPage.paginationList.getByText(currentPageNumber).click();

      await expect(holidayPage.currentPagination).toContainText(
        currentPageNumber,
      );
      await holidayPage.articleTitle.first().click();
      await expect(offerPage.offerElement).toBeVisible();
    });
  }
});
