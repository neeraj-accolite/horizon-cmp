import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroSectionProps } from './HeroSection.model';
import HeroSection from './HeroSection';
describe('UI Component- Hero Section', () => {
  const defaultProps: HeroSectionProps = {
    title: 'Plumbing',
    overview:
      'Whether your problem feels like a drop in the bucket or a giant puddle of woes, Horizon is here to help. <br />Our highly trained plumbers handle it all, from minor leak repairs to full system replacement and installation.',
    calloutText: 'Inline callout if service is only offered in specific areas',
    ctaButtonText: 'Book Online',
    onHeroCtaClicked: jest.fn(),
  };

  it('Hero Section title rendered successfully with H1 heading text', () => {
    render(<HeroSection {...defaultProps} />);
    const titleElement = screen.getByRole('heading', {
      level: 1,
    });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(defaultProps.title);
  });

  // it('Mobile responsive styles are applied for the mobile screens', () => {
  //   window.innerWidth = 345;
  //   window.innerHeight = 480;
  //   window.dispatchEvent(new Event('resize'));
  //   const container = render(<HeroSection {...defaultProps} />);
  //   const titleElement = container.getByRole('heading', {
  //     level: 1,
  //   });
  //   expect(titleElement).toBeInTheDocument();
  //   expect(titleElement).toHaveClass('text-left');
  // });

  // it('Hero Section CTA button callback is clickable ', () => {
  //   const onHeroCtaClicked = jest.fn();
  //   const container = render(
  //     <HeroSection {...defaultProps} onHeroCtaClicked={onHeroCtaClicked} />,
  //   );
  //   const ctaButton = container.getByText(defaultProps.ctaButtonText);
  //   expect(ctaButton).toBeInTheDocument();
  //   // fireEvent(ctaButton, new MouseEvent('click', { bubbles: true }));
  //   fireEvent.click(ctaButton);
  //   expect(onHeroCtaClicked).toHaveBeenCalled();
  // });

  it('The snapshot is matches of the UI component', () => {
    const { container } = render(<HeroSection {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
