export interface AccordionItem {
  title: string;
  description: string;
  isOpen?: boolean;
}

export interface AccordionProps<T> {
  items: T[];
  height?: string;
  width?: string;
  multiExpand?: boolean;
  onToggle?: (index: number) => void;
  className?: string;
  showSeparators?: boolean;
  dividerColor?: string;
  hideSeparatorOnOpen?: boolean;
  renderHeader?: (item: T) => React.ReactNode;
  renderChild?: (item: T) => React.ReactNode;
}
