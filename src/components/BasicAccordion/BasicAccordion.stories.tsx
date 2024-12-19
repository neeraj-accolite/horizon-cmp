import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BasicAccordion } from './BasicAccordion';
import { BasicAccordionProps } from './BasicAccordion.model';

export default {
  title: 'Components/BasicAccordion',
  component: BasicAccordion,
} as Meta;

const Template: StoryFn<BasicAccordionProps> = (args) => (
  <BasicAccordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Accordion Title',
  description: 'This is the description content of the accordion',
  height: 'auto',
  width: '100%',
};
