module.exports = {
  root: true,
  extends: [
    "airbnb-base",
    "airbnb-typescript/base"
  ],
  ignorePatterns:["dist", ".eslintrc.cjs", "rollup.config.js", "playground"],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    'no-restricted-syntax': "off",
  }
}
