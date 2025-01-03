import React from 'react';
import {
  Accordion as AccordionComp,
  AccordionItem,
  AccordionItemIndicatorProps,
} from '@nextui-org/accordion';
import { AccordionProps } from './Accordion.model';
import AccordionItemIndicator from './AccordionItemIndicator';

const Accordion: React.FC<AccordionProps> = ({
  items,
  className,
  dividerColor = '#8E8C99',
  showSeparators = false,
}) => {
  return (
    <div className={`${className} rounded-lg p-4 shadow-md`}>
      <AccordionComp
        aria-label="Accordion"
        showDivider={showSeparators}
        dividerProps={{ className: `bg-[${dividerColor}] h-0.5` }}
      >
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={item.title}
            title={
              <span className="text-base font-bold leading-6">
                {item.title}
              </span>
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
