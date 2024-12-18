export interface AccordionItem {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export interface MultiNodeAccordionProps {
  items: AccordionItem[];
  height?: string;
  width?: string;
}