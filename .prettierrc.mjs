/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: "consistent",
  tabWidth: 4,
  trailingComma: "es5",
  useTabs: true,
  endOfLine: "lf",
  arrowParens: "always",
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro-organize-imports",
  ],
  overrides: [
    {
      files: ["*.json", "*.md", "*.toml", "*.yml"],
      options: {
        useTabs: false,
      },
    },
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
