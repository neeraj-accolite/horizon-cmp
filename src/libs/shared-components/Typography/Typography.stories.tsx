import React from 'react';
import { Meta } from '@storybook/react';
import TypoGraphy from './Typography';

// Custom component definition for a specific story
export const HeadingTextTypography = () => (
  <div>
    <TypoGraphy>
      <h1>Heading text - H1 Tag</h1>
    </TypoGraphy>
    <TypoGraphy>
      <h2>Heading text - H2 Tag</h2>
    </TypoGraphy>
    <TypoGraphy>
      <h3>Heading text - H3 Tag</h3>
    </TypoGraphy>
    <TypoGraphy>
      <h4>Heading text - H4 Tag</h4>
    </TypoGraphy>
    <TypoGraphy>
      <h5>Heading text - H5 Tag</h5>
    </TypoGraphy>
    <TypoGraphy>
      <h6>Heading text - H6 Tag</h6>
    </TypoGraphy>
  </div>
);

export default {
  title: 'Theme/TypoGraphy',
  component: HeadingTextTypography,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1', // Use 'mobile1' or 'mobile2' instead of 'mobile'
    },
  },
} as Meta;
