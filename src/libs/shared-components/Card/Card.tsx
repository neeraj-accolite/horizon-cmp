import React from 'react';
import { CardProps } from './Card.model';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};
