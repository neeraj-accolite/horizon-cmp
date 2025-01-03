import React from 'react';
import {
  Accordion as AccordionComp,
  AccordionItem,
  AccordionItemIndicatorProps,
} from '@nextui-org/accordion';
import { AccordionProps } from './Accordion.model';
import AccordionItemIndicator from './AccordionItemIndicator';
import { PlumbingVector } from '../Icons';
import styles from './Accordion.module.scss';

const Accordion: React.FC<AccordionProps> = ({
  items,
  className,
  vector,
  showSeparators = true,
}) => {
  return (
    <div className={`${className} rounded-lg px-4 py-8 shadow-md`}>
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
                {vector && <PlumbingVector fill="currentColor" size={32} />}
                <h5 className="ml-1">{item.title}</h5>
              </div>
            }
            indicator={(props: AccordionItemIndicatorProps) => {
              return <AccordionItemIndicator isOpen={props.isOpen || false} />;
            }}
          >
            <div className="mb-3 text-base font-normal leading-6">
              {item.children && (
                <div className="mt-0 p-0">
                  <ul className="mt-0 pl-0">{item.children}</ul>
                </div>
              )}
            </div>
          </AccordionItem>
        ))}
      </AccordionComp>
    </div>
  );
};

export default Accordion;
