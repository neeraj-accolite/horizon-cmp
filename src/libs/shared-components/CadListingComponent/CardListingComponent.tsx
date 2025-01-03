import React, { useState, useEffect } from 'react';
import { CardListingComponentProps } from './CardListingComponent.model';
import { Card } from '../Card';
import { Link } from '../Link';
import { Accordion } from '../Accordion';
import PlumbingVector from '../Icons/IconList/PlumbingVector';
import styles from './CardListingComponent.module.scss';

const CardListingComponent: React.FC<CardListingComponentProps> = ({
  title,
  cards,
}) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 390);
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
            <div className={styles.link}>{link.text}</div>
          </Link>
        ))}
      </div>
    ),
  }));

  return (
    <div className="flex flex-col">
      <h2 className="pb-16 pt-8 text-center">{title}</h2>
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
                <h3 className={styles.cardTitle}>
                  <div className="mr-2">
                    <PlumbingVector fill="currentColor" size={32} />
                  </div>

                  {card.title}
                </h3>
                <div className="px-6 pb-12 pt-4 text-base font-normal">
                  {card.children}
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardListingComponent;
