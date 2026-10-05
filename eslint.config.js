import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettier from 'eslint-config-prettier/flat';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const restrictedLayers = (layers) => ({
  'no-restricted-imports': [
    'error',
    {
      patterns: [
        {
          group: layers.flatMap((layer) => [`@${layer}`, `@${layer}/**`]),
          message: 'FSD: импортируй другие слайсы только из нижележащих слоёв.',
        },
      ],
    },
  ],
});

export default defineConfig([
  globalIgnores(['dist/**', '.idea/**', '.pnpm-store/**', '.cache/**', '**/*.tsbuildinfo']),
  {
    files: ['**/*.{js,ts,tsx}'],
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000(?!.*\\.css$)'],
            ['^node:'],
            ['^react', '^@?\\w'],
            ['^@app(?:/|$)'],
            ['^@pages(?:/|$)'],
            ['^@widgets(?:/|$)'],
            ['^@features(?:/|$)'],
            ['^@entities(?:/|$)'],
            ['^@shared(?:/|$)'],
            ['^\\.'],
            ['^.*\\.css\\u0000?$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  {
    files: ['**/*.js'],
    extends: [js.configs.recommended],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
    languageOptions: { globals: globals.browser },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
    },
  },
  { files: ['src/pages/**/*.{ts,tsx}'], rules: restrictedLayers(['app', 'pages']) },
  { files: ['src/widgets/**/*.{ts,tsx}'], rules: restrictedLayers(['app', 'pages', 'widgets']) },
  {
    files: ['src/features/**/*.{ts,tsx}'],
    rules: restrictedLayers(['app', 'pages', 'widgets', 'features']),
  },
  {
    files: ['src/entities/**/*.{ts,tsx}'],
    rules: restrictedLayers(['app', 'pages', 'widgets', 'features', 'entities']),
  },
  {
    files: ['src/shared/**/*.{ts,tsx}'],
    rules: restrictedLayers(['app', 'pages', 'widgets', 'features', 'entities']),
  },
  prettier,
]);
