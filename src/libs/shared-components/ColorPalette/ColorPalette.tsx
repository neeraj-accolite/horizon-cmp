import React from 'react';
import { ColorPaletteProps } from './ColorPalette.model';

const ColorPalette: React.FC<ColorPaletteProps> = ({ children }) => (
  <div>{children}</div>
);

export default ColorPalette;
