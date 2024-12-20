import { ButtonProps as CustomButtonProps } from '@nextui-org/button';

export interface ButtonProps extends CustomButtonProps {
  /**
   * The class applied to the parent element.
   */
  rootClass?: string;
  /**
   * Label for the button
   */
  label: string;
  /**
   * Label Color
   */
  labelColor?: string;
  /**
   * Font weight of the button
   */
  fontWeight?: number;
  /**
   * Border Color for border
   */
  borderColor?: string;
  /**
   * OnClick event of the buttons
   */
  onClick?: () => void;
}
