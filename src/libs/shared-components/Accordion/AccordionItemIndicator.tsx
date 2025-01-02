import React from 'react';
import ArrowLeft from '../Icons/IconList/ArrowLeft';
import DownArrow from '../Icons/IconList/DownArrow';

interface AccordionItemIndicatorProps {
  isOpen: boolean;
}

const AccordionItemIndicator: React.FC<AccordionItemIndicatorProps> = ({
  isOpen,
}) => {
  return (
    <div
      className={`ease pb-2 pt-4 transition-transform duration-300 ${
        isOpen ? 'rotate-90' : 'rotate-0'
      }`}
    >
      {isOpen ? (
        <DownArrow size={16} data-testid="down-arrow-icon" />
      ) : (
        <ArrowLeft size={16} data-testid="arrow-left-icon" />
      )}
    </div>
  );
};

export default AccordionItemIndicator;
