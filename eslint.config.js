import js from "@eslint/js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import boundaries from "eslint-plugin-boundaries";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  js.configs.recommended,
  reactHooks.configs.flat.recommended,
  prettier,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      boundaries,
      "@typescript-eslint": typescriptEslintPlugin,
      "simple-import-sort": simpleImportSort,
      import: importPlugin,
    },

    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },

      "boundaries/elements": [
        { type: "shared", pattern: "shared/*" },
        { type: "entities", pattern: "entities/*" },
        { type: "features", pattern: "features/*" },
        { type: "widgets", pattern: "widgets/*" },
        { type: "pages", pattern: "pages/*" },
        { type: "app", pattern: "app/*" },
      ],
    },

    rules: {
      ...boundaries.configs.recommended.rules,
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            ["^\\u0000"],
            ["^"],
            ["^app"],
            ["^shared"],
            ["^pages"],
            ["^widgets"],
            ["^features"],
            ["^entities"],
            ["^\\.+/((?!s?css).)*$"],
            ["\\.s?css$"],
          ],
        },
      ],
      "boundaries/dependencies": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              from: { type: "entities" },
              allow: { to: { type: "shared" } },
            },
            {
              from: { type: "features" },
              allow: { to: { type: "entities" } },
            },
            {
              from: { type: "widgets" },
              allow: { to: { type: ["entities", "features"] } },
            },
            {
              from: { type: "pages" },
              allow: { to: { type: ["entities", "features", "widgets"] } },
            },
          ],
        },
      ],
    },
  },
];
