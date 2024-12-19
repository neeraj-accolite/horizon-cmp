import { Accordion, AccordionItem } from '@nextui-org/react';
import { BasicAccordionProps } from './BasicAccordion.model';
import styles from './BasicAccordion.module.scss';

export const BasicAccordion: React.FC<BasicAccordionProps> = ({
  title,
  description,
  height,
  width,
}) => {
  return (
    <div className={styles.accordion} style={{ height, width }}>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label={title}
          title={<span className={styles.boldTitle}>{title}</span>}
        >
          {description}
        </AccordionItem>
      </Accordion>
    </div>
  );
};
