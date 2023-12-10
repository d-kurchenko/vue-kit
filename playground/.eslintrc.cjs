module.exports = {
  root: true,
  extends: [
    "airbnb-base",
    "airbnb-typescript/base"
  ],
  ignorePatterns:[".eslintrc.cjs", "vite.config.ts"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-console": "off",
    'no-restricted-syntax': "off",
  }
}
