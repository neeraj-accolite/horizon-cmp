import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Accordion from './Accordion';
import { AccordionProps } from './Accordion.model';
import AccordionItemIndicator from './AccordionItemIndicator';

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
jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>,
  ) => <img {...props} />,
}));

describe('MultiNodeAccordion', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(
      <Accordion items={items}>
        <ul>
          <li>Child Item 1</li>
          <li>Child Item 2</li>
        </ul>
      </Accordion>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders all accordion items', () => {
    render(
      <Accordion items={items}>
        <ul>
          <li>Child Item 1</li>
          <li>Child Item 2</li>
        </ul>
      </Accordion>,
    );
    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
  it('should render down arrow when isOpen is false', () => {
    render(<AccordionItemIndicator isOpen={false} />);

    const image = screen.getByAltText('Arrow Icon');
    expect(image).toHaveAttribute('src', '/downArrow.svg');
  });

  it('should render up arrow when isOpen is true', () => {
    render(<AccordionItemIndicator isOpen={true} />);

    const image = screen.getByAltText('Arrow Icon');
    expect(image).toHaveAttribute('src', '/upArrow.svg');
  });
});
