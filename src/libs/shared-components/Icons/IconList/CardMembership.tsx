import React from 'react';
import { IconProps } from '../Icons.model';

const CardMembership: React.FC<IconProps> = ({
  fill = 'currentColor',
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      data-testid="card-membership-icon"
      fill="none"
      height={height || size}
      viewBox="0 0 33 32"
      width={width || size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_5004_7798"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="3"
        y="2"
        width="27"
        height="28"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 2.66663H5.66667C4.18667 2.66663 3 3.85329 3 5.33329V20C3 21.48 4.18667 22.6666 5.66667 22.6666H11V29.3333L16.3333 26.6666L21.6667 29.3333V22.6666H27C28.48 22.6666 29.6667 21.48 29.6667 20V5.33329C29.6667 3.85329 28.48 2.66663 27 2.66663ZM27 20H5.66667V17.3333H27V20ZM27 13.3333H5.66667V5.33329H27V13.3333Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_5004_7798)">
        <rect
          x="-17"
          y="-17.3334"
          width="66.6667"
          height="66.6667"
          fill={fill}
        />
        <mask
          id="mask1"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="-17"
          y="-18"
          width="67"
          height="68"
        >
          <rect
            x="-17"
            y="-17.3334"
            width="66.6667"
            height="66.6667"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1)"></g>
      </g>
    </svg>
  );
};

export default CardMembership;
