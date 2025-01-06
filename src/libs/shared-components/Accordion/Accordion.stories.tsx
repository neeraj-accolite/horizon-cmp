import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Accordion from './Accordion';
import { AccordionProps, AccordionItem } from './Accordion.model';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const Template: StoryFn<AccordionProps<AccordionItem>> = (args) => (
  <Accordion {...args} />
);

export const SingleAccordion = Template.bind({});
SingleAccordion.args = {
  items: [
    {
      title: 'Single Accordion Item',
      description: 'This is the description for the single accordion item.',
    },
  ],
  height: 'auto',
  width: '100%',
  multiExpand: false,
  className: 'custom-accordion',
  showSeparators: true,
  renderChild: (item: AccordionItem) => (
    <div>
      <p>{item.description}</p>
      <ul>
        <li>Child Item 1</li>
        <li>Child Item 2</li>
      </ul>
    </div>
  ),
};

export const MultiNodeAccordion = Template.bind({});
MultiNodeAccordion.args = {
  items: [
    {
      title: 'Accordion Item 1',
      description: 'This is the description for accordion item 1.',
    },
    {
      title: 'Accordion Item 2',
      description: 'This is the description for accordion item 2.',
    },
    {
      title: 'Accordion Item 3',
      description: 'This is the description for accordion item 3.',
    },
  ],
  height: 'auto',
  width: '100%',
  showSeparators: true,
  dividerColor: '#8E8C99',
  renderChild: (item: AccordionItem) => (
    <div>
      <p>{item.description}</p>
      <ul>
        <li>Child Item 1</li>
        <li>Child Item 2</li>
      </ul>
    </div>
  ),
};
