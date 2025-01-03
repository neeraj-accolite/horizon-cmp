import { ButtonProps as CustomButtonProps } from '@nextui-org/button';
import { ReactNode } from 'react';

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

  /**
   * The size of the button.
   * It can be one of the predefined sizes: 'sm', 'md', or 'lg'.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The border radius of the button.
   * It can be one of the following values: 'none', 'sm', 'md', 'lg', or 'full'.
   * 'full' creates a pill-shaped button.
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';

  /**
   * Flag to indicate if the button should only display an icon and no text.
   * When true, the button will only display the startContent or endContent without any textual label.
   */
  isIconOnly?: boolean;

  /**
   * Flag to indicate if the button should show a loading spinner.
   * When true, the button will show a loading indicator instead of its regular content.
   */
  isLoading?: boolean;

  /**
   * Content to be displayed at the start of the button.
   * This can be an icon or any custom element to appear before the button's label or content.
   */
  startContent?: ReactNode;

  /**
   * Content to be displayed at the end of the button.
   * This can be an icon or any custom element to appear after the button's label or content.
   */
  endContent?: ReactNode;
}
