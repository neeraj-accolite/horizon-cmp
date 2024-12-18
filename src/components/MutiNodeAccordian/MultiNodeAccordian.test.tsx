import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MultiNodeAccordion } from './MultiNodeAccordian';
import { MultiNodeAccordionProps } from './MultiNodeAccordian.model';

const items: MultiNodeAccordionProps['items'] = [
  {
    title: 'Accordion Item 1',
    description: 'This is the description for accordion item 1.',
    children: (
      <ul>
        <li>Child Item 1</li>
        <li>Child Item 2</li>
      </ul>
    ),
  },
  {
    title: 'Accordion Item 2',
    description: 'This is the description for accordion item 2.',
    children: (
      <ul>
        <li>Child Item 1</li>
        <li>Child Item 2</li>
      </ul>
    ),
  },
  {
    title: 'Accordion Item 3',
    description: 'This is the description for accordion item 3.',
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
    const { asFragment } = render(<MultiNodeAccordion items={items} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders all accordion items', () => {
    render(<MultiNodeAccordion items={items} />);
    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  test('toggles accordion content on click', () => {
    render(<MultiNodeAccordion items={items} />);
    items.forEach((item) => {
      const titleElement = screen.getByText(item.title);
      fireEvent.click(titleElement);
      expect(screen.getByText(item.description)).toBeVisible();
      fireEvent.click(titleElement);
    });
  });

  test('applies height and width to each accordion item', () => {
    const height = '200px';
    const width = '300px';
    render(<MultiNodeAccordion items={items} height={height} width={width} />);
    items.forEach((item) => {
      const accordionItem = screen
        .getByText(item.title)
        .closest('.accordionItem');
      expect(accordionItem).toHaveStyle(`height: ${height}`);
      expect(accordionItem).toHaveStyle(`width: ${width}`);
    });
  });
});
