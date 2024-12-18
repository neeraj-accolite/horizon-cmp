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
      <Button label="Primary Button" variant="primary" labelColor="#ff0000" />,
    );
    expect(container).toMatchSnapshot();
  });
});
