import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeroSection from './HeroSection';
import { HeroSectionProps } from './HeroSection.model';
export default {
  title: 'Components/HeroSection',
  component: HeroSection,
} as Meta;

const Template: StoryFn<HeroSectionProps> = (args) => <HeroSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Plumbing',
  overview:
    'Whether your problem feels like a drop in the bucket or a giant puddle of woes, Horizon is here to help. <br /> <br />Our highly trained plumbers handle it all, from minor leak repairs to full system replacement and installation.',
  calloutText: 'Inline callout if service is only offered in specific areas',
  ctaButtonText: 'Book Online',
  onHeroCtaClicked: () => {
    alert('The Book online button is clicked');
  },
};
