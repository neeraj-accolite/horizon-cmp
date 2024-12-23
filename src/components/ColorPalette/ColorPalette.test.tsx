import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ColorPalette from './ColorPalette';
import { ColorItemProps } from './ColorPalette.model';
import ColorPaletteItem from './ColorPaletteItem';

const themeColors: ColorItemProps[] = [
  {
    title: 'red',
    colors: '#FF0000',
  },
  {
    title: 'grey',
    colors: {
      'grey-100': '#f5f5f5',
      'grey-light': '#eeeeee',
    },
  },
];

const ColorPaletteComponent = () => {
  return (
    <ColorPalette>
      {themeColors.map((colorItem) => (
        <ColorPaletteItem
          key={colorItem.title}
          title={colorItem.title}
          colors={colorItem.colors}
        />
      ))}
    </ColorPalette>
  );
};

describe('Theme Component - Color Palette', () => {
  test('render the Color palette with theme of single color and multiple colors ', async () => {
    const container = render(<ColorPaletteComponent />);
    themeColors.map(async (colorItem) => {
      const colorPaletteTitleComponent = await container.findByText(
        colorItem.title,
      );
      expect(colorPaletteTitleComponent).toBeInTheDocument();
    });
  });

  test('The Color Palette snapshot is matching with the existing one ', async () => {
    const container = render(<ColorPaletteComponent />);
    expect(container).toMatchSnapshot();
  });
});
