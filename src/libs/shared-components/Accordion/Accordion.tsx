import React from 'react';
import {
  Accordion as AccordionComp,
  AccordionItem,
  AccordionItemIndicatorProps,
} from '@nextui-org/accordion';
import { AccordionProps } from './Accordion.model';
import AccordionItemIndicator from './AccordionItemIndicator';
import styles from './Accordion.module.scss';

const Accordion: React.FC<AccordionProps> = ({
  items,
  className,
  showSeparators = true,
  renderHeader,
  renderChild,
}) => {
  return (
    <div className={`${className} rounded-lg shadow-md`}>
      <AccordionComp
        aria-label="Accordion"
        showDivider={showSeparators}
        dividerProps={{
          className: `${styles.divider}`,
        }}
      >
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={item.title}
            title={
              <div className="flex items-center pb-2 pt-4 text-lg">
                {renderHeader ? (
                  renderHeader(item)
                ) : (
                  <h5 className="ml-1">{item.title}</h5>
                )}
              </div>
            }
            indicator={(props: AccordionItemIndicatorProps) => {
              return <AccordionItemIndicator isOpen={props.isOpen || false} />;
            }}
          >
            <div className="mb-3 text-base font-normal leading-6">
              {renderChild ? renderChild(item) : item.children}
            </div>
          </AccordionItem>
        ))}
      </AccordionComp>
    </div>
  );
};

export default Accordion;
