import { Locator, Page } from '@playwright/test';

export class ErrorMessage {
  loginErrorMessage: Locator;

  constructor(private page: Page) {
    this.loginErrorMessage = this.page.locator(
      '[class="message message--error message--icon u-mb-xs"]',
    );
  }

  async isErrorMessageVisible(): Promise<boolean> {
    await this.loginErrorMessage.waitFor();
    const errorMessage = this.loginErrorMessage;
    return await errorMessage.isVisible();
  }

  async errorMessageText() {
    const errorMessage = this.loginErrorMessage;
    return await errorMessage.textContent();
  }
}