import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
// @ts-expect-error - no types provided
import pluginPrettier from "eslint-plugin-prettier";
import * as configPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended,
    languageOptions: {
      globals: globals.browser,
    },
  },

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{jsx,tsx,ts,js}"],
    ...pluginReact.configs.flat.recommended,
    plugins: {
      react: pluginReact,
      "react-hooks": reactHooks,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  {
    rules: configPrettier.rules,
  },
]);
