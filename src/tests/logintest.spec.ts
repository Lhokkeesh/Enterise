import { test } from '@utilities/base-test';

test.describe('Login Functionality', () => {
  test('should successfully login with valid credentials', async ({ loginPage, homePage }) => {
    await test.step('Navigate to login page', async () => {
      await loginPage.navigateToLoginPage();
    });
    await test.step('Fill login credentials', async () => {
      if (process.env.USERNAME && process.env.PASSWORD) {
        await loginPage.fillUserName(process.env.USERNAME);
        await loginPage.fillPassword(process.env.PASSWORD);
      } else {
        throw new Error('Username or Password is not defined in environment variables');
      }
    });

    await test.step('Submit login form', async () => {
      await loginPage.clickLoginButton();
    });

    await test.step('Verify successful login', async () => {
      await homePage.expectServiceToBeVsible();
    });
  });
});
