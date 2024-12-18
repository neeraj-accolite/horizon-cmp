export interface AccordionItem {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  height?: string;
  width?: string;
}
