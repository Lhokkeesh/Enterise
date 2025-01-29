import { test } from '@playwright/test';

test('test husky', async () => {
  console.log('test'); // This should trigger ESLint warning
});
