import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card Component', () => {
  test('renders with default styles', () => {
    const { getByText } = render(
      <Card className="rounded-lg border border-gray-300 bg-gray-100 p-4">
        <div>Default Child Component</div>
      </Card>,
    );
    const childElement = getByText('Default Child Component');
    expect(childElement).toBeInTheDocument();
    expect(childElement.parentElement).toHaveClass(
      'border border-gray-300 bg-gray-100 rounded-lg p-4',
    );
  });

  test('renders with custom styles', () => {
    const { getByText } = render(
      <Card className="rounded-xl border border-red-500 bg-red-700 p-8 text-white">
        <div>Custom Styled Child Component</div>
      </Card>,
    );
    const childElement = getByText('Custom Styled Child Component');
    expect(childElement).toBeInTheDocument();
    expect(childElement.parentElement).toHaveClass(
      'border border-red-500 bg-red-700 rounded-xl p-8 text-white',
    );
  });

  test('renders children correctly', () => {
    const { getByText } = render(
      <Card>
        <div>Child Component</div>
      </Card>,
    );
    const childElement = getByText('Child Component');
    expect(childElement).toBeInTheDocument();
  });

  test('matches snapshot with default styles', () => {
    const { asFragment } = render(
      <Card className="rounded-lg border border-gray-300 bg-gray-100 p-4">
        <div>Default Child Component</div>
      </Card>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot with custom styles', () => {
    const { asFragment } = render(
      <Card className="rounded-xl border border-red-500 bg-red-700 p-8 text-white">
        <div>Custom Styled Child Component</div>
      </Card>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot with children only', () => {
    const { asFragment } = render(
      <Card>
        <div>Child Component</div>
      </Card>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
