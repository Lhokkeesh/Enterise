import { test } from '@utilities/base-test';

test.describe('Login Functionality', () => {
  const authFile = 'src/config/auth.json';
  test('should successfully login with valid credentials', async ({ loginPage, page }) => {
    await test.step('Navigate to login page', async () => {
      await loginPage.navigateToLoginPage();
    });
    await test.step('Fill login credentials', async () => {
      const username = process.env.TEST_USERNAME;
      const password = process.env.TEST_PASSWORD;

      if (!username || !password) {
        throw new Error('Username or Password is not defined in environment variables');
      }

      await loginPage.fillUserName(username);
      await loginPage.fillPassword(password);
    });

    await test.step('Submit login form and save auth state', async () => {
      await loginPage.clickLoginButton();
      await page.context().storageState({ path: authFile });
    });
  });
});
