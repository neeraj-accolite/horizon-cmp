import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ServiceDetailCards from './ServiceDetailCards';
import { ServiceDetailCardsProps } from './ServiceDetailCards.model';

export default {
  title: 'Components/ServiceDetailCards',
  component: ServiceDetailCards,
} as Meta;

const Template: StoryFn<ServiceDetailCardsProps> = (args) => (
  <ServiceDetailCards {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Our Plumbing Services',
  cards: [
    {
      title: 'Water Heaters',
      description:
        'Keep your hot water flowing with our expert repair, proactive maintenance, and full installation services.',
      link_text: 'View Water Heaters Services',
      link_url: '/water-heaters',
    },
    {
      title: 'Kitchen & Bathroom',
      description:
        'Our expertise in repairing and installing kitchen and bathroom fixtures ensures these workhorses will have your back for years to come.',
      link_text: 'View Kitchen & Bathroom Services',
      link_url: '/kitchen-bathroom',
    },
    {
      title: 'Water Lines',
      description:
        'Water belongs in your pipes, not in a puddle on your floor. Trade in your mop for our water line repair and replacement services.',
      link_text: 'View Water Lines Services',
      link_url: '/water-lines',
    },
    {
      title: 'Drains & Sewer Lines',
      description:
        'Whether you’re saddled with a clogged drain or a more serious sewer line issue, our team is here to help.',
      link_text: 'View Drains & Sewer Lines Services',
      link_url: '/drains-sewer',
    },
    {
      title: 'Gas Lines',
      description:
        'Gas leaks can be dangerous. Leave it to the professionals to ensure your gas lines are in safe working order.',
      link_text: 'View Gas Lines Services',
      link_url: '/gas-lines',
    },
    {
      title: 'Sump Pumps',
      description:
        'With our sump pump repair and installation services, we can make sure your home stays dry, no matter the weather outside.',
      link_text: 'View Sump Pumps Services',
      link_url: '/sump-pumps',
    },
    {
      title: 'Well Pumps',
      description:
        'If your home relies on well water, a broken well pump spells disaster. Whether it’s in need of repair or a full replacement, we’re here to help.',
      link_text: 'View Well Pumps Services',
      link_url: '/well-pumps',
    },
    {
      title: 'Water Treatment',
      description:
        'Ensure your water is clean and safe with our comprehensive water treatment services.',
      link_text: 'View Water Treatment Services',
      link_url: '/water-treatment',
    },
  ],
};
