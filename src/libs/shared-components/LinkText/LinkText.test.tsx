import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import LinkText from './LinkText';

describe('LinkText Component', () => {
  test('renders the correct label text', () => {
    const { getByText } = render(
      <LinkText href="#" label="Default Linked Text" />,
    );
    expect(getByText('Default Linked Text')).toBeInTheDocument();
  });

  test('applies custom className correctly', () => {
    const { container } = render(
      <LinkText
        href="#"
        label="Styled Link"
        className="font-bold text-blue-500"
      />,
    );
    const link = container.querySelector('a');
    expect(link).toHaveClass('text-blue-500', 'font-bold');
  });

  test('applies underline style based on "underline" prop', () => {
    const { container } = render(
      <LinkText
        href="#"
        label="Link with underline always"
        underline="always"
      />,
    );
    const link = container.querySelector('a');
    expect(link).toHaveClass('underline');
  });

  test('triggers onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <LinkText href="#" label="Clickable Link" onClick={onClickMock} />,
    );

    fireEvent.click(getByText('Clickable Link'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('renders long text correctly', () => {
    const longText =
      'This is a very long linked text. The purpose of this link is to show how the component handles long text that may wrap or break based on the container width.';
    const { getByText } = render(<LinkText href="#" label={longText} />);
    expect(getByText(longText)).toBeInTheDocument();
  });
});
