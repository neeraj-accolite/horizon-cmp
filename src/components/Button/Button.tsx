import React from 'react';
import { ButtonProps } from './Button.model';
import styles from './Button.module.scss';

const Button = ({
  label,
  children,
  disabled,
  onClick,
  variant = 'primary',
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label ?? children}
    </button>
  );
};

export default Button;
