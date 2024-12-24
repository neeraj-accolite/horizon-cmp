import React from 'react';
import { IconProps } from '../Icons.model';

const UpArrow: React.FC<IconProps> = ({
  fill = 'currentColor',
  filled,
  size,
  ...props
}) => {
  return (
    <svg
      data-testid="up-arrow-icon"
      fill="none"
      height={size || 25}
      viewBox="0 0 25 25"
      width={size || 25}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.4201 15.8197L13.9001 9.29967C13.1301 8.52967 11.8701 8.52967 11.1001 9.29967L4.58008 15.8197"
        stroke={fill}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={filled ? fill : 'none'}
      />
    </svg>
  );
};

export default UpArrow;
