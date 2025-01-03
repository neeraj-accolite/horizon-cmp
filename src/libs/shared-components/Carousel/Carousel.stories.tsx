// CarouselComp.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Carousel from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {},
} as Meta;

const Template: StoryFn = (args) => (
  <div className="bg-gray-100 p-5">
    <Carousel {...args}>
      <div className="rounded-lg border border-gray-300 bg-white p-5 text-center">
        Item 1
      </div>
      <div className="rounded-lg border border-gray-300 bg-white p-5 text-center">
        Item 2
      </div>
      <div className="rounded-lg border border-gray-300 bg-white p-5 text-center">
        Item 3
      </div>
      <div className="rounded-lg border border-gray-300 bg-white p-5 text-center">
        Item 4
      </div>
    </Carousel>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
