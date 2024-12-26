import React from 'react';
import { Card } from '@shared-components';
import styles from './WhyChooseHorizonCard.module.scss';

export interface WhyChooseHorizonCardProps {
  title: string;
  listItems: string[];
  style?: React.CSSProperties;
}

const WhyChooseHorizonCard: React.FC<WhyChooseHorizonCardProps> = ({
  title,
  listItems,
  style = {},
}) => {
  return (
    <Card
      style={{
        borderRadius: '12px',
        padding: '16px 12px',
        width: '316px',
        height: '188px',
        backgroundColor: 'white',
        ...style,
      }}
    >
      <div className={`${styles.title}`}>
        <h2>{title}</h2>
      </div>
      <ul className={`${styles.list}`}>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  );
};

export default WhyChooseHorizonCard;
