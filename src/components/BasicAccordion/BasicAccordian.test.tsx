import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BasicAccordion } from './BasicAccordion';
import { BasicAccordionProps } from './BasicAccordion.model';

const defaultProps: BasicAccordionProps = {
  title: 'Accordion Title',
  description: 'This is the description content of the accordion.',
  height: 'auto',
  width: '100%',
};

describe('UI Component - BasicAccordion', () => {
  test('renders the accordion component with default props', async () => {
    const container = render(<BasicAccordion {...defaultProps} />);
    const titleElement = await container.findByText('Accordion Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('applies custom height and width styles', async () => {
    const customProps: BasicAccordionProps = {
      ...defaultProps,
      height: 'auto',
      width: '50%',
    };
    const container = render(<BasicAccordion {...customProps} />);
    const accordionElement =
      await container.findByText('Accordion Title').parentElement;

    // Check if the element exists
    expect(accordionElement).not.toBeNull();

    // Check the styles
    if (accordionElement) {
      expect(accordionElement).toHaveStyle('height: auto');
      expect(accordionElement).toHaveStyle('width: 50%');
    }
  });

  test('renders the title in bold', async () => {
    const container = render(<BasicAccordion {...defaultProps} />);
    const titleElement = await container.findByText('Accordion Title');
    expect(titleElement).toHaveClass('boldTitle');
  });
});
