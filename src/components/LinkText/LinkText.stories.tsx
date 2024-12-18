import LinkText from './LinkText';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/LinkText',
  component: LinkText,
  parameters: { layout: 'centered' },
} as Meta<typeof LinkText>;

type Story = StoryObj<typeof LinkText>;

export const LinkedTextUnderlined: Story = {
  args: {
    label: 'Linked Text With Underline',
    onClick: () => console.log('Linked Text is clicked'),
  },
};

export const LinkedText: Story = {
  args: {
    label: 'Linked Text',
    onClick: () => console.log('Linked Text is clicked'),
    underline: false,
  },
};
