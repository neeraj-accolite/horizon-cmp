import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroSectionProps } from './HeroSection.model';
import HeroSection from './HeroSection';

describe('UI Component- Hero Section', () => {
  const defaultProps: HeroSectionProps = {
    title: 'Plumbing',
    overview:
      'Whether your problem feels like a drop in the bucket or a giant puddle of woes, Horizon is here to help. <br /> <br />Our highly trained plumbers handle it all, from minor leak repairs to full system replacement and installation.',
    calloutText: 'Inline callout if service is only offered in specific areas',
    ctaButtonText: 'Book Online',
    onHeroCtaClicked: jest.fn(),
  };

  test('Hero Section title rendered successfully with H1 heading text', () => {
    render(<HeroSection {...defaultProps} />);
    const titleElement = screen.getByRole('heading', {
      level: 1,
    });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(defaultProps.title);
  });

  test('The snapshot is matches of the UI component', () => {
    const { container } = render(<HeroSection {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
