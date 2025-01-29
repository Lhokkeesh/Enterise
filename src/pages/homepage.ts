import { expect } from '@utilities/base-test';
import BasePage from './basePage';

export default class HomePage extends BasePage {
    // homePage Locators
    readonly homePageLocators = {
        serviceButton: this.page.getByText('Home'),
    }

    // methods
    async expectServiceToBeVsible() {
        await expect(this.homePageLocators.serviceButton.first()).toBeVisible({ timeout: 15000 });
    }
}