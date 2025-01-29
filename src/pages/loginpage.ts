import BasePage from './basePage';

export default class LoginPage extends BasePage {
  // locators
  readonly loginPageLocators = {
    username: this.page.locator('#username'),
    password: this.page.locator('#password'),
    loginButton: this.page.locator('#Login'),
  };

  // methods
  async navigateToLoginPage() {
    await this.page.goto('/');
  }

  async fillUserName(username: string) {
    await this.loginPageLocators.username.fill(username);
  }

  async fillPassword(password: string) {
    await this.loginPageLocators.password.fill(password);
  }

  async clickLoginButton() {
    await this.loginPageLocators.loginButton.click();
  }
}
