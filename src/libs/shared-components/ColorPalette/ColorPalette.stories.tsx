import React from 'react';
import { Meta } from '@storybook/react';
import { ColorItemProps } from './ColorPalette.model';
import ColorPalette from './ColorPalette';
import ColorPaletteItem from './ColorPaletteItem';
import {
  MultiTenantThemeProps,
  horizonTheme,
  casteelTheme,
  goldMedalTheme,
} from '@theme-configs';

export default {
  title: 'Theme/ColorPalette',
  component: ColorPalette,
} as Meta;

const getThemeColors = (theme: MultiTenantThemeProps) => {
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
