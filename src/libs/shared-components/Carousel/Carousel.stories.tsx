// CarouselComp.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import styles from './Carousel.module.scss';
import Carousel from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {},
} as Meta;

const Template: StoryFn = (args) => (
  <div className={styles.storybookContainer}>
    <Carousel {...args}>
      <div className={styles.carouselItem}>Item 1</div>
      <div className={styles.carouselItem}>Item 2</div>
      <div className={styles.carouselItem}>Item 3</div>
      <div className={styles.carouselItem}>Item 4</div>
    </Carousel>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
