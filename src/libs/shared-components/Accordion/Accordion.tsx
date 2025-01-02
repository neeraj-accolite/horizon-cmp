import React from 'react';
import {
  Accordion as AccordionComp,
  AccordionItem,
  AccordionItemIndicatorProps,
} from '@nextui-org/accordion';
import { AccordionProps } from './Accordion.model';
import AccordionItemIndicator from './AccordionItemIndicator';
import Image from 'next/image';

const Accordion: React.FC<AccordionProps> = ({
  items,
  className,
  dividerColor,
  vector,
  showSeparators = true,
}) => {
  return (
    <div className={`${className} rounded-lg px-4 py-8 shadow-md`}>
      <AccordionComp
        aria-label="Accordion"
        showDivider={showSeparators}
        dividerProps={{
          className: '!border !border-solid h-px',
          style: { borderColor: dividerColor || '#111111' },
        }}
      >
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={item.title}
            title={
              <div className="flex items-center pb-2 pt-4 text-lg">
                {vector && (
                  <Image
                    src="/plumbing_vector.svg"
                    alt="Icon"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                )}
                <h5>{item.title}</h5>
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
