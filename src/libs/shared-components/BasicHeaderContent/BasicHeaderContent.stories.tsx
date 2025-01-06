import { Meta, StoryObj } from '@storybook/react';
import BasicHeaderContent from './BasicHeaderContent';
export default {
  title: 'Components/BasicHeaderContent',
  component: BasicHeaderContent,
  parameters: { layout: 'centered' },
} as Meta<typeof BasicHeaderContent>;

type Story = StoryObj<typeof BasicHeaderContent>;

export const Default: Story = {
  args: {
    titleText: 'Default Title',
    descriptionText: 'This is the default description.',
  },
};

export const WithCustomStyles: Story = {
  args: {
    titleText: 'Styled Title',
    descriptionText: 'This description uses custom styles.',
    titleClassName: 'text-blue-500 text-lg',
    descriptionClassName: 'text-gray-700 text-sm',
  },
};

export const LongText: Story = {
  args: {
    titleText: 'Long Title Example',
    descriptionText:
      'This is an example of a long description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id bibendum metus, non commodo enim.',
  },
};

export const ShortText: Story = {
  args: {
    titleText: 'Short Title',
    descriptionText: 'Short description.',
  },
};
