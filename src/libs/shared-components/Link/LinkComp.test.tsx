import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LinkComp from './LinkComp';

describe('LinkComp', () => {
  test('renders link with correct href', () => {
    const { getByText } = render(<LinkComp href="/test">Test Link</LinkComp>);
    expect(getByText('Test Link')).toHaveAttribute('href', '/test');
  });

  test('applies custom className', () => {
    const { getByText } = render(
      <LinkComp href="/test" className="custom-class">
        Test Link
      </LinkComp>,
    );
    expect(getByText('Test Link')).toHaveClass('custom-class');
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <LinkComp href="/test" onClick={handleClick}>
        Test Link
      </LinkComp>,
    );
    fireEvent.click(getByText('Test Link'));
    expect(handleClick).toHaveBeenCalled();
  });

  test('applies underline style', () => {
    const { getByText } = render(
      <LinkComp href="/test" underline="always">
        Test Link
      </LinkComp>,
    );
    expect(getByText('Test Link')).toHaveClass('underline');
  });

  test('passes additional props', () => {
    const { getByText } = render(
      <LinkComp href="/test" target="_blank">
        Test Link
      </LinkComp>,
    );
    expect(getByText('Test Link')).toHaveAttribute('target', '_blank');
  });
});
