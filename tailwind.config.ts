/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
const tenant = process.env.TENANT || 'horizon';

let tenantTheme;
try {
  tenantTheme = require(`./tailwind-configs/${tenant}-tailwind.config.ts`);
} catch (err) {
  console.warn(
    `Horizon config is loaded, as Error in loading the provided tailwind config: ${err}`,
  );
  tenantTheme = require(`./tailwind-configs/horizon-tailwind.config.ts`);
}

export default {
  ...tenantTheme,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [nextui()],
} satisfies Config;
