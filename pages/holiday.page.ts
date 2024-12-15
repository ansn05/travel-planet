import { Locator, Page } from '@playwright/test';

export class HolidayPage {
  productList: Locator;
  paginationList: Locator;
  currentPagination: Locator;
  articleTitle: Locator;

  constructor(private page: Page) {
    this.productList = this.page.getByRole('article');
    this.paginationList = this.page.locator("[class='pagination__list']");
    this.currentPagination = this.page.locator("[class='pagination__current']");
    this.articleTitle = this.page.locator(
      "[class='b-product-list-2__link link-mask__unmask']",
    );
  }
}
