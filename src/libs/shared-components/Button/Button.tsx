import React from 'react';
import { ButtonProps } from './Button.model';
import styles from './Button.module.scss';
import { Button as ButtonComp } from '@nextui-org/button';

const Button = ({
  label,
  onClick,
  color = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <ButtonComp
      {...rest}
      disableAnimation={true}
      className={`${styles.button} ${styles[color]}`}
      onPress={onClick}
      aria-label={label}
    >
      {label}
    </ButtonComp>
  );
};

export default Button;
