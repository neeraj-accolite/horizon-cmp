import React from 'react';
import { ButtonProps } from './Button.model';
import styles from './Button.module.scss';
import { Button as ButtonComp } from '@nextui-org/button';

const Button = ({
  label,
  onClick,
  color = 'primary',
  borderColor,
  labelColor,
  fontWeight,
  ...rest
}: ButtonProps) => {
  const inlineStyle: React.CSSProperties = {
    ...(borderColor && { borderColor }),
    ...(labelColor && { color: labelColor }),
    ...(fontWeight && { fontWeight }),
  };
  return (
    <ButtonComp
      {...rest}
      disableAnimation={true}
      className={`${styles.button} ${styles[color]}`}
      style={inlineStyle}
      onPress={onClick}
      aria-label={label}
    >
      {label}
    </ButtonComp>
  );
};

export default Button;
