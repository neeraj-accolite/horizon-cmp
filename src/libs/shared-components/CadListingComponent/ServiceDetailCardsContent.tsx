import React from 'react';
import { CardProps } from './ServiceDetailCards.model';
import { Card } from '../Card';
import PlumbingVector from '../Icons/IconList/PlumbingVector';
import styles from './ServiceDetailCards.module.scss';

const CardContent: React.FC<CardProps> = ({ title, description }) => {
  return (
    <Card className="rounded-lg border border-gray-300">
      <h3 className={styles.cardTitle}>
        <div className="mr-2">
          <PlumbingVector fill="currentColor" size={32} />
        </div>
        {title}
      </h3>
      <div className="px-6 pb-12 pt-4 text-base font-normal">{description}</div>
    </Card>
  );
};

export default CardContent;
