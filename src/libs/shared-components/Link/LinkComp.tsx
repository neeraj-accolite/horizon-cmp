'use client';

import React from 'react';
import { Link as NextUiLink } from '@nextui-org/link'; // Alias the Link component
import { LinkProps } from './LinkComp.model';

const LinkComp: React.FC<LinkProps> = ({
  href,
  className = '',
  underline = 'none',
  children,
  ...rest
}) => {
  return (
    <NextUiLink
      href={href}
      className={`${className}`}
      underline={underline}
      {...rest}
    >
      {children}
    </NextUiLink>
  );
};

export default LinkComp;
