import { Locator, Page } from '@playwright/test';

export class HomePage {
  destinationPicker: Locator;
  destinationTextBox: Locator;
  datePicker: Locator;
  transportationPicker: Locator;
  selectRoom: Locator;
  loginTopButton: Locator;
  searchButton: Locator;
  checkboxFirstElement: Locator;
  destinationSubmitButton: Locator;

  constructor(public page: Page) {
    this.page = page;
    this.destinationPicker = this.page.locator("[name='destination_picker']");

    this.destinationTextBox = this.page.locator(
      "[data-cy='sf-destination-picker-textbox']",
    );
    this.checkboxFirstElement = this.page.locator('input[value=cou_11]');

    this.datePicker = this.page.locator("[name='date_picker']");
    this.transportationPicker = this.page.locator(
      "[name='transportation_picker']",
    );
    this.selectRoom = this.page.locator("[class='i-textbox__main-wrapper']");
    this.loginTopButton = this.page.locator(
      "[class='btn btn--link m-top-2__link']",
    );
    this.searchButton = this.page.locator("[name='btn_submit']");
    this.destinationSubmitButton = this.page.locator(
      'button[data-cy=sf-destination-picker-popup-save-button]',
    );
  }

  async open(url: string): Promise<void> {
    await this.page.goto(url);
  }
  //enter and confirm destination
  async inputDestination(
    destinationElement: Locator,
    checkboxElement: Locator,
    confirmButtonElement: Locator,
  ): Promise<void> {
    await destinationElement.click();
    await checkboxElement.check();
    await confirmButtonElement.click();
  }
}
