/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { Page, test as baseTest } from '@playwright/test';
import LoginPage from '@pages/loginpage';
import HomePage from '@pages/homepage';

export const pageFixtures = baseTest.extend<PageClassTypes>({
  homePage: async ({ page }: { page: Page }, use: (p: HomePage) => Promise<void>) =>
    await use(new HomePage(page)),
  loginPage: async ({ page }: { page: Page }, use: (p: LoginPage) => Promise<void>) =>
    await use(new LoginPage(page)),
});

export interface PageClassTypes {
  loginPage: LoginPage;
  homePage: HomePage;
}
