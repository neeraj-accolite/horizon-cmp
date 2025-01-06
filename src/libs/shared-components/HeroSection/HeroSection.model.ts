export interface HeroSectionProps {
  /**
   * The headline text of the page.
   */
  title: string;

  /**
   * High level overview of specific group of services
   */
  overview: string;

  /**
   * Prominent inline callout in hero section if specific service is only offered in certain geographic areas and geolocation-based experience is not feasible
   */
  calloutText: string;

  /**
   * CTA button text
   */
  ctaButtonText: string;

  /**
   * The click event listener on the CTA button clicked of the Hero component.
   */
  onHeroCtaClicked: () => void;
}
