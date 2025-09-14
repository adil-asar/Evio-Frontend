// eslint.config.js
import js from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  // JS base rules
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // TypeScript base rules
  ...tseslint.configs.recommended,

  // React + Hooks + Prettier
  {
    files: ['**/*.{jsx,tsx,ts,js}'],
    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks,
      prettier: pluginPrettier,
    },
    rules: {
      // React defaults
      ...pluginReact.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Prettier
      'prettier/prettier': 'error',

      // Common React/TS rules
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Disable ESLint rules conflicting with Prettier
  {
    rules: {
      ...configPrettier.rules,
    },
  },
]);
