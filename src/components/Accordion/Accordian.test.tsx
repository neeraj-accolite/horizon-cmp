import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AccordionComp } from './Accordion';
import { AccordionProps } from './Accordion.model';

const items: AccordionProps['items'] = [
  {
    title: 'Accordion Item 1',
    children: (
      <ul>
        <li>Child Item 1</li>
        <li>Child Item 2</li>
      </ul>
    ),
  },
  {
    title: 'Accordion Item 2',
    children: (
      <ul>
        <li>Child Item 1</li>
        <li>Child Item 2</li>
      </ul>
    ),
  },
  {
    title: 'Accordion Item 3',
    children: (
      <ul>
        <li>Child Item 1</li>
        <li>Child Item 2</li>
      </ul>
    ),
  },
];

describe('MultiNodeAccordion', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<AccordionComp items={items} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders all accordion items', () => {
    render(<AccordionComp items={items} />);
    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
