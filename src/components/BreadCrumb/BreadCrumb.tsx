import React from 'react';

export interface BreadCrumbProps {
  items: { label: string; href?: string }[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => {
  return (
    <div className="flex items-center text-sm text-gray-600">
      {items.map((item, index) => (
        <div key={index} className="flex flex-row items-center">
          {item.href && index !== items.length - 1 ? (
            <a href={item.href} className="cursor-pointer no-underline">
              {item.label}
            </a>
          ) : (
            <div
              className={`font-bold ${index === items.length - 1 ? 'text-gray-800' : ''}`}
            >
              {item.label}
            </div>
          )}
          {index < items.length - 1 && (
            <div className="mx-2 text-gray-800">&gt;</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
