import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import LinkText from './LinkText';

describe('UI Component - LinkText', () => {
  test('renders the LinkText component with default props', async () => {
    const container = render(<LinkText label="Default LinkText" />);
    const linkText = await container.findByText('Default LinkText');
    expect(linkText).toBeInTheDocument();
    expect(linkText).toHaveStyle({
      color: 'inherit',
      fontSize: '16px',
      fontWeight: '700',
    });
  });

  test('onClick method is called when the LinkText is clicked', async () => {
    const handleClick = jest.fn();
    const container = render(
      <LinkText label="Clickable Text" onClick={handleClick} />,
    );
    const linkText = await container.findByText('Clickable Text');
    fireEvent.click(linkText);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies custom labelColor correctly', async () => {
    const container = render(
      <LinkText label="Colored Text" labelColor="#1976d2" />,
    );
    const linkText = await container.findByText('Colored Text');
    expect(linkText).toHaveStyle({ color: '#1976d2' });
  });

  test('renders with custom font size and weight', async () => {
    const container = render(
      <LinkText label="Large Bold Text" size="large" fontWeight={900} />,
    );
    const linkText = await container.findByText('Large Bold Text');
    expect(linkText).toHaveStyle({ fontSize: '20px', fontWeight: '900' });
  });

  test('removes underline when underline is set to false', async () => {
    const container = render(
      <LinkText label="No Underline" underline={false} />,
    );
    const linkText = await container.findByText('No Underline');
    expect(linkText).toHaveClass('underline-none');
  });

  test('keeps underline when underline is set to true', async () => {
    const container = render(
      <LinkText label="Underlined Text" underline={true} />,
    );
    const linkText = await container.findByText('Underlined Text');
    expect(linkText).not.toHaveClass('underline-none');
  });

  test('applies rootClass when provided', async () => {
    const container = render(
      <LinkText label="Custom Class" rootClass="custom-class" />,
    );
    const linkText = await container.findByText('Custom Class');
    expect(linkText).toHaveClass('custom-class');
  });

  test('renders unchanged with default parameters', async () => {
    const container = render(
      <LinkText
        label="Snapshot Test"
        size="medium"
        fontWeight={700}
        underline={true}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
