
import { loginDetails } from '@data/testdata';
import { test, expect } from '@utilities/base-test';

test.describe('Login Functionality', () => {
  test('should successfully login with valid credentials', async ({ loginPage, homePage }) => {
    await test.step('Navigate to login page', async () => {
      await loginPage.navigateToLoginPage();
    });

    await test.step('Fill login credentials', async () => {
      await loginPage.fillUserName(loginDetails.userData.username);
      await loginPage.fillPassword(loginDetails.userData.password);
    });

    await test.step('Submit login form', async () => {
      await loginPage.clickLoginButton();
    });

    await test.step('Verify successful login', async () => {
     await homePage.expectServiceToBeVsible();
    });
  });
});
