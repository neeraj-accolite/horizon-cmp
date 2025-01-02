import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WhyChooseHorizonCardProps } from './WhyChooseHorizonCard';
import { WhyChooseHorizonCard } from '@shared-components';
describe('WhyChooseHorizonCard', () => {
  const defaultProps: WhyChooseHorizonCardProps = {
    title: 'Why Choose Horizon?',
    listItems: [
      'Same-day service & next-day installation',
      '24-hour availability',
      'On-time guarantee',
    ],
  };

  it('renders the card title correctly', () => {
    render(<WhyChooseHorizonCard {...defaultProps} />);
    const titleElement = screen.getByRole('heading', {
      name: /Why Choose Horizon\?/i,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it('renders all list items provided in props', () => {
    render(<WhyChooseHorizonCard {...defaultProps} />);
    defaultProps.listItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders an empty list when no listItems are provided', () => {
    render(<WhyChooseHorizonCard title="Empty List Test" listItems={[]} />);
    const listElement = screen.getByRole('list');
    expect(listElement.children.length).toBe(0);
  });

  it('matches the snapshot', () => {
    const { container } = render(<WhyChooseHorizonCard {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
