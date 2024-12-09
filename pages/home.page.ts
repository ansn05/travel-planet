import { Locator, Page } from '@playwright/test';

export class HomePage {
  
  constructor(public page: Page) {
    this.page = page;
  }

  async open(url: string): Promise<void>{
    await this.page.goto(url);
  }
}
