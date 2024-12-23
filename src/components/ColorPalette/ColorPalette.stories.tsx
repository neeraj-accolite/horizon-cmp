import React from 'react';
import { Meta } from '@storybook/react';
import { theme as horizonTheme } from '../../../tailwind-configs/horizon-tailwind.config';
import { theme as casteelTheme } from '../../../tailwind-configs/casteel-tailwind.config';
import { theme as goldMedalTheme } from '../../../tailwind-configs/gold-medal-tailwind.config';
import { ColorItemProps, TailwindThemeColorProps } from './ColorPalette.model';
import ColorPalette from './ColorPalette';
import ColorPaletteItem from './ColorPaletteItem';

export default {
  title: 'Theme/ColorPalette',
  component: ColorPalette,
} as Meta;

const getThemeColors = (theme: TailwindThemeColorProps) => {
  const themeColors: ColorItemProps[] = [];
  Object.entries(theme.extend.colors).forEach(([key, value]) => {
    themeColors.push({
      title: key,
      colors: value,
    });
  });
  return themeColors;
};

const horizonThemeColors = getThemeColors(horizonTheme);

export const HorizonTheme = {
  render: () => (
    <ColorPalette>
      {horizonThemeColors.map((colorItem) => (
        <ColorPaletteItem
          key={colorItem.title}
          title={colorItem.title}
          colors={colorItem.colors}
        />
      ))}
    </ColorPalette>
  ),
};

const casteelThemeColors = getThemeColors(casteelTheme);
export const CasteelTheme = {
  render: () => (
    <ColorPalette>
      {casteelThemeColors.map((colorItem) => (
        <ColorPaletteItem
          key={colorItem.title}
          title={colorItem.title}
          colors={colorItem.colors}
        />
      ))}
    </ColorPalette>
  ),
};

const goldMedalThemeColors = getThemeColors(goldMedalTheme);
export const GoldMedalTheme = {
  render: () => (
    <ColorPalette>
      {goldMedalThemeColors.map((colorItem) => (
        <ColorPaletteItem
          key={colorItem.title}
          title={colorItem.title}
          colors={colorItem.colors}
        />
      ))}
    </ColorPalette>
  ),
};
