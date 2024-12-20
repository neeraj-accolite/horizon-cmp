import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    color: 'primary',
    onClick: () => console.log('Primary button is clicked'),
    disabled: false,
  },
};

export const SecondaryWithDefaultBorderColor: Story = {
  args: {
    label: 'Secondary Button',
    color: 'secondary',
    onClick: () => console.log('Secondary button is clicked'),
    disabled: false,
  },
};

export const SecondaryWithCustomBorderColor: Story = {
  args: {
    label: 'Secondary Button',
    color: 'secondary',
    onClick: () => console.log('Secondary button is clicked'),
    disabled: false,
    borderColor: '#FF0000',
  },
};

export const SecondaryWithCustomLabelColor: Story = {
  args: {
    label: 'Secondary Button',
    color: 'secondary',
    labelColor: '#FF0000',
    onClick: () => console.log('Secondary button is clicked'),
    disabled: false,
  },
};

export const SecondaryWithCustomFontWeight: Story = {
  args: {
    label: 'Secondary Button',
    color: 'secondary',
    fontWeight: 800,
    onClick: () => console.log('Secondary button is clicked'),
    disabled: false,
  },
};
