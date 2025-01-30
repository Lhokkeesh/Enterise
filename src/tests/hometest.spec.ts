/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { test } from '@utilities/base-test';

// Use stored auth state for all tests in this file
test.use({ storageState: 'src/config/auth.json' });

test.describe('Homepage', () => {
  test('should display the homepage', async ({ homePage }) => {
    await test.step('Navigate and verify homepage', async () => {
      await homePage.navigateToHomePage();
      await homePage.expectServiceToBeVsible();
    });
  });
});
