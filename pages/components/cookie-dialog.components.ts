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
//close cookie dialog
  async closeDialog(): Promise<void> {
    this.page.on('dialog', (dialog) => dialog.accept());
    if (await this.cookiesAllowButton.isVisible()) {
      await this.cookiesAllowButton.click();
      this.page.on('dialog', (dialog) => dialog.accept());
    }
  }
}
