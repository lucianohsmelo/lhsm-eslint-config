module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:sonarjs/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "eslint-plugin-import-helpers", "sonarjs"],
  rules: {
    "no-multiple-empty-lines": "error",
    "newline-before-return": "error",
    "newline-after-var": ["error", "always"],
    "sonarjs/cognitive-complexity": "error",
    "sonarjs/no-identical-expressions": "error",
    "import/newline-after-import": ["error", { count: 1 }],
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always", // new line between groups
        groups: ["module", "/^@lhsm/", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    curly: "error",
  },
};
