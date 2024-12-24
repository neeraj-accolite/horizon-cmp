import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ChevronRight from './IconList/ChevronRight';
import LocalOffer from './IconList/LocalOffer';
import UserAvatar from './IconList/UserAvatar';
import DownArrow from './IconList/DownArrow';
import ArrowLeft from './IconList/ArrowLeft';
import Star from './IconList/Star';
import { IconProps } from './Icons.model';
import CardMembership from './IconList/CardMembership';
import UpArrow from './IconList/UpArrow';

export default {
  title: 'Icons',
  component: ChevronRight,
  argTypes: {
    fill: { control: 'color' },
    size: { control: 'number' },
    height: { control: 'number' },
    width: { control: 'number' },
  },
} as Meta;

const Template: StoryFn<IconProps> = (args) => (
  <div className="flex flex-wrap gap-4">
    <div className="flex flex-col items-center">
      <ChevronRight {...args} />
      <div>ChevronRight</div>
    </div>
    <div className="flex flex-col items-center">
      <Star {...args} />
      <div>StarIcon</div>
    </div>
    <div className="flex flex-col items-center">
      <UserAvatar {...args} />
      <div>UserAvatar</div>
    </div>
    <div className="flex flex-col items-center">
      <DownArrow {...args} />
      <div>DownArrow</div>
    </div>
    <div className="flex flex-col items-center">
      <ArrowLeft {...args} />
      <div>ArrowLeft</div>
    </div>
    <div className="flex flex-col items-center">
      <UpArrow {...args} />
      <div>UpArrow</div>
    </div>
    <div className="flex flex-col items-center">
      <LocalOffer {...args} />
      <div>LocalOffer</div>
    </div>
    <div className="flex flex-col items-center">
      <CardMembership {...args} />
      <div>CardMembership</div>
    </div>
  </div>
);

export const AllIcons = Template.bind({});
AllIcons.args = {
  fill: 'currentColor',
  size: 24,
};
