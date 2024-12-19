import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BreadCrumb from './BreadCrumb';
import { BreadCrumbProps } from './BreadCrumb';

describe('BreadCrumb Component', () => {
  const renderComponent = (props: BreadCrumbProps) =>
    render(<BreadCrumb {...props} />);

  test('renders all breadcrumb items with links', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Plumbing', href: '/services/plumbing' },
    ];

    renderComponent({ items });

    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });

    const separators = screen.getAllByText('>');
    expect(separators.length).toBe(items.length - 1); // One less than the number of items
  });

  test('renders all breadcrumb items without links', () => {
    const items = [
      { label: 'Home' },
      { label: 'Services' },
      { label: 'Plumbing' },
    ];

    renderComponent({ items });

    // Check all breadcrumb items are rendered
    items.forEach((item) => {
      const element = screen.getByText(item.label);
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe('DIV');
    });

    // Check separator (>)
    const separators = screen.getAllByText('>');
    expect(separators.length).toBe(items.length - 1); // One less than the number of items
  });

  test('highlights the last breadcrumb item', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Plumbing' },
    ];

    renderComponent({ items });

    const lastItem = screen.getByText('Plumbing');
    expect(lastItem).toBeInTheDocument();
    expect(lastItem).toHaveClass('text-gray-800'); // Verify the last item is highlighted
    expect(lastItem).toHaveClass('font-bold');
  });

  test('renders correctly with an empty items array', () => {
    const { container } = render(<BreadCrumb items={[]} />);

    // Check that the container for breadcrumbs is empty
    const breadcrumbContainer = container.firstChild;
    expect(breadcrumbContainer).toBeEmptyDOMElement();
  });

  test('handles edge case with only one item', () => {
    const items = [{ label: 'Home', href: '/' }];

    renderComponent({ items });

    // Check that the item is rendered without a separator
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('>')).not.toBeInTheDocument();
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
});
