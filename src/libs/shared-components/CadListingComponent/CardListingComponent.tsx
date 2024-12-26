import React from 'react';
import { CardListingComponentProps } from './CardListingComponent.model';
import { Card } from '../Card';

const CardListingComponent: React.FC<CardListingComponentProps> = ({
  title,
  cards,
  backgroundColor,
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="pb-16 pt-8 text-center text-2xl font-bold">{title}</h2>
      <div className="flex flex-wrap justify-start">
        {cards.map((card, index) => (
          <div key={index} className="box-border w-full p-2 sm:w-1/2 lg:w-1/3">
            <Card style={card.style}>
              <h3
                className="flex justify-center rounded-t-lg px-6 pb-2 pt-6 text-xl font-bold"
                style={{ backgroundColor: backgroundColor || '#F5F6F6' }}
              >
                {card.title}
              </h3>
              <div className="px-6 pb-12 pt-4">{card.children}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardListingComponent;
