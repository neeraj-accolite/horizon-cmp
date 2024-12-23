import React from 'react';
import Image from 'next/image';

const downArrow = '/downArrow.svg';
const upArrow = '/upArrow.svg';

interface AccordionItemIndicatorProps {
  isOpen: boolean;
  isDisabled?: boolean;
}

const AccordionItemIndicator: React.FC<AccordionItemIndicatorProps> = ({
  isOpen,
}) => {
  return (
    <div
      className={`ease transition-transform duration-300 ${
        isOpen ? 'rotate-90' : 'rotate-0'
      }`}
    >
      <Image
        src={isOpen ? upArrow : downArrow}
        alt="Arrow Icon"
        width={16}
        height={16}
      />
    </div>
  );
};

export default AccordionItemIndicator;
