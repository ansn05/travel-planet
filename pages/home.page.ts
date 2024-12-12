import { Locator, Page } from '@playwright/test';

export class HomePage {
  destinationPicker: Locator;
  datePicker: Locator;
  transportationPicker: Locator;
  selectRoom: Locator;
  loginTopButton: Locator;
  searchButton: Locator;

  constructor(public page: Page) {
    this.page = page;
    this.destinationPicker = this.page.locator("[name='destination_picker']");
    this.datePicker = this.page.locator("[name='date_picker']");
    this.transportationPicker = this.page.locator(
      "[name='transportation_picker']",
    );
    this.selectRoom = this.page.locator("[class='i-textbox__main-wrapper']");
    this.loginTopButton = this.page.locator(
      "[class='btn btn--link m-top-2__link']",
    );
    this.searchButton = this.page.locator("[name='btn_submit']");
  }

  async open(url: string): Promise<void> {
    await this.page.goto(url);
  }
}
