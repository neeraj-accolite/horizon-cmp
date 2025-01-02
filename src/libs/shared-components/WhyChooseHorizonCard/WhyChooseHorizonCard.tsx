import React from 'react';
import { Card } from '@shared-components';

export interface WhyChooseHorizonCardProps {
  title: string;
  listItems: string[];
}

const WhyChooseHorizonCard: React.FC<WhyChooseHorizonCardProps> = ({
  title,
  listItems,
}) => {
  return (
    <Card className="min-h-[11.75rem] max-w-[19.75rem] rounded-lg bg-white px-3 py-4">
      <div className="mb-2 text-start">
        <h4>{title}</h4>
      </div>
      <ul className="flex list-disc flex-col gap-2 pl-6 pt-3 text-left text-base font-normal">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  );
};

export default WhyChooseHorizonCard;
