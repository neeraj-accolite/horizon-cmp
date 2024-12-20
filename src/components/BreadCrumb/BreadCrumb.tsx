import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/breadcrumbs';

export interface BreadCrumbProps {
  items: { label: string; href?: string }[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="overflow-x-auto px-4">
      <Breadcrumbs
        classNames={{
          list: 'flex-nowrap',
        }}
        itemsAfterCollapse={items.length}
        itemsBeforeCollapse={items.length}
        maxItems={items.length}
      >
        {items.map((item, index) => (
          <BreadcrumbItem
            key={item.label}
            href={item.href}
            className={`${
              index === items.length - 1 ? 'font-bold' : 'font-normal'
            }`}
          >
            {item.label}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
