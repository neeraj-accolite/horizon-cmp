import { ReactNode } from 'react';

export interface CardProps {
  title: ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export interface CardListingComponentProps {
  title: string;
  cards: CardProps[];
  backgroundColor?: string;
}
