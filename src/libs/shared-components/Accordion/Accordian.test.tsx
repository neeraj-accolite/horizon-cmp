import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Accordion from './Accordion';
import { AccordionItem } from './Accordion.model';
import AccordionItemIndicator from './AccordionItemIndicator';

const items: AccordionItem[] = [
  {
    title: 'Accordion Item 1',
    description: 'Description for Accordion Item 1',
  },
  {
    title: 'Accordion Item 2',
    description: 'Description for Accordion Item 2',
  },
  {
    title: 'Accordion Item 3',
    description: 'Description for Accordion Item 3',
  },
];

jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>,
  ) => <img {...props} />,
}));

describe('Accordion', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(
      <Accordion
        items={items}
        renderChild={(item: AccordionItem) => (
          <div>
            <p>{item.description}</p>
            <ul>
              <li>Child Item 1</li>
              <li>Child Item 2</li>
            </ul>
          </div>
        )}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders all accordion items', () => {
    render(
      <Accordion
        items={items}
        renderChild={(item: AccordionItem) => (
          <div>
            <p>{item.description}</p>
            <ul>
              <li>Child Item 1</li>
              <li>Child Item 2</li>
            </ul>
          </div>
        )}
      />,
    );
    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  test('renders without renderHeader and renderChild', () => {
    render(<Accordion items={items} />);
    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  test('renders with custom renderHeader', () => {
    render(
      <Accordion
        items={items}
        renderHeader={(item: AccordionItem) => (
          <div>
            <h3>{item.title}</h3>
          </div>
        )}
      />,
    );
    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});

describe('AccordionItemIndicator', () => {
  it('should render ArrowLeft when isOpen is false', () => {
    render(<AccordionItemIndicator isOpen={false} />);
    expect(screen.getByTestId('arrow-left-icon')).toBeInTheDocument();
  });

  it('should render DownArrow when isOpen is true', () => {
    render(<AccordionItemIndicator isOpen={true} />);
    expect(screen.getByTestId('down-arrow-icon')).toBeInTheDocument();
  });
});
