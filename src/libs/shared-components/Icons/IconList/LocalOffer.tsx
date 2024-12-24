import React from 'react';
import { IconProps } from '../Icons.model';

const LocalOffer: React.FC<IconProps> = ({
  fill = 'currentColor',
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      data-testid="local-offer-icon"
      fill="none"
      height={height || size}
      viewBox="0 0 32 32"
      width={width || size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask1_5004_7786"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="28"
        height="28"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.5465 15.44L16.5465 3.43996C16.0665 2.95996 15.3998 2.66663 14.6665 2.66663H5.33317C3.8665 2.66663 2.6665 3.86663 2.6665 5.33329V14.6666C2.6665 15.4 2.95984 16.0666 3.45317 16.56L15.4532 28.56C15.9332 29.04 16.5998 29.3333 17.3332 29.3333C18.0665 29.3333 18.7332 29.04 19.2132 28.5466L28.5465 19.2133C29.0398 18.7333 29.3332 18.0666 29.3332 17.3333C29.3332 16.6 29.0265 15.92 28.5465 15.44ZM7.33317 9.33329C6.2265 9.33329 5.33317 8.43996 5.33317 7.33329C5.33317 6.22663 6.2265 5.33329 7.33317 5.33329C8.43984 5.33329 9.33317 6.22663 9.33317 7.33329C9.33317 8.43996 8.43984 9.33329 7.33317 9.33329Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_5004_7786)">
        <rect
          x="-17.3335"
          y="-17.3334"
          width="66.6667"
          height="66.6667"
          fill={fill}
        />
        <mask
          id="mask1"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="-18"
          y="-18"
          width="68"
          height="68"
        >
          <rect
            x="-17.3335"
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

export default LocalOffer;
