import React from 'react';
import { IconProps } from '../Icons.model';

const DownArrow: React.FC<IconProps> = ({
  fill = 'currentColor',
  filled,
  size,
  ...props
}) => {
  return (
    <svg
      data-testid="down-arrow-icon"
      fill="currentColor"
      height={size || 24}
      viewBox="0 0 24 24"
      width={size || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
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

export default DownArrow;
