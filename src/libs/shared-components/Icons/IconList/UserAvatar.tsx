import React from 'react';
import { IconProps } from '../Icons.model';

const UserAvatar: React.FC<IconProps> = ({
  fill = 'currentColor',
  filled = 'true',
  size,
  ...props
}) => {
  return (
    <svg
      data-testid="user-avatar-icon"
      fill="currentColor"
      height={size || 24}
      viewBox="0 0 24 24"
      width={size || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22.5C17.7441 22.5 22.5 17.7441 22.5 12C22.5 6.26618 17.7338 1.5 11.9897 1.5C6.25588 1.5 1.5 6.26618 1.5 12C1.5 17.7441 6.26618 22.5 12 22.5ZM18.5265 17.8574C17.4868 16.6221 15.0985 15.5103 12 15.5103C8.90147 15.5103 6.52353 16.6118 5.47353 17.8471C4.09412 16.3029 3.26029 14.2544 3.26029 12C3.26029 7.15147 7.13088 3.25 11.9897 3.25C16.8485 3.25 20.7397 7.15147 20.75 12C20.7603 14.2647 19.9162 16.3132 18.5265 17.8574ZM12 13.7603C13.9765 13.7809 15.5309 12.0926 15.5309 9.87941C15.5309 7.8 13.9765 6.07059 12 6.07059C10.0235 6.07059 8.45882 7.8 8.46912 9.87941C8.47941 12.0926 10.0235 13.7397 12 13.7603Z"
        fill={filled ? fill : 'none'}
        stroke={fill}
      />
    </svg>
  );
};

export default UserAvatar;
