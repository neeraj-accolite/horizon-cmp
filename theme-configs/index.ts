import { ThemeConfig } from 'tailwindcss/types/config';
import { theme as horizonTheme } from './horizon-tailwind.config';
import { theme as casteelTheme } from './horizon-tailwind.config';
import { theme as goldMedalTheme } from './horizon-tailwind.config';

interface ExtendedThemeProps extends Partial<Omit<ThemeConfig, 'colors'>> {
  colors: {
    [key: string]: Record<string, string> | string;
  };
}

export type MultiTenantThemeProps = { extend: ExtendedThemeProps };

export { horizonTheme, casteelTheme, goldMedalTheme };
