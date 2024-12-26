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
  style: {
    borderColor: '#D9D9D9',
    backgroundColor: '#F5F6F6',
    borderRadius: '8px',
    padding: '1rem',
  },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  children: <div>Custom Styled Child Component</div>,
  style: {
    borderColor: '#FF5733',
    backgroundColor: '#C70039',
    borderRadius: '16px',
    padding: '2rem',
    color: '#FFFFFF',
  },
};
