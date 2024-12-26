import React from 'react';
import { CardProps } from './Card.model';

export const Card: React.FC<CardProps> = ({ children, style = {} }) => {
  return <div style={{ ...style }}>{children}</div>;
};
