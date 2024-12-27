/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import { MultiTenantThemeProps } from '@theme-configs';
const tenant = process.env.TENANT || 'horizon';
import defaultTheme from 'tailwindcss/defaultTheme';

let tenantTheme: MultiTenantThemeProps;
try {
  tenantTheme = require(`./theme-configs/${tenant}-tailwind.config.ts`).theme;
} catch (err) {
  console.warn(
    `Horizon config is loaded, as Error in loading the provided tailwind config: ${err}`,
  );
  tenantTheme = require(`./theme-configs/horizon-tailwind.config.ts`).theme;
}

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/libs/shared-components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [nextui()],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans], // Default sans-serif: Inter
      },
      ...tenantTheme.extend,
    },
  },
} satisfies Config;
