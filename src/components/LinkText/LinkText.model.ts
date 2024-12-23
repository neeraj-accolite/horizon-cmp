export interface LinkTextProps {
  /**
   * The class applied to the parent element.
   */
  rootClass?: string;
  /**
   * Label for the Link Text
   */
  label: string;
  /**
   * ClassName props for the LinkText
   */
  className?: string;
  /**
   * To control underline under the text
   */
  underline?: boolean;
  /**
   * OnClick event of the Link Text
   */
  onClick?: () => void;
}
