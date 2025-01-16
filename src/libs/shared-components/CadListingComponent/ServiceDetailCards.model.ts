export interface CardProps {
  title: string;
  description: string;
  link_text?: string;
  link_url?: string;
}

//added commnets

export interface ServiceDetailCardsProps {
  title: string;
  cards: CardProps[];
}
