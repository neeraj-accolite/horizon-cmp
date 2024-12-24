import React from 'react';
import { IconProps } from '../Icons.model';

const ChevronRight: React.FC<IconProps> = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      data-testid="chevron-right-icon"
      fill={filled ? fill : 'none'}
      height={height || size || 25}
      viewBox="0 0 24 25"
      width={width || size || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="8"
        y="6"
        width="8"
        height="13"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99984 6.7L8.58984 8.11L13.1698 12.7L8.58984 17.29L9.99984 18.7L15.9998 12.7L9.99984 6.7Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect x="-13" y="-12.3" width="50" height="50" fill={fill} />
        <mask
          id="mask1"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="-13"
          y="-13"
          width="50"
          height="51"
        >
          <rect x="-13" y="-12.3" width="50" height="50" fill="white" />
        </mask>
        <g mask="url(#mask1)"></g>
      </g>
    </svg>
  );
};

export default ChevronRight;
