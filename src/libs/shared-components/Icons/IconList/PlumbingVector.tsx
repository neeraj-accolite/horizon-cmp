import React from 'react';
import { IconProps } from '../Icons.model';

const PlumbingVector: React.FC<IconProps> = ({
  fill = 'currentColor',
  filled,
  size,
  ...props
}) => {
  return (
    <svg
      data-testid="plumbing-vector-icon"
      fill={filled ? fill : 'none'}
      height={size || 32}
      viewBox="0 0 32 32"
      width={size || 32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.3333 21.1111L22.4578 14.432C21.8641 13.9042 21.178 13.6272 20.4655 13.6272C19.7399 13.6272 19.0934 13.8779 18.4865 14.4188L12.5228 19.7491L10.082 17.5326C9.52784 17.0444 8.92092 16.7805 8.30081 16.7805C7.70708 16.7805 7.15294 17.0312 6.5988 17.5194L2.66667 21.1111C2.66667 21.1111 1.24532 17.282 1.77817 14.4188C2.31101 11.5556 3.33361 8.38304 6.2225 5.55556C9.11139 2.72807 12.8892 1.77778 16.0003 1.77778C19.1114 1.77778 23.1111 2.66667 26.2222 6C29.3333 9.33333 30.337 12.3946 30.2222 16.6667C30.1546 19.1848 29.3333 21.1111 29.3333 21.1111ZM11.9921 10.6693C11.9921 12.3845 10.5935 13.7831 8.89153 13.7831C7.17633 13.7831 5.77778 12.3845 5.77778 10.6693C5.77778 8.9673 7.17633 7.55556 8.89153 7.55556C10.5935 7.55556 11.9921 8.9673 11.9921 10.6693Z"
        fill="#F5F6F6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9921 10.6693C11.9921 12.3845 10.5935 13.7831 8.89153 13.7831C7.17633 13.7831 5.77778 12.3845 5.77778 10.6693C5.77778 8.9673 7.17633 7.55556 8.89153 7.55556C10.5935 7.55556 11.9921 8.9673 11.9921 10.6693Z"
        fill="#8E8C99"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM22.4578 14.432L29.3333 21.1111C29.3333 21.1111 30.1546 19.1848 30.2222 16.6667C30.337 12.3946 29.3333 9.33333 26.2222 6C23.1111 2.66667 19.1114 1.77778 16.0003 1.77778C12.8892 1.77778 9.11139 2.72807 6.2225 5.55556C3.33361 8.38304 2.31101 11.5556 1.77817 14.4188C1.24532 17.282 2.66667 21.1111 2.66667 21.1111L6.5988 17.5194C7.15294 17.0312 7.70708 16.7805 8.30081 16.7805C8.92092 16.7805 9.52784 17.0444 10.082 17.5326L12.5228 19.7491L18.4865 14.4188C19.0934 13.8779 19.7399 13.6272 20.4655 13.6272C21.178 13.6272 21.8641 13.9042 22.4578 14.432Z"
        fill="#8E8C99"
      />
    </svg>
  );
};

export default PlumbingVector;
