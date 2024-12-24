import { theme as horizonTheme } from './horizon-tailwind.config';
import { theme as casteelTheme } from './horizon-tailwind.config';
import { theme as goldMedalTheme } from './horizon-tailwind.config';

export interface MultiTenantThemeProps {
  extend: {
    colors: {
      [key: string]: Record<string, string> | string;
    };
  };
}

export { horizonTheme, casteelTheme, goldMedalTheme };
