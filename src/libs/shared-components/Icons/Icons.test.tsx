import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChevronRight from './IconList/ChevronRight';
import LocalOffer from './IconList/LocalOffer';
import UserAvatar from './IconList/UserAvatar';
import DownArrow from './IconList/DownArrow';
import ArrowLeft from './IconList/ArrowLeft';
import Star from './IconList/Star';
import CardMembership from './IconList/CardMembership';
import UpArrow from './IconList/UpArrow';

describe('Icons', () => {
  it('renders ChevronRight icon with filled prop true', () => {
    const { container } = render(
      <ChevronRight fill="currentColor" filled={true} size={24} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders ChevronRight icon with filled prop false', () => {
    const { container } = render(
      <ChevronRight fill="currentColor" filled={false} size={24} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders LocalOffer icon with default size when size prop is not provided', () => {
    const { getByTestId } = render(<LocalOffer fill="currentColor" />);
    const icon = getByTestId('local-offer-icon');
    expect(icon).toHaveAttribute('height', '24');
    expect(icon).toHaveAttribute('width', '24');
  });

  it('renders LocalOffer icon with provided size', () => {
    const { getByTestId } = render(
      <LocalOffer fill="currentColor" size={32} />,
    );
    const icon = getByTestId('local-offer-icon');
    expect(icon).toHaveAttribute('height', '32');
    expect(icon).toHaveAttribute('width', '32');
  });

  it('renders LocalOffer icon with filled prop true', () => {
    const { container } = render(
      <LocalOffer fill="currentColor" filled={true} size={24} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders LocalOffer icon with filled prop false', () => {
    const { container } = render(
      <LocalOffer fill="currentColor" filled={false} size={24} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders UserAvatar icon with filled prop true', () => {
    const { container } = render(
      <UserAvatar fill="currentColor" filled={true} size={24} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders UserAvatar icon with filled prop false', () => {
    const { container } = render(
      <UserAvatar fill="currentColor" filled={false} size={24} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders DownArrow icon with filled prop true', () => {
    const { container } = render(
      <DownArrow fill="currentColor" filled={true} size={24} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders DownArrow icon with filled prop false', () => {
    const { container } = render(
      <DownArrow fill="currentColor" filled={false} size={24} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders ArrowLeft icon with filled prop true', () => {
    const { container } = render(
      <ArrowLeft fill="currentColor" filled={true} size={24} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders ArrowLeft icon with filled prop false', () => {
    const { container } = render(
      <ArrowLeft fill="currentColor" filled={false} size={24} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders Star icon with filled prop true', () => {
    const { container } = render(
      <Star fill="currentColor" filled={true} size={24} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders Star icon with filled prop false', () => {
    const { container } = render(
      <Star fill="currentColor" filled={false} size={24} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders CardMembership icon with default size when size prop is not provided', () => {
    const { getByTestId } = render(<CardMembership fill="currentColor" />);
    const icon = getByTestId('card-membership-icon');
    expect(icon).toHaveAttribute('height', '24');
    expect(icon).toHaveAttribute('width', '24');
  });

  it('renders CardMembership icon with provided size', () => {
    const { getByTestId } = render(
      <CardMembership fill="currentColor" size={32} />,
    );
    const icon = getByTestId('card-membership-icon');
    expect(icon).toHaveAttribute('height', '32');
    expect(icon).toHaveAttribute('width', '32');
  });

  it('renders UpArrow icon with filled prop true', () => {
    const { container } = render(
      <UpArrow fill="currentColor" filled={true} size={24} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders UpArrow icon with filled prop false', () => {
    const { container } = render(
      <UpArrow fill="currentColor" filled={false} size={24} />,
    );
    expect(container).toMatchSnapshot();
  });
});
