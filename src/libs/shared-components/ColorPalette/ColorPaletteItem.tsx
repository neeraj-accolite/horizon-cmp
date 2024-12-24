import React from 'react';
import { ColorItemProps } from './ColorPalette.model';
import ColorPaletteBlock from './ColorPaletteBlock';

const ColorPaletteItem: React.FC<ColorItemProps> = ({ title, colors }) => (
  <div className="mb-1">
    <div className="my-4 text-xl font-bold">{title}</div>
    <div className="flex content-center">
      {typeof colors === 'string' ? (
        <ColorPaletteBlock name={title} color={colors} />
      ) : (
        Object.entries(colors).map(([name, color]) => (
          <ColorPaletteBlock key={name} name={name} color={color} />
        ))
      )}
    </div>
  </div>
);

export default ColorPaletteItem;
