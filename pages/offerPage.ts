import { Locator, Page } from '@playwright/test';

export class OfferPage {
  offerElement: Locator;

  constructor(private page: Page) {
    this.offerElement = this.page.locator("[class='row-main u-pt-md u-mb-md']");
  }
}
