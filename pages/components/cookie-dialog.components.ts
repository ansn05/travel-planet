import { Locator, Page } from '@playwright/test';

export class CookieDialog {
  cookiedialogWindow: Locator;
  cookiesAllowButton: Locator;

  constructor(private page: Page) {
    this.cookiedialogWindow = this.page.getByTestId('CybotCookiebotDialog');
    this.cookiesAllowButton = this.page.locator(
      "[id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']",
    );
  }
}
