import { AccordionProps as NextUIAccordionProps } from '@nextui-org/react';

export interface AccordionItem {
  title: string;
  children?: React.ReactNode;
  isOpen?: boolean;
}

export interface AccordionProps extends NextUIAccordionProps {
  items: AccordionItem[];
  height?: string;
  width?: string;
  multiExpand?: boolean; // To allow multiple items to be expanded at the same t  onToggle?: (index: number) => void; // Callback function when an item is toggled
  className?: string; // Custom class name for styling
  style?: React.CSSProperties; // Inline styles for the accordion
  showSeparators?: boolean; // To show or hide separators between item
  dividerColor?: string;
  hideSeparatorOnOpen?: boolean;
  vector: boolean;
}
