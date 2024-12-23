import React from 'react';
import { LinkTextProps } from './LinkText.model';
import { Link } from '@nextui-org/link';
import styles from './LinkText.module.scss';

const LinkText = ({
  label,
  onClick,
  rootClass,
  labelColor = 'inherit',
  size = 'medium',
  fontWeight = 700,
  underline = true,
  ...rest
}: LinkTextProps) => {
  const textStyle = {
    color: labelColor,
    fontWeight,
    fontSize: size === 'small' ? '12px' : size === 'medium' ? '16px' : '20px',
  };

  return (
    <Link
      {...rest}
      onClick={onClick}
      style={textStyle}
      className={`${styles.text} ${rootClass || ''}`}
      underline={underline ? 'always' : 'none'}
      aria-label={label}
    >
      {label}
    </Link>
  );
};

export default LinkText;
