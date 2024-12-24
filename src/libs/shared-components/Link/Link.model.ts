import { LinkProps as NextUILinkProps } from '@nextui-org/link';
import React from 'react';

export interface LinkProps extends NextUILinkProps {
  /**
   * The class applied to the parent element.
   */
  className?: string;

  /**
   * The URL the link points to.
   */
  href?: string;

  /**
   * Specifies the underline style for the link.
   */
  underline?: 'always' | 'hover' | 'none';

  /**
   * Click event handler for the link.
   */
  onClick?: () => void;

  /**
   * Child elements to be wrapped by the link.
   */
  children: React.ReactNode;
}
