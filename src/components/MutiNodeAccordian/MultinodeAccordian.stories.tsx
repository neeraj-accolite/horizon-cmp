import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MultiNodeAccordion } from './MultiNodeAccordian';
import { MultiNodeAccordionProps } from './MultiNodeAccordian.model';

export default {
  title: 'Components/MultiNodeAccordion',
  component: MultiNodeAccordion,
} as Meta;

const Template: StoryFn<MultiNodeAccordionProps> = (args) => (
  <MultiNodeAccordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: 'Accordion Item 1',
      description: 'This is the description for accordion item 1.',
      children: (
        <ul>
          <li>Child Item 1</li>
          <li>Child Item 2</li>
        </ul>
      ),
    },
    {
      title: 'Accordion Item 2',
      description: 'This is the description for accordion item 2.',
      children: (
        <ul>
          <li>Child Item 1</li>
          <li>Child Item 2</li>
        </ul>
      ),
    },
    {
      title: 'Accordion Item 3',
      description: 'This is the description for accordion item 3.',
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
};
