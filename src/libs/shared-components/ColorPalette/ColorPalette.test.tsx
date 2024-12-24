import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ColorPalette from './ColorPalette';
import { ColorItemProps } from './ColorPalette.model';
import ColorPaletteItem from './ColorPaletteItem';

const themeWithColorPalette: ColorItemProps[] = [
  {
    title: 'red',
    colors: '#FF0000',
  },
  {
    title: 'blue',
    colors: '#0000FF',
  },
  {
    title: 'grey',
    colors: {
      'grey-100': '#f5f5f5',
      'grey-light': '#eeeeee',
    },
  },
];

describe('Theme Component - Color Palette', () => {
  test('render the Color palette with theme for single and multiple color palette ', async () => {
    const container = render(
      <ColorPalette>
        {themeWithColorPalette.map((colorItem) => (
          <ColorPaletteItem
            key={colorItem.title}
            title={colorItem.title}
            colors={colorItem.colors}
          />
        ))}
      </ColorPalette>,
    );
    themeWithColorPalette.map(async (colorItem) => {
      const colorPaletteTitleComponent = await container.findByText(
        colorItem.title,
      );
      expect(colorPaletteTitleComponent).toBeInTheDocument();
      if (typeof colorItem.colors === 'string') {
        const colorValueComponent = await container.findByText(
          colorItem.colors,
        );
        expect(colorValueComponent).toBeInTheDocument();
      } else {
        const colorValueComponent = await container.findByText(
          colorItem.colors[0],
        );
        expect(colorValueComponent).toBeInTheDocument();
      }
    });
  });

  test('The Color Palette snapshot is generated successfully with multiple color palette ', async () => {
    const container = render(
      <ColorPalette>
        {themeWithColorPalette.map((colorItem) => (
          <ColorPaletteItem
            key={colorItem.title}
            title={colorItem.title}
            colors={colorItem.colors}
          />
        ))}
      </ColorPalette>,
    );
    expect(container).toMatchSnapshot();
  });
});
