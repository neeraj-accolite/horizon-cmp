// SingleNodeAccordion.tsx
import React, { useState } from 'react';
import styles from './BasicAccordion.module.scss';
import Image from 'next/image';
import { BasicAccordionProps } from './BasicAccordion.model';

export const BasicAccordion: React.FC<BasicAccordionProps> = ({
  title,
  description,
  height,
  width,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.accordion} style={{ height, width }}>
      <div className={styles.accordionTitle} onClick={toggleAccordion}>
        <span>{title}</span>
        <Image
          src={isActive ? '/upArrow.svg' : '/downArrow.svg'}
          alt="Toggle Arrow"
          width={24}
          height={24}
          className={styles.icon}
        />
      </div>
      <div
        className={`${styles.accordionContent} ${isActive ? styles.active : ''}`}
      >
        {description}
      </div>
    </div>
  );
};
