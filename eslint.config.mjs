import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      // Ignore specific files
      "*.config.js",
      "*.config.mjs",
      
      // Ignore specific directories
      "node_modules/",
      ".next/",
      "out/",
      "build/",
      "dist/",
      
      // Ignore specific file types
      "*.min.js",
      "*.bundle.js",
      
      // Ignore specific files
      "public/",
    ],
  },
  {
    rules: {
      // Disable specific rules here
      // Example: disable unused variables warning
      "@typescript-eslint/no-unused-vars": "off",
      // Example: disable console.log warnings
      "no-console": "off",
      // Example: disable prefer-const warnings
      "prefer-const": "off",
      
      // Common rules that developers often disable:
      "@typescript-eslint/no-explicit-any": "off", // Allow 'any' type
      "@typescript-eslint/ban-ts-comment": "off", // Allow @ts-ignore comments
      "react-hooks/exhaustive-deps": "off", // Disable exhaustive deps warning
      "@next/next/no-img-element": "off", // Allow img tags without next/image
      "react/no-unescaped-entities": "off", // Allow unescaped entities like & in JSX
      "@typescript-eslint/no-non-null-assertion": "off", // Allow ! operator
      "react/display-name": "off", // Disable display name requirement for components
      
      // Add more rules to disable as needed
    },
  },
];

export default eslintConfig;
