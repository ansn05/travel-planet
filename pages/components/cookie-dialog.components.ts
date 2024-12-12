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

  async ifCookiesModalWindowPresent(): Promise<void> {
    if (await this.cookiesAllowButton.isVisible()) {
      await this.cookiesAllowButton.click();
    } else {
    }
  }
}
