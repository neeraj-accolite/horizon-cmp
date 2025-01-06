import React from 'react';
import { BasicHeaderContentProps } from './BasicHeaderContent.model';

const TitleDescription: React.FC<BasicHeaderContentProps> = ({
  titleText,
  descriptionText,
  titleClassName = '',
  descriptionClassName = '',
}) => {
  return (
    <div className={`flex flex-col gap-[2.125rem] sm:gap-10`}>
      <h2 className={`${titleClassName}`}>{titleText}</h2>
      <p className={`${descriptionClassName}`}>{descriptionText}</p>
    </div>
  );
};

export default TitleDescription;
