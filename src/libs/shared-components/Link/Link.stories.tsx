import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  parameters: { layout: 'centered' },
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const DefaultLink: Story = {
  args: {
    href: '#',
    children: 'Default Link',
    underline: 'none',
  },
};

export const CustomStyledLink: Story = {
  args: {
    href: '#',
    children: 'Custom Styled Link',
    className: 'text-red-500 font-bold',
    underline: 'hover',
  },
};

export const ClickableChildComponent: Story = {
  args: {
    href: '#',
    children: (
      <div className="rounded bg-gray-200 p-4">
        <h3>Clickable Box</h3>
        <p>This entire box is clickable!</p>
      </div>
    ),
    underline: 'always',
  },
};

export const Clickable: Story = {
  args: {
    children: 'Clickable Link',
    className: 'text-gray-500',
    underline: 'none',
    onClick: () => console.log('this is clickable'),
  },
};

export const FullWidthLink: Story = {
  args: {
    href: '#',
    children: 'Full Width Link',
    className: 'w-full text-center p-2 bg-blue-500 text-white',
    underline: 'always',
  },
};

export const LinkWithTooltip: Story = {
  args: {
    href: '#',
    children: (
      <div className="group relative">
        <span className="text-blue-500">Hover over me</span>
        <div className="absolute left-0 mt-2 hidden rounded bg-black p-2 text-xs text-white group-hover:block">
          This is a tooltip!
        </div>
      </div>
    ),
    underline: 'none',
  },
};

export const LinkWithNestedLinks: Story = {
  args: {
    href: '#',
    children: (
      <div className="flex flex-col space-y-2">
        <Link href="#">First Nested Link</Link>
        <Link href="#">Second Nested Link</Link>
      </div>
    ),
    underline: 'always',
  },
};
