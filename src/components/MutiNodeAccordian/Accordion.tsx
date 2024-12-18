import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Accordion.module.scss';
import { AccordionProps } from './Accordion.model';

export const MultiNodeAccordion: React.FC<AccordionProps> = ({
  items,
  height,
  width,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.accordionItem}
          style={{ height, width }}
        >
          <div
            className={styles.accordionTitle}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <Image
              src={activeIndex === index ? '/upArrow.svg' : '/downArrow.svg'}
              alt="Toggle Arrow"
              width={24}
              height={24}
              className={styles.icon}
            />
          </div>
          <div
            className={`${styles.accordionContent} ${
              activeIndex === index ? styles.active : ''
            }`}
          >
            {item.description}
            {item.children && (
              <div className={styles.children}>{item.children}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
