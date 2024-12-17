import React from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.model';

export const Card: React.FC<CardProps> = ({
  title,
  children,
  width,
  height,
}) => {
  return (
    <div className={`${styles['card-container']} transition-shadow`}>
      <div
        className={`${styles.card} flex flex-col items-center p-4 text-center`}
        style={{
          width: width,
          height: height,
        }}
      >
        <h2 className="text-xl mb-2">{title}</h2>
        <div className="flex-1 w-full">{children}</div>
      </div>
    </div>
  );
};

export type { CardProps };