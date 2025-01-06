import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardListingComponent from './CardListingComponent';
import { CardListingComponentProps } from './CardListingComponent.model';

export default {
  title: 'Components/CardListingComponent',
  component: CardListingComponent,
} as Meta;

const Template: StoryFn<CardListingComponentProps> = (args) => (
  <CardListingComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Our Plumbing Services',
  cards: [
    {
      title: 'Water Heaters',
      children: (
        <div>
          Keep your hot water flowing with our expert repair, proactive
          maintenance, and full installation services.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [{ text: 'View Water Heaters Services', url: '/water-heaters' }],
    },
    {
      title: 'Kitchen & Bathroom',
      children: (
        <div>
          Our expertise in repairing and installing kitchen and bathroom
          fixtures ensures these workhorses will have your back for years to
          come.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [
        { text: 'View Kitchen & Bathroom Services', url: '/kitchen-bathroom' },
      ],
    },
    {
      title: 'Water Lines',
      children: (
        <div>
          Water belongs in your pipes, not in a puddle on your floor. Trade in
          your mop for our water line repair and replacement services.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [{ text: 'View Water Lines Services', url: '/water-lines' }],
    },
    {
      title: 'Drains & Sewer Lines',
      children: (
        <div>
          Whether you’re saddled with a clogged drain or a more serious sewer
          line issue, our team is here to help.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [
        { text: 'View Drains & Sewer Lines Services', url: '/drains-sewer' },
      ],
    },
    {
      title: 'Gas Lines',
      children: (
        <div>
          Gas leaks can be dangerous. Leave it to the professionals to ensure
          your gas lines are in safe working order.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [{ text: 'View Gas Lines Services', url: '/gas-lines' }],
    },
    {
      title: 'Sump Pumps',
      children: (
        <div>
          With our sump pump repair and installation services, we can make sure
          your home stays dry, no matter the weather outside.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [{ text: 'View Sump Pumps Services', url: '/sump-pumps' }],
    },
    {
      title: 'Well Pumps',
      children: (
        <div>
          If your home relies on well water, a broken well pump spells disaster.
          Whether it’s in need of repair or a full replacement, we’re here to
          help.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [{ text: 'View Well Pumps Services', url: '/well-pumps' }],
    },
    {
      title: 'Water Treatment',
      children: (
        <div>
          If your home relies on well water, a broken well pump spells disaster.
          Whether it’s in need of repair or a full replacement, we’re here to
          help.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [
        { text: 'View Water Treatment Services', url: '/water-treatment' },
      ],
    },
  ],
};
