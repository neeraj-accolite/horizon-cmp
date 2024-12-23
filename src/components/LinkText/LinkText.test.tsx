import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import LinkText from './LinkText';

describe('UI Component - LinkText', () => {
  test('renders the LinkText component with default props', () => {
    const { getByText } = render(<LinkText label="Default LinkText" />);
    const linkText = getByText('Default LinkText');
    expect(linkText).toBeInTheDocument();
    expect(linkText).toHaveClass('text');
    expect(linkText).toHaveAttribute('aria-label', 'Default LinkText');
  });

  test('applies custom className and rootClass', () => {
    const { getByText } = render(
      <LinkText
        label="Custom LinkText"
        className="custom-class"
        rootClass="root-class"
      />,
    );
    const linkText = getByText('Custom LinkText');
    expect(linkText).toHaveClass('custom-class');
    expect(linkText).toHaveClass('root-class');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <LinkText label="Clickable Link" onClick={handleClick} />,
    );
    const linkText = getByText('Clickable Link');
    fireEvent.click(linkText);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not apply underline class when underline is set to false', () => {
    const { getByText } = render(
      <LinkText label="No Underline" underline={false} />,
    );
    const linkText = getByText('No Underline');
    expect(linkText).not.toHaveClass('underline');
  });

  test('applies underline class when underline is set to true', () => {
    const { getByText } = render(
      <LinkText label="Underlined Link" underline={true} />,
    );
    const linkText = getByText('Underlined Link');
    expect(linkText).toHaveClass('underline');
  });

  test('applies correct hover and active styles', () => {
    const { getByText } = render(
      <LinkText label="Interactive Link" underline={true} />,
    );
    const linkText = getByText('Interactive Link');
    expect(linkText).toHaveClass('hover:opacity-80', 'active:opacity-disabled');
  });

  test('renders with additional props passed via rest', () => {
    const { getByText } = render(
      <LinkText label="Additional Props" data-testid="custom-link" />,
    );
    const linkText = getByText('Additional Props');
    expect(linkText).toHaveAttribute('data-testid', 'custom-link');
    expect(linkText).toHaveAttribute('aria-label', 'Additional Props');
  });

  test('renders unchanged with default parameters (snapshot test)', () => {
    const { container } = render(<LinkText label="Snapshot Test" />);
    expect(container).toMatchSnapshot();
  });
});
