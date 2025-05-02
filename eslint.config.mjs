import globals from "globals";
import pluginJs from "@eslint/js";
import eslintRecommended from "@eslint/js/src/configs/eslint-recommended.js";

export default [
  eslintRecommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      "prefer-const": "error",
      "no-unused-vars": "error",
      "no-console": "error",
      semi: "error",
    },
  },
];
