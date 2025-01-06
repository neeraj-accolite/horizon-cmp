import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Accordion from './Accordion';
import { AccordionProps } from './Accordion.model';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

export const SingleAccordion = Template.bind({});
SingleAccordion.args = {
  items: [
    {
      title: 'Single Accordion Item',
      children: (
        <ul>
          <li>Child Item 1</li>
          <li>Child Item 2</li>
        </ul>
      ),
    },
  ],
  height: 'auto',
  width: '100%',
  multiExpand: false,
  className: 'custom-accordion',
  showSeparators: true,
};

export const MultiNodeAccordion = Template.bind({});
MultiNodeAccordion.args = {
  items: [
    {
      title: 'Accordion Item 1',
      children: (
        <ul>
          <li>Child Item 1</li>
          <li>Child Item 2</li>
        </ul>
      ),
    },
    {
      title: 'Accordion Item 2',
      children: (
        <ul>
          <li>Child Item 1</li>
          <li>Child Item 2</li>
        </ul>
      ),
    },
    {
      title: 'Accordion Item 3',
      children: (
        <ul>
          <li>Child Item 1</li>
          <li>Child Item 2</li>
        </ul>
      ),
    },
  ],
  height: 'auto',
  width: '100%',
  showSeparators: true,
  dividerColor: '#8E8C99',
};
