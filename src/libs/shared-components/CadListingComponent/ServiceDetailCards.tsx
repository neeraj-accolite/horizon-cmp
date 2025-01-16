import React, { useState, useEffect } from 'react';
import { ServiceDetailCardsProps, CardProps } from './ServiceDetailCards.model';
import { Link } from '../Link';
import { Accordion } from '../Accordion';
import CardContent from './ServiceDetailCardsContent';
import styles from './ServiceDetailCards.module.scss';
import PlumbingVector from '../Icons/IconList/PlumbingVector';
///comments added
const ServiceDetailCards: React.FC<ServiceDetailCardsProps> = ({
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
          items={cards}
          showSeparators={true}
          renderHeader={(item: CardProps) => (
            <div className="flex items-center pb-2 pt-4 text-lg">
              <div className="mr-2 flex items-center">
                <PlumbingVector fill="currentColor" size={32} />
              </div>
              <span>{item.title}</span>
            </div>
          )}
          renderChild={(item: CardProps) => {
            return (
              <div>
                {item.description}

                <Link underline="always" href={item.link_url}>
                  <div className={styles.link}>{item.link_text}</div>
                </Link>
              </div>
            );
          }}
        />
      ) : (
        <div className="flex flex-wrap justify-start">
          {cards.map((card, index) => (
            <div
              key={index}
              className="box-border w-full p-2 sm:w-1/2 lg:w-1/3"
            >
              <CardContent title={card.title} description={card.description} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceDetailCards;
