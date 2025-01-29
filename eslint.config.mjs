import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwrightPlugin from 'eslint-plugin-playwright';

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
  files: ['**/*.ts'],
  languageOptions: {
    parserOptions: {
      project: './tsconfig.json',
    },
  },
  plugins: {
    playwright: playwrightPlugin,
  },
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // General rules
    'no-console': 'warn',

    // Playwright specific rules
    'playwright/no-conditional-in-test': 'error',
    'playwright/valid-expect': 'error',
    'playwright/no-focused-test': 'error',
  },
});
