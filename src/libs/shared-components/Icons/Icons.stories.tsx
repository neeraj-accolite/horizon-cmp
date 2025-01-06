import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ChevronRight from './IconList/ChevronRight';
import LocalOffer from './IconList/LocalOffer';
import UserAvatar from './IconList/UserAvatar';
import DownArrow from './IconList/DownArrow';
import ArrowLeft from './IconList/ArrowLeft';
import PlumbingVector from './IconList/PlumbingVector';
import Star from './IconList/Star';
import { IconProps } from './Icons.model';
import CardMembership from './IconList/CardMembership';
import UpArrow from './IconList/UpArrow';

export default {
  title: 'Components/Icons',
  component: ChevronRight,
  argTypes: {
    fill: { control: 'color' },
    size: { control: 'number' },
  },
} as Meta;

const icons = [
  { component: ChevronRight, name: 'ChevronRight' },
  { component: Star, name: 'StarIcon' },
  { component: UserAvatar, name: 'UserAvatar' },
  { component: DownArrow, name: 'DownArrow' },
  { component: ArrowLeft, name: 'ArrowLeft' },
  { component: UpArrow, name: 'UpArrow' },
  { component: LocalOffer, name: 'LocalOffer' },
  { component: CardMembership, name: 'CardMembership' },
  { component: PlumbingVector, name: 'PlumbingVector' },
];

interface IconDisplayProps extends IconProps {
  IconComponent: React.ComponentType<IconProps>;
  name: string;
}

const IconDisplay: React.FC<IconDisplayProps> = ({
  IconComponent,
  name,
  ...args
}: IconDisplayProps) => (
  <div className="flex flex-col items-center">
    <IconComponent {...args} />
    <div className="m-2">{name}</div>
  </div>
);

const Template: StoryFn<IconProps> = (args) => (
  <div className="flex flex-wrap gap-4">
    {icons.map(({ component, name }) => (
      <IconDisplay key={name} IconComponent={component} name={name} {...args} />
    ))}
  </div>
);

export const AllIcons = Template.bind({});
AllIcons.args = {
  fill: 'currentColor',
  size: 48,
};
