import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwrightPlugin from 'eslint-plugin-playwright';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strict,
  ...tseslint.configs.strictTypeChecked,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      }
    },
    plugins: {
      'playwright': playwrightPlugin
    },
    rules: {
      // Strict TypeScript rules
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': ['error', { overrides: { constructors: 'no-public' } }],
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      '@typescript-eslint/naming-convention': [
        'error',
        // Enforce PascalCase for types, interfaces, and classes
        {
          selector: ['typeLike', 'enumMember'],
          format: ['PascalCase']
        },
        // Enforce camelCase for functions, variables, and parameters
        {
          selector: ['function', 'variable', 'parameter'],
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow'
        },
        // Enforce interface names without I prefix
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false
          }
        }
      ],

      // // Promise and async/await rules
      // '@typescript-eslint/no-floating-promises': 'error',
      // '@typescript-eslint/await-thenable': 'error',
      // '@typescript-eslint/no-misused-promises': [
      //   'error',
      //   {
      //     checksVoidReturn: true,
      //     checksConditionals: true,
      //     checksSpreads: true
      //   }
      // ],
      // '@typescript-eslint/promise-function-async': 'error',
      // '@typescript-eslint/require-await': 'error',
      // '@typescript-eslint/return-await': ['error', 'always'],

      // // Type checking and imports
      // '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      // '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
      // '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      // '@typescript-eslint/method-signature-style': ['error', 'property'],
      // '@typescript-eslint/prefer-optional-chain': 'error',
      // '@typescript-eslint/no-non-null-assertion': 'error',
      // '@typescript-eslint/ban-ts-comment': 'error',
      // '@typescript-eslint/prefer-nullish-coalescing': 'error',
      // '@typescript-eslint/strict-boolean-expressions': 'error',

      // General code quality rules
      // 'no-console': 'error',
      // 'eqeqeq': ['error', 'always'],
      // 'no-duplicate-imports': 'error',
      // 'no-var': 'error',
      // 'prefer-const': 'error',
      // 'object-shorthand': ['error', 'always'],
      // 'prefer-template': 'error',
      // 'no-nested-ternary': 'error',
      // 'max-lines-per-function': ['error', { max: 50, skipBlankLines: true, skipComments: true }],
      'complexity': ['error', { max: 10 }],

      // // Playwright specific rules
      // 'playwright/no-conditional-in-test': 'error',
      // 'playwright/valid-expect': 'error',
      // 'playwright/no-focused-test': 'error',
      // 'playwright/no-skipped-test': 'error',
      // 'playwright/expect-expect': 'error',
      // 'playwright/no-force-option': 'error',
      // 'playwright/no-wait-for-timeout': 'error',
      // 'playwright/prefer-web-first-assertions': 'error'
    }
  }
);
