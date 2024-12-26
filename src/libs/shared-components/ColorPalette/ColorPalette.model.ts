import { ReactNode } from 'react';

export interface ColorItemProps {
  title: string;
  colors: Record<string, string> | string;
}

export interface ColorPaletteBlockProps {
  name: string;
  color: string;
}

export interface ColorPaletteProps {
  children: ReactNode;
}
