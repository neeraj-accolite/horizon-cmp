export interface AccordionItem {
  title: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  renderHeader?: () => React.ReactNode;
  renderChild?: () => React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  height?: string;
  width?: string;
  multiExpand?: boolean;
  onToggle?: (index: number) => void;
  className?: string;
  style?: React.CSSProperties;
  showSeparators?: boolean;
  dividerColor?: string;
  hideSeparatorOnOpen?: boolean;
  renderHeader?: (item: unknown) => React.ReactNode;
  renderChild?: (item: unknown) => React.ReactNode;
}
