import React from 'react';
import { CardProps } from './Card.model';

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};
