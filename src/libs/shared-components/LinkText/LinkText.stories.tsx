import { Meta, StoryObj } from '@storybook/react';
import LinkText from './LinkText';

export default {
  title: 'Components/LinkText',
  component: LinkText,
  parameters: { layout: 'centered' },
} as Meta<typeof LinkText>;

type Story = StoryObj<typeof LinkText>;

export const DefaultLinkText: Story = {
  args: {
    href: '#',
    label: 'Default Linked Text',
    underline: 'always',
  },
};

export const CustomStyledLinkText: Story = {
  args: {
    href: '#',
    label: 'Custom Styled Linked Text',
    className: 'text-blue-600 font-semibold',
    underline: 'hover',
  },
};

export const LinkTextWithClickHandler: Story = {
  args: {
    href: '#',
    label: 'Click me!',
    onClick: () => alert('Link clicked!'),
    underline: 'always',
  },
};

export const LinkTextWithNoUnderline: Story = {
  args: {
    href: '#',
    label: 'No Underline Link',
    className: 'text-gray-500',
    underline: 'none',
  },
};

export const LinkTextWithLongText: Story = {
  args: {
    href: '#',
    label:
      'This is a very long linked text. The purpose of this link is to show how the component handles long text that may wrap or break based on the container width.',
    className: 'text-purple-600',
    underline: 'hover',
  },
};

export const DisabledLinkText: Story = {
  args: {
    href: '#',
    label: 'Disabled Link',
    className: 'text-gray-400 cursor-not-allowed',
    onClick: () => alert('This should be disabled'),
    underline: 'none',
  },
};
