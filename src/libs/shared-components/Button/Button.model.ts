import { ButtonProps as CustomButtonProps } from '@nextui-org/button';

export interface ButtonProps extends CustomButtonProps {
  /**
   * The class applied to the parent element.
   */
  className?: string;
  /**
   * url of the button
   */
  url: string;
  /**
   * The colors for the button
   */
  color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /**
   * isDisable button to enable and disable the button
   */
  isDisabled?: boolean;
  /**
   * A function to be called when the button is clicked.
   * This handles the click event for the button.
   */
  onClick?: () => void;
}
