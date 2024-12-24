import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Card, CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Generic Card',
  children: <div>Child Component</div>,
  width: '400px',
  height: '300px',
};
