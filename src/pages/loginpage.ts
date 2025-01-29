import { Page } from '@playwright/test';
import BasePage from './basePage';

export default class LoginPage extends BasePage {
  readonly loginPageLocators = {
    username: this.page.locator('#username'),
    password: this.page.locator('#password'),
    loginButton: this.page.locator('#Login'),
  };
}
