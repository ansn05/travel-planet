import { Locator, Page } from '@playwright/test';

export class HomePage {
  destinationPicker: Locator;
  datePicker: Locator;
  transportationPicker: Locator;
  selectRoom: Locator;

  constructor(public page: Page) {
    this.page = page;
    this.destinationPicker = this.page.locator("[name='destination_picker']");
    this.datePicker = this.page.locator("[name='date_picker']");
    this.transportationPicker = this.page.locator("[name='transportation_picker']");
    this.selectRoom = this.page.locator("[name='test-select-room']");
  }

  async open(url: string): Promise<void> {
    await this.page.goto(url);
  }
}
