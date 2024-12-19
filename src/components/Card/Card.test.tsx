import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';
import { CardProps } from './Card.model';

describe('Card Component', () => {
  const defaultProps: CardProps = {
    title: 'Test Card',
    children: <div>Test Child</div>,
    width: '400px',
    height: '300px',
  };

  it('renders the card with the correct title', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });

  it('renders the card with the correct children', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('applies hover styles correctly', () => {
    render(<Card {...defaultProps} />);
    const cardElement =
      screen.getByText('Test Card').parentElement?.parentElement;
    expect(cardElement).toHaveClass('transition-shadow');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Card {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
