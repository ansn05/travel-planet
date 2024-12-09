import { Locator, Page } from '@playwright/test';
import { SideMenuComponent } from './components/side-menu.components';

export class PaymentPage {
  transferReceiver: Locator;
  accountNumber: Locator;
  paymentAmount: Locator;
  executeTransfer: Locator;
  closeButton: Locator;
  showMessages: Locator;
  sideMenu: SideMenuComponent;
  
  constructor(private page: Page) {
    
    this.sideMenu = new SideMenuComponent(this.page);

    this.transferReceiver = this.page.getByTestId('transfer_receiver');
    this.accountNumber = this.page.getByTestId('form_account_to');
    this.paymentAmount = this.page.getByTestId('form_amount');
    this.executeTransfer = this.page.getByRole('button', {
      name: 'wykonaj przelew',
    });
    this.closeButton = this.page.getByTestId('close-button');
    this.showMessages = this.page.locator('#show_messages');
  }
}
