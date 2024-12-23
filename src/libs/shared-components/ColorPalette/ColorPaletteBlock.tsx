import React from 'react';
import { ColorPaletteBlockProps } from './ColorPalette.model';

const ColorPaletteBlock: React.FC<ColorPaletteBlockProps> = ({
  name,
  color,
}) => (
  <div key={name} className="mr-6 content-center justify-center text-center">
    <div className="flex content-center justify-center">
      <div
        className="size-12 border border-solid border-black"
        style={{
          backgroundColor: color,
        }}
      ></div>
    </div>
    <div>
      <span className="text-red-600">{name}</span>
    </div>
    <div>
      <span className="text-sm">{color}</span>
    </div>
  </div>
);

export default ColorPaletteBlock;
