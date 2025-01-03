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
  const textColorMap = {
    primary: styles.primary,
    secondary: styles.secondary,
    default: styles.default,
    success: styles.success,
    warning: styles.warning,
    danger: styles.danger,
  };
  let textColor = textColorMap[color] || textColorMap.default;

  if (variant === 'bordered') {
    textColor = styles.outline; // Ensure bordered variant uses outline color
  }
  return (
    <NextUIButton
      as="a"
      href={isDisabled ? undefined : url}
      variant={variant}
      isDisabled={isDisabled}
      className={`${textColor} ${styles.button} ${className}`}
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
