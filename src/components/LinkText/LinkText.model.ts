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
   * Label Color
   */
  labelColor?: string;
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Font weight of the Link Text
   */
  fontWeight?: number;
  /**
   * To control underline under the text
   */
  underline?: boolean;
  /**
   * OnClick event of the Link Text
   */
  onClick?: () => void;
}
