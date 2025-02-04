/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { expect } from '@utilities/base-test';
import BasePage from '@pages/basePage';

export default class HomePage extends BasePage {
  // homePage Locators
  readonly homePageLocators = {
    serviceButton: this.page.getByText('Home'),
  };

  // methods

  async navigateToHomePage() {
    await this.page.goto('https://ruby-connect-6698.lightning.force.com/lightning/page/home');
  }

  async expectServiceToBeVsible() {
    await expect(this.homePageLocators.serviceButton.first()).toBeVisible({ timeout: 15000 });
  }
}
