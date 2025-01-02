import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Card } from './Card';
import { CardProps } from './Card.model';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>Default Child Component</div>,
  className: 'border border-gray-300 bg-gray-100 rounded-lg p-4',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  children: <div>Custom Styled Child Component</div>,
  className: 'border border-red-500 bg-red-700 rounded-xl p-8 text-white',
};
