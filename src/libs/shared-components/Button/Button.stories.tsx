import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';
import { Star } from '../Icons';
export default {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    onClick: () => console.log('Primary button is clicked'),
    isDisabled: false,
    size: 'md',
    radius: 'sm',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    onClick: () => console.log('Secondary button is clicked'),
    isDisabled: false,
    size: 'md',
    radius: 'sm',
    className: 'w-full',
    color: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    onClick: () => console.log('Outline button is clicked'),
    isDisabled: false,
    size: 'sm',
    radius: 'sm',
    color: 'primary',
    variant: 'bordered',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    color: 'danger',
    onClick: () => console.log('Danger button is clicked'),
    isDisabled: false,
    size: 'md',
    radius: 'sm',
    className: 'w-full',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Button',
    color: 'success',
    onClick: () => console.log('Success button is clicked'),
    isDisabled: false,
    size: 'md',
    radius: 'sm',
    className: 'w-full',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    color: 'warning',
    onClick: () => console.log('Warning button is clicked'),
    isDisabled: false,
    size: 'md',
    radius: 'sm',
    className: 'w-full',
  },
};

export const SmallOutline: Story = {
  args: {
    children: 'Small Outline Button',
    onClick: () => console.log('Small Outline button is clicked'),
    isDisabled: false,
    size: 'sm',
    radius: 'sm',
    className: 'border-blue-500',
    color: 'primary',
    variant: 'bordered',
  },
};

export const LargeOutline: Story = {
  args: {
    children: 'Large Outline Button',
    onClick: () => console.log('Large Outline button is clicked'),
    isDisabled: false,
    size: 'lg',
    radius: 'lg',
    className: 'border-blue-500',
    color: 'primary',
    variant: 'bordered',
  },
};

export const CustomWidth: Story = {
  args: {
    children: 'Custom Width Button',
    onClick: () => console.log('Custom Width button is clicked'),
    isDisabled: false,
    className: 'w-[300px]',
    color: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    onClick: () => console.log('Disabled button is clicked'),
    isDisabled: true,
    size: 'md',
    radius: 'sm',
    className: 'w-full',
    color: 'primary',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    color: 'primary',
    isLoading: true,
    onClick: () => console.log('Loading button is clicked'),
    isDisabled: false,
    size: 'md',
    radius: 'sm',
    className: 'w-full',
  },
};

export const WithStartEndContent: Story = {
  args: {
    children: 'Button with Content',
    color: 'primary',
    startContent: <span>🌟</span>,
    endContent: <span>🚀</span>,
    onClick: () => console.log('Button with content is clicked'),
    isDisabled: false,
    size: 'md',
    radius: 'sm',
    className: 'w-full',
  },
};

export const StarIconButton: Story = {
  args: {
    children: <Star size={20} />,
    isIconOnly: true,
    color: 'danger',
    size: 'lg',
    onClick: () => console.log('Star button clicked'),
  },
};
