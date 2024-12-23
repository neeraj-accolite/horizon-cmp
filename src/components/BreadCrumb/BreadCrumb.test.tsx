import React from 'react';
import '@testing-library/jest-dom';
import BreadCrumb from './BreadCrumb';
import { BreadCrumbProps } from './BreadCrumb';
import { render, screen } from '@testing-library/react';

describe.only('BreadCrumb Component', () => {
  const renderComponent = (props: BreadCrumbProps) =>
    render(<BreadCrumb {...props} />);

  test('renders all breadcrumb items', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Plumbing', href: '/services/plumbing' },
    ];

    renderComponent({ items });

    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  test('highlights the last breadcrumb item as bold', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Plumbing' },
    ];

    renderComponent({ items });

    const lastItem = screen.getByText('Plumbing').closest('li');

    expect(lastItem).toBeInTheDocument();
    expect(lastItem).toHaveClass('font-bold');
  });

  test('renders correctly with an empty items array', () => {
    const { container } = render(<BreadCrumb items={[]} />);

    expect(container.firstChild).toBeNull();
  });

  test('handles edge case with only one item', () => {
    const items = [{ label: 'Home', href: '/' }];

    renderComponent({ items });

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('renders nothing when an empty array is passed', () => {
    render(<BreadCrumb items={[]} />);

    const breadcrumbs = screen.queryByRole('navigation');
    expect(breadcrumbs).toBeNull();
  });

  test('matches the snapshot', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Plumbing' },
    ];

    const { asFragment } = render(<BreadCrumb items={items} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('last breadcrumb item should not be clickable', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Category', href: '/category' },
      { label: 'Product' },
    ];

    render(<BreadCrumb items={items} />);

    const lastItem = screen.getByText('Product');

    // Check if the last breadcrumb item is not a link
    expect(lastItem.closest('a')).toBeNull();
  });
});
