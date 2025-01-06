import React, { useState, useEffect } from 'react';
import { CardListingComponentProps } from './CardListingComponent.model';
import { Link } from '../Link';
import { Accordion } from '../Accordion';
import CardContent from './CardContent';
import styles from './CardListingComponent.module.scss';
import PlumbingVector from '../Icons/IconList/PlumbingVector';

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

  return (
    <div className="flex flex-col">
      <h2 className="py-8 text-center">{title}</h2>
      {isMobileView ? (
        <Accordion
          items={cards.map((card) => ({
            title: card.title,
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
          }))}
          showSeparators={true}
          renderHeader={(item) => (
            <div className="flex items-center pb-2 pt-4 text-lg">
              <div
                className="mr-2"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <PlumbingVector fill="currentColor" size={32} />
              </div>
              <span>{item.title}</span>
            </div>
          )}
        />
      ) : (
        <div className="flex flex-wrap justify-start">
          {cards.map((card, index) => (
            <div
              key={index}
              className="box-border w-full p-2 sm:w-1/2 lg:w-1/3"
            >
              <CardContent
                title={card.title}
                // eslint-disable-next-line react/no-children-prop
                children={<>{card.children}</>}
                className={card.className}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardListingComponent;
