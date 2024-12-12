import { Locator, Page } from '@playwright/test';
import { HomePage } from './home.page';

export class LoginPage {
  loginInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  loginError: Locator;
  passwordError: Locator;
  errorMessage: string;
  homePage: HomePage;

  async login(userEmail: string, password: string): Promise<void> {
    await this.loginInput.fill(userEmail);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  async openLoginForm(locator: Locator): Promise<void> {
    locator.click();
  }

  constructor(private page: Page) {
    this.loginInput = this.page.locator('#login_email');
    this.passwordInput = this.page.locator('#login_password');
    this.loginButton = this.page.locator('#login_submit');
  }
}
