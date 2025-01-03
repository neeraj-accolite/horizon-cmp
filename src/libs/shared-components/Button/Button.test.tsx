import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with correct href', () => {
    const { getByText } = render(
      <Button url="/test" color="primary">
        Test Button
      </Button>,
    );
    expect(getByText('Test Button')).toHaveAttribute('href', '/test');
  });

  test('applies custom className', () => {
    const { getByText } = render(
      <Button url="/test" color="primary" className="custom-class">
        Test Button
      </Button>,
    );
    expect(getByText('Test Button')).toHaveClass('custom-class');
  });

  test('applies disabled state', () => {
    const { getByText } = render(
      <Button url="/test" color="primary" isDisabled>
        Disabled Button
      </Button>,
    );

    const buttonElement = getByText('Disabled Button').closest('a'); // Ensure we get the anchor element
    expect(buttonElement).not.toHaveAttribute('href'); // Assert the href attribute is not present
    expect(buttonElement).toHaveClass('pointer-events-none'); // Check for the class that indicates the button is disabled
    expect(buttonElement).toHaveClass('opacity-disabled'); // Check for opacity-related disabled styling
  });

  test('renders with the correct size', () => {
    const { getByText } = render(
      <Button url="/test" color="primary" size="lg">
        Large Button
      </Button>,
    );

    const buttonElement = getByText('Large Button').closest('a');
    expect(buttonElement).toHaveClass('h-12');
    expect(buttonElement).toHaveClass('px-6');
    expect(buttonElement).toHaveClass('text-medium');
  });

  test('renders with the correct radius', () => {
    const { getByText } = render(
      <Button url="/test" color="success" radius="full">
        Rounded Button
      </Button>,
    );

    const buttonElement = getByText('Rounded Button').closest('a');
    expect(buttonElement).toHaveClass('rounded-full');
  });

  test('renders with the correct color', () => {
    const { getByText } = render(
      <Button url="/test" color="primary">
        Primary Button
      </Button>,
    );
    expect(getByText('Primary Button')).toHaveClass(
      'text-buttonTextColor-primary',
    );
  });

  test('applies outline text color when bordered variant is used', () => {
    const { getByText } = render(
      <Button url="/test" color="secondary" variant="bordered">
        Bordered Button
      </Button>,
    );
    expect(getByText('Bordered Button')).toHaveClass(
      'text-buttonTextColor-outline',
    );
  });

  test('passes additional props', () => {
    const { getByText } = render(
      <Button url="/test" color="success" aria-label="Test Button">
        Test Button
      </Button>,
    );
    expect(getByText('Test Button')).toHaveAttribute(
      'aria-label',
      'Test Button',
    );
  });

  test('renders children content', () => {
    const { getByText } = render(
      <Button url="/test" color="danger">
        Button Content
      </Button>,
    );
    expect(getByText('Button Content')).toBeInTheDocument();
  });

  test('renders as an icon-only button', () => {
    const { container } = render(
      <Button url="/test" color="warning" isIconOnly>
        <span>Icon</span>
      </Button>,
    );
    expect(container.querySelector('span')).toBeInTheDocument();
  });
});
