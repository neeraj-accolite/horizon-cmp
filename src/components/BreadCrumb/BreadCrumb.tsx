import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';

export interface BreadCrumbProps {
  items: { label: string; href?: string }[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => {
  const [currentPage, setCurrentPage] = React.useState(
    items.length > 0 ? items[items.length - 1].label : '',
  );

  if (items.length === 0) {
    return null; // Render nothing if there are no items
  }

  const handleClick = (itemLabel: string, href?: string) => {
    setCurrentPage(itemLabel);
    if (href) {
      window.location.href = href; // Navigate to the provided URL
    }
  };
  return (
    <Breadcrumbs>
      {items.map((item) => (
        <BreadcrumbItem
          onPress={() => handleClick(item.label, item.href)}
          key={item.label}
          href={item.href}
          isCurrent={currentPage === item.label}
          style={{ fontWeight: currentPage === item.label ? 'bold' : 'normal' }}
        >
          {item.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCrumb;
