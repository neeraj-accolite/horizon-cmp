import React from 'react';
import { IconProps } from '../Icons.model';

const Star: React.FC<IconProps> = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      data-testid="star-icon"
      fill={filled ? fill : 'none'}
      height={height || size || 16}
      viewBox="0 0 16 16"
      width={width || size || 16}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3038 13.4049C11.5163 13.2442 11.563 12.9799 11.4334 12.6067L10.3502 9.37774L13.1179 7.39268C13.4392 7.16463 13.5688 6.92104 13.4859 6.66707C13.4029 6.41311 13.1593 6.28872 12.7603 6.2939L9.36544 6.31982L8.33403 3.0753C8.20964 2.69695 8.02306 2.5 7.75355 2.5C7.48922 2.5 7.30263 2.69695 7.17824 3.0753L6.14684 6.31982L2.75202 6.2939C2.35294 6.28872 2.10934 6.41311 2.02641 6.66707C1.9383 6.92104 2.07306 7.16463 2.3944 7.39268L5.16208 9.37774L4.07885 12.6067C3.94928 12.9799 3.99592 13.2442 4.20842 13.4049C4.42092 13.5707 4.69044 13.5137 5.01178 13.2805L7.75355 11.2643L10.5005 13.2805C10.8218 13.5137 11.0862 13.5707 11.3038 13.4049Z"
        fill={fill}
      />
    </svg>
  );
};

export default Star;
