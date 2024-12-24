'use client';

import React from 'react';
import Link from '../Link/Link';
import { LinkTextProps } from './LinkText.model';

const LinkText: React.FC<LinkTextProps> = ({
  label,
  className = '',
  underline = 'always',
  ...rest
}) => {
  return (
    <Link className={`${className}`} underline={underline} {...rest}>
      {label}
    </Link>
  );
};

export default LinkText;
