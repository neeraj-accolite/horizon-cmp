import React from 'react';
import { CardProps } from './Card.model';

const Card: React.FC<CardProps> = ({
  children,
  style = {},
  className = '',
}) => {
  return (
    <div style={{ ...style }} className={className}>
      {children}
    </div>
  );
};

export default Card;
