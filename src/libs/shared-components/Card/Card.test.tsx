import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card Component', () => {
  test('renders with default styles', () => {
    const { getByText } = render(
      <Card
        style={{
          borderColor: '#D9D9D9',
          backgroundColor: '#F5F6F6',
          borderRadius: '8px',
          padding: '1rem',
        }}
      >
        <div>Default Child Component</div>
      </Card>,
    );
    const childElement = getByText('Default Child Component');
    expect(childElement).toBeInTheDocument();
    expect(childElement.parentElement).toHaveStyle('borderColor: #D9D9D9');
    expect(childElement.parentElement).toHaveStyle('backgroundColor: #F5F6F6');
    expect(childElement.parentElement).toHaveStyle('borderRadius: 8px');
    expect(childElement.parentElement).toHaveStyle('padding: 1rem');
  });

  test('renders with custom styles', () => {
    const { getByText } = render(
      <Card
        style={{
          borderColor: '#FF5733',
          backgroundColor: '#C70039',
          borderRadius: '16px',
          padding: '2rem',
          color: '#FFFFFF',
        }}
      >
        <div>Custom Styled Child Component</div>
      </Card>,
    );
    const childElement = getByText('Custom Styled Child Component');
    expect(childElement).toBeInTheDocument();
    expect(childElement.parentElement).toHaveStyle('borderColor: #FF5733');
    expect(childElement.parentElement).toHaveStyle('backgroundColor: #C70039');
    expect(childElement.parentElement).toHaveStyle('borderRadius: 16px');
    expect(childElement.parentElement).toHaveStyle('padding: 2rem');
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
      <Card
        style={{
          borderColor: '#D9D9D9',
          backgroundColor: '#F5F6F6',
          borderRadius: '8px',
          padding: '1rem',
        }}
      >
        <div>Default Child Component</div>
      </Card>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot with custom styles', () => {
    const { asFragment } = render(
      <Card
        style={{
          borderColor: '#FF5733',
          backgroundColor: '#C70039',
          borderRadius: '16px',
          padding: '2rem',
          color: '#FFFFFF',
        }}
      >
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
