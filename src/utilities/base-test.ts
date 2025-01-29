import { pageFixtures } from '@pages/pagefixture'
import { mergeTests } from '@playwright/test'

export const test = mergeTests(pageFixtures)
export { expect } from '@playwright/test'
