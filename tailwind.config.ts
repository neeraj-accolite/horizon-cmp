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
    fontSize: {
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '1.75rem' }],
      '3xl': ['1.75rem', { lineHeight: '2rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '6xl': ['2.5rem', { lineHeight: '3rem' }],
      '7xl': ['2.75rem', { lineHeight: '3rem' }],
      '8xl': ['3rem', { lineHeight: '3.5rem' }],
    },
    screens: {
      sm: '640px', // Small screens (mobile)
      md: '768px', // Medium screens (tablet)
      lg: '1024px', // Large screens (desktop)
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans], // Default sans-serif: Inter
      },
      ...tenantTheme.extend,
    },
  },
} satisfies Config;
