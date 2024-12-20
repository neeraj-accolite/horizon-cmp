import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BreadCrumb, { BreadCrumbProps } from './BreadCrumb'; // Correct path

export default {
  title: 'Components/BreadCrumb', // This is required
  component: BreadCrumb, // Link the component to the stories
} as Meta;

const Template: StoryFn<BreadCrumbProps> = (args) => <BreadCrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Plumbing', href: '/plumbing' },
    { label: 'Home1', href: '/' },
    { label: 'Services1', href: '/services' },
    { label: 'Plumbing1', href: '/plumbing' },
    { label: 'Home2', href: '/' },
    { label: 'Services2', href: '/services' },
    { label: 'Plumbing2', href: '/plumbing' },
  ],
};

export const WithoutLinks = Template.bind({});
WithoutLinks.args = {
  items: [{ label: 'Home' }, { label: 'Plumbing' }],
};
