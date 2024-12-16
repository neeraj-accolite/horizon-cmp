export interface ButtonProps {
  /**
   * The class applied to the parent element.
   */
  rootClass?: string;
  /**
   * Label for the button
   */
  label?: string;
  /**
   * Label Color
   */
  labelColor?: string;
  /**
   * Button background color
   */
  variant?: 'primary' | 'secondary';
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Font weight of the button
   */
  fontWeight?: number;
  /**
   * Button Text or any custom component
   */
  children?: React.ReactNode | string;

  /**
   * OnClick event of the buttons
   */
  onClick?: () => void;
  /**
   * Flag to disable the button
   */
  disabled?: boolean;
}
