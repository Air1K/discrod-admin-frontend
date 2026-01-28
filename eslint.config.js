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
      },
    },

    /* ── 5) (Опционально) TS с анализом типов ────────────────
     Включи блок ниже, если хочешь более строгий TS-линтинг.
     Понадобится parserOptions.project (см. комментарий).
  */
    // {
    //   files: ['**/*.{ts,tsx}'],
    //   extends: [tseslint.configs.recommendedTypeChecked],
    //   languageOptions: {
    //     parserOptions: {
    //       // Вариант А: один общий tsconfig:
    //       project: ['./tsconfig.json'],
    //       tsconfigRootDir: new URL('.', import.meta.url).pathname,
    //     },
    //   },
    //   rules: {
    //     // примеры строгих правил:
    //     // '@typescript-eslint/await-thenable': 'error',
    //     // '@typescript-eslint/no-floating-promises': 'error',
    //   },
    // },
  ],
  storybook.configs['flat/recommended'],
)
