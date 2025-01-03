import React from 'react';
import { CardProps } from './CardListingComponent.model';
import { Card } from '../Card';
import PlumbingVector from '../Icons/IconList/PlumbingVector';
import styles from './CardListingComponent.module.scss';

const CardContent: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <Card className={className}>
      <h3 className={styles.cardTitle}>
        <div className="mr-2">
          <PlumbingVector fill="currentColor" size={32} />
        </div>
        {title}
      </h3>
      <div className="px-6 pb-12 pt-4 text-base font-normal">{children}</div>
    </Card>
  );
};

export default CardContent;
