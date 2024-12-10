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
    this.homePage = new HomePage(this.page);
    locator.click();
  }

  constructor(private page: Page) {
    this.loginInput = this.page.getByTestId('login_email');
    this.passwordInput = this.page.getByTestId('login_password');
    this.loginButton = this.page.getByTestId('login_submit');
    this.loginError = this.page.locator("class='message__message u-mb-xxxs'");
    this.errorMessage =
      'Wypełniłeś formularz niepoprawnie. Spróbuj raz jeszcze.';
  }
}
