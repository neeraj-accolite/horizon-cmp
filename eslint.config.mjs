import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
      'plugin:prettier/recommended',
      'plugin:tailwindcss/recommended',
    ],
    rules: {
      '@next/next/no-page-custom-font': 'off',
    },
    ignorePatterns: ['.lintstagedrc.js'],
    settings: {
      tailwindcss: {
        config: path.join(__dirname, './tailwind.config.ts'),
      },
    },
  }),
];

export default eslintConfig;
