import { ReactNode } from 'react';

export interface CardProps {
  title: ReactNode;
  children: React.ReactNode;
  className?: string;
  links?: { text: string; url: string }[];
}

export interface CardListingComponentProps {
  title: string;
  cards: CardProps[];
  backgroundColor?: string;
  linkColor?: string;
  linkUnderline?: string;
  linkDecorationColor?: string;
}
