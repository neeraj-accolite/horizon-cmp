import { HeroSection } from '@shared-components';

export default function Home() {
  return (
    <div className="min-h-screen items-center">
      <HeroSection
        title="Plumbing"
        overview="Whether your problem feels like a drop in the bucket or a giant
            puddle of woes, Horizon is here to help. \n Our highly
            trained plumbers handle it all, from minor leak repairs to full
            system replacement and installation."
        calloutText="Inline callout if service is only offered in specific areas"
        ctaButtonText="Book Online"
      />
    </div>
  );
}
