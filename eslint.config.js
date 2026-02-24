// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'

/* ──────────────────────────────────────────────────────────
   ESLint Flat Config (ESM) для TS + React + Vite + Prettier
   ────────────────────────────────────────────────────────── */

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default tseslint.config(
  [
    /* ── 1) Игноры на уровне конфигурации ─────────────────── */
    {
      ignores: ['node_modules', 'dist', 'build', 'coverage', '**/*.min.js', '*.lock'],
    },

    /* ── 2) База + TS без type-check ───────────────────────── */
    {
      files: ['**/*.{ts,tsx,js,jsx}'],
      extends: [
        js.configs.recommended, // базовые правила JS
        tseslint.configs.recommended, // TS без анализа типов
        reactHooks.configs['recommended-latest'], // React Hooks
        reactRefresh.configs.vite, // для Vite Fast Refresh
        eslintConfigPrettier, // отключает конфликтующие с Prettier правила
      ],
      languageOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        globals: { ...globals.browser, ...globals.node },
      },
      plugins: {
        prettier: prettierPlugin,
      },
      rules: {
        /* ── 3) Интеграция с Prettier ──────────────────────── */
        'prettier/prettier': 'error',

        /* ── 4) Удобные правила под Vite+React ─────────────── */
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['@/pages/**/ui/**', '@/pages/**/router/**', '@/pages/**/route/**'],
                message:
                  'Use page public API (index.ts) instead of deep imports from pages internals.',
              },
            ],
          },
        ],
      },
    },
  ],
  storybook.configs['flat/recommended'],
)
