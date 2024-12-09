import { Locator, Page } from '@playwright/test';
import { SideMenuComponent } from './components/side-menu.components';

export class PulpitPage {
  transferReceiver: Locator;
  transferAmount: Locator;
  transferTitle: Locator;
  executeButton: Locator;
  closeButton: Locator;
  showMessage: Locator;
  userName: Locator;
  sideMenu: SideMenuComponent;

  constructor(private page: Page) {
    this.sideMenu = new SideMenuComponent(this.page);
    
    this.transferReceiver = page.locator('#widget_1_transfer_receiver');
    this.transferAmount = this.page.locator('#widget_1_transfer_amount');
    this.transferTitle = this.page.locator('#widget_1_transfer_title');
    this.executeButton = this.page.locator('#execute_btn');
    this.closeButton = this.page.getByTestId('close-button');
    this.showMessage = this.page.locator('#show_messages');
    this.userName = this.page.getByTestId('user-name')
  }
}
