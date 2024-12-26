import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardListingComponent from './CardListingComponent';
import { CardListingComponentProps } from './CardListingComponent.model';

describe('CardListingComponent', () => {
  const defaultProps: CardListingComponentProps = {
    title: 'Our Plumbing Services',
    cards: [
      {
        title: 'Water Heaters',
        children: (
          <div>
            Keep your hot water flowing with our expert repair, proactive
            maintenance, and full installation services.
          </div>
        ),
        style: {
          borderColor: '#D9D9D9',
          borderWidth: '1px',
          borderRadius: '8px',
          borderStyle: 'solid',
        },
      },
      {
        title: 'Kitchen & Bathroom',
        children: (
          <div>
            Our expertise in repairing and installing kitchen and bathroom
            fixtures ensures these workhorses will have your back for years to
            come.
          </div>
        ),
        style: {
          borderColor: '#D9D9D9',
          borderWidth: '1px',
          borderRadius: '8px',
          borderStyle: 'solid',
        },
      },
    ],
    backgroundColor: '#F5F6F6',
  };

  test('renders the component with default props', () => {
    const { getByText } = render(<CardListingComponent {...defaultProps} />);
    expect(getByText('Our Plumbing Services')).toBeInTheDocument();
    expect(getByText('Water Heaters')).toBeInTheDocument();
    expect(getByText('Kitchen & Bathroom')).toBeInTheDocument();
  });

  test('renders card titles with the correct background color', () => {
    const { getByText } = render(<CardListingComponent {...defaultProps} />);
    const waterHeatersTitle = getByText('Water Heaters');
    const kitchenBathroomTitle = getByText('Kitchen & Bathroom');
    expect(waterHeatersTitle).toHaveStyle('backgroundColor: #F5F6F6');
    expect(kitchenBathroomTitle).toHaveStyle('backgroundColor: #F5F6F6');
  });

  test('renders card children correctly', () => {
    const { getByText } = render(<CardListingComponent {...defaultProps} />);
    expect(
      getByText(
        'Keep your hot water flowing with our expert repair, proactive maintenance, and full installation services.',
      ),
    ).toBeInTheDocument();
    expect(
      getByText(
        'Our expertise in repairing and installing kitchen and bathroom fixtures ensures these workhorses will have your back for years to come.',
      ),
    ).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<CardListingComponent {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
