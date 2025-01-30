/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Page } from '@playwright/test';

export default class BasePage {
  constructor(readonly page: Page) {}
}
