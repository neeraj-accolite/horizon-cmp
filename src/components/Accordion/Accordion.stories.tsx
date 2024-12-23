import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AccordionComp } from './Accordion';
import { AccordionProps } from './Accordion.model';

export default {
  title: 'Components/Accordion',
  component: AccordionComp,
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => <AccordionComp {...args} />;

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
      isOpen: false,
      disabled: false,
      onClick: () => console.log('Single Accordion Item clicked'),
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
      isOpen: false,
      disabled: false,
      onClick: () => console.log('Accordion Item 1 clicked'),
    },
    {
      title: 'Accordion Item 2',
      children: (
        <ul>
          <li>Child Item 1</li>
          <li>Child Item 2</li>
        </ul>
      ),
      isOpen: false,
      icon: <span>🔽</span>,
      disabled: false,
      onClick: () => console.log('Accordion Item 2 clicked'),
    },
    {
      title: 'Accordion Item 3',
      children: (
        <ul>
          <li>Child Item 1</li>
          <li>Child Item 2</li>
        </ul>
      ),
      isOpen: false,
      icon: <span>🔽</span>,
      disabled: false,
      onClick: () => console.log('Accordion Item 3 clicked'),
    },
  ],
  height: 'auto',
  width: '100%',
  multiExpand: true,
  onToggle: (index) => console.log(`Accordion item ${index} toggled`),
  showSeparators: false,
  dividerColor: '#8E8C99',
};
