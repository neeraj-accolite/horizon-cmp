import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Button from './Button';

describe('UI Component - Button', () => {
  test('render the button component with default props ', async () => {
    const container = render(<Button label="Default Button" />);
    const button = await container.findByText('Default Button');
    expect(button).toBeInTheDocument();
  });

  test('onClick method is called when the button is clicked', async () => {
    const handleClick = jest.fn();
    const container = render(<Button label="Click Me" onClick={handleClick} />);
    const button = await container.findByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('onClick method should not be called when disabled', async () => {
    const handleClick = jest.fn();
    const container = render(
      <Button label="Click Me" onClick={handleClick} disabled={true} />,
    );
    const button = await container.findByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  test('render the button component unchanged with default parameters', async () => {
    const container = render(
      <Button label="Primary Button" color="primary" labelColor="#ff0000" />,
    );
    expect(container).toMatchSnapshot();
  });

  test('apply labelColor as inline style when passed as a prop', async () => {
    const labelColor = '#00ff00';
    const container = render(
      <Button label="Color Test" labelColor={labelColor} />,
    );
    const button = await container.findByText('Color Test');
    expect(button).toHaveStyle({ color: `${labelColor}` });
  });

  test('apply borderColor as inline style when passed as a prop', async () => {
    const borderColor = '#ff0000';
    const container = render(
      <Button
        label="Border Test"
        color="secondary"
        borderColor={borderColor}
      />,
    );
    const button = await container.findByText('Border Test');
    expect(button).toHaveStyle({ 'border-color': `${borderColor}` });
  });

  test('apply fontWeight as inline style when passed as a prop', async () => {
    const fontWeight = 800;
    const container = render(
      <Button label="Font Weight Test" fontWeight={fontWeight} />,
    );
    const button = await container.findByText('Font Weight Test');
    expect(button).toHaveStyle({ 'font-weight': `${fontWeight}` });
  });

  test('apply correct default class based on color prop', async () => {
    const container = render(
      <Button label="Secondary Button" color="secondary" />,
    );
    const button = await container.findByText('Secondary Button');
    expect(button).toHaveClass('secondary');
  });

  test('do not apply inline styles when optional props are not provided', async () => {
    const container = render(<Button label="No Inline Styles" />);
    const button = await container.findByText('No Inline Styles');
    expect(button).not.toHaveAttribute('style');
  });
});
