import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ImageWithContent from './ImageWithContent';
import { ImageWithContentProps } from './ImageWithContent.model';

export default {
  title: 'Components/ImageWithContent',
  component: ImageWithContent,
} as Meta;

const Template: StoryFn<ImageWithContentProps> = (args) => (
  <ImageWithContent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  image: 'https://via.placeholder.com/150',
  title: 'Pay over time with financing',
  description:
    'You can’t always plan in advance when it comes to big homeowner expenses, which is why we offer flexible financing options designed to work with your budget.',
  buttonText: 'Learn more about financing',
  buttonUrl: '#',
};
