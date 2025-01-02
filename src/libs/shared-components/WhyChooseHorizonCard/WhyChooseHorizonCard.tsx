import React from 'react';
import { Card } from '@shared-components';

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
      style={style}
      className="h-[11.75rem] w-[19.75rem] rounded-lg bg-white p-4"
    >
      <div className="mb-2 text-start">
        <h4>{title}</h4>
      </div>
      <ul className="flex list-disc flex-col gap-2 pl-6 text-left font-normal">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  );
};

export default WhyChooseHorizonCard;
