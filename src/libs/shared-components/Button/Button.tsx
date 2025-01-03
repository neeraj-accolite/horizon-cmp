'use client';

import React from 'react';
import { Button as NextUIButton } from '@nextui-org/react';
import { ButtonProps } from './Button.model';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  url,
  isDisabled = false,
  radius = 'sm',
  color,
  variant,
  onClick,
  ...rest
}) => {
  return (
    <NextUIButton
      as="a"
      href={isDisabled ? undefined : url}
      variant={variant}
      isDisabled={isDisabled}
      className={`${variant === 'bordered' ? styles.outline : styles[color]} ${styles.button} ${className}`}
      onPress={onClick}
      radius={radius}
      color={color}
      {...rest}
    >
      {children}
    </NextUIButton>
  );
};

export default Button;
