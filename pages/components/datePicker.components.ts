import { Locator, Page } from '@playwright/test';
import { Console } from 'console';

export class DatePicker {
  selectedClendarDates = '09.01. - 16.01.2025 | 7-14 dni';
  totalRow: Locator;
  datePicker: Locator;
  confirmButton: Locator;
  dateValue: Locator;
  classIdDatePicker: Locator;

  constructor(private page: Page) {
    this.totalRow = this.page.locator('table tbody tr');
    this.datePicker = this.page.locator("[name='date_picker']");
    this.confirmButton = this.page.locator(
      "[class='btn sf-popup__button-primary']",
    );
    this.classIdDatePicker = this.page.locator(
      'i-textbox__input i-textbox__input--ellipsis',
    );
  }
  //select start and end dates on calendar
  async selectCalendarDate(startDate: number, endDate: number): Promise<void> {
    await this.datePicker.click();
    await this.totalRow.nth(startDate).click();
    await this.totalRow.nth(endDate).click();
    await this.confirmButton.click();
  }
}
