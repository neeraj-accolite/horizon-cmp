import React, { useState, useEffect } from 'react';
import { CardListingComponentProps } from './CardListingComponent.model';
import { Card } from '../Card';
import { Link } from '../Link';
import { Accordion } from '../Accordion';
import Image from 'next/image';

const CardListingComponent: React.FC<CardListingComponentProps> = ({
  title,
  cards,
  backgroundColor,
}) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 390); // iPhone 12 width is 390px
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const accordionItems = cards.map((card) => ({
    title: card.title as string,
    children: (
      <div>
        {card.children}
        {card.links?.map((link, index) => (
          <Link key={index} underline="always" href={link.url}>
            <div
              style={{
                color: '#3F3E46',
                textDecoration: 'underline',
                textDecorationColor: '#3F3E46',
              }}
              className="text-base font-bold leading-6"
            >
              {link.text}
            </div>
          </Link>
        ))}
      </div>
    ),
  }));

  return (
    <div className="flex flex-col">
      <h2 className="pb-16 pt-8 text-center text-2xl font-bold">{title}</h2>
      {isMobileView ? (
        <Accordion vector={true} items={accordionItems}>
          {accordionItems.map((item, index) => (
            <div key={index}>{item.children}</div>
          ))}
        </Accordion>
      ) : (
        <div className="flex flex-wrap justify-start">
          {cards.map((card, index) => (
            <div
              key={index}
              className="box-border w-full p-2 sm:w-1/2 lg:w-1/3"
            >
              <Card className={card.className}>
                <h3
                  className="flex justify-start rounded-t-lg px-6 pb-2 pr-4 pt-6 text-xl font-bold"
                  style={{ backgroundColor: backgroundColor || '#F5F6F6' }}
                >
                  <Image
                    src="/plumbing_vector.svg"
                    alt="Icon"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  {card.title}
                </h3>
                <div className="px-6 pb-12 pt-4">{card.children}</div>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardListingComponent;
