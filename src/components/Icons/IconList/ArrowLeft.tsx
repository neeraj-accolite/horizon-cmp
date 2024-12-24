import React from 'react';
import { IconProps } from '../Icons.model';

const ArrowLeft: React.FC<IconProps> = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      data-testid="arrow-left-icon"
      fill="currentColor"
      height={height || size || 24}
      viewBox="0 0 24 24"
      width={width || size || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
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

export default ArrowLeft;
