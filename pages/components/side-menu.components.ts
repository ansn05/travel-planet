import { Locator, Page } from '@playwright/test';

export class SideMenuComponent {
  paymentsButton: Locator;
  topUpPhone: Locator;
  constructor(private page: Page) {
    this.paymentsButton = this.page.getByRole('link', { name: 'płatności' });
    this.topUpPhone = this.page.locator('#phone_btn');
  }
}
