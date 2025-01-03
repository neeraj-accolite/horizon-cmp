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
  size,
  radius = 'sm',
  color,
  variant,
  onClick,
  ...rest
}) => {
  const textColorMap = {
    primary: 'text-buttonTextColor-primary',
    secondary: 'text-buttonTextColor-secondary',
    default: 'text-white',
    success: 'text-buttonTextColor-success',
    warning: 'text-buttonTextColor-warning',
    danger: 'text-buttonTextColor-danger',
  };
  let textColor = textColorMap[color] || textColorMap.default;

  if (variant === 'bordered') {
    textColor = 'text-buttonTextColor-outline'; // Ensure bordered variant uses outline color
  }
  return (
    <NextUIButton
      as="a"
      href={isDisabled ? undefined : url}
      variant={variant}
      isDisabled={isDisabled}
      className={`${textColor} ${styles.button} ${className}`}
      onPress={onClick}
      size={size}
      radius={radius}
      color={color}
      {...rest}
    >
      {children}
    </NextUIButton>
  );
};

export default Button;
