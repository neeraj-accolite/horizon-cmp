import React from 'react';
import { LinkTextProps } from './LinkText.model';
import styles from './LinkText.module.scss';

const LinkText = ({
  label,
  onClick,
  rootClass,
  labelColor = 'inherit',
  size = 'medium',
  fontWeight = 700,
  underline = true,
}: LinkTextProps) => {
  const textStyle = {
    color: labelColor,
    fontWeight,
    fontSize: size === 'small' ? '12px' : size === 'medium' ? '16px' : '20px',
  };

  return (
    <p
      onClick={onClick}
      style={textStyle}
      className={`${styles.text} ${!underline ? styles['underline-none'] : ''} ${rootClass || ''}`}
    >
      {label}
    </p>
  );
};

export default LinkText;
