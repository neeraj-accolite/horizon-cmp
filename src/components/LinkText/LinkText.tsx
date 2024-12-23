import React from 'react';
import { LinkTextProps } from './LinkText.model';
import { Link } from '@nextui-org/link';
import styles from './LinkText.module.scss';

const LinkText = ({
  label,
  onClick,
  rootClass,
  underline = true,
  className = '',
  ...rest
}: LinkTextProps) => {
  return (
    <Link
      {...rest}
      onClick={onClick}
      className={`${styles.text} ${className} ${rootClass || ''}`}
      underline={underline ? 'always' : 'none'}
      aria-label={label}
    >
      {label}
    </Link>
  );
};

export default LinkText;
