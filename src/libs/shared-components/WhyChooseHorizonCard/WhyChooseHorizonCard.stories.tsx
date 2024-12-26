import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { WhyChooseHorizonCardProps } from './WhyChooseHorizonCard';
import { WhyChooseHorizonCard } from '@shared-components';
export default {
  title: 'Components/WhyChooseHorizonCard',
  component: WhyChooseHorizonCard,
} as Meta;

const Template: StoryFn<WhyChooseHorizonCardProps> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#f9f9f9',
    }}
  >
    <WhyChooseHorizonCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Why Choose Horizon?',
  listItems: [
    'Same-day service & next-day installation',
    '24-hour availability',
    'On-time guarantee',
  ],
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  title: 'Custom Horizon Card',
  listItems: [
    'Custom style applied',
    'Different padding',
    'Unique color scheme',
  ],
};
