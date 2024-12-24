export interface LinkTextProps {
  /**
   * The class applied to the parent element.
   */
  className?: string;
  /**
   * Define Label for the link text
   */
  label: string;

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
}
