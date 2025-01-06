'use client';

import Image from 'next/image';
import { Button } from '../Button';
import { HeroSectionProps } from './HeroSection.model';

const HeroSection = ({
  title,
  overview,
  calloutText,
  ctaButtonText,
  onHeroCtaClicked,
}: HeroSectionProps) => {
  return (
    <div className="mx-auto grid grid-cols-1 justify-between bg-hero-background px-4 py-10 sm:grid-cols-2 sm:px-24 sm:py-14">
      <div className="content-center justify-center sm:mr-28">
        <h1 className="text-center text-hero-heading sm:text-left">{title}</h1>
        <div className="whitespace-pre-wrap py-4 text-hero-overview sm:py-6">
          {/**
           * TODO: Change the inner html implementation based on the confirmation on
           * getting text/html from Drupal backend.
           */}
          <div dangerouslySetInnerHTML={{ __html: overview }} />
        </div>
        <div className="mb-2 pb-4">
          <span className="font-bold text-hero-callout">{calloutText}</span>
        </div>
        <div className="mt-2">
          <Button
            className="sm:!max-w-xs"
            color="primary"
            onClick={onHeroCtaClicked}
          >
            {ctaButtonText}
          </Button>
        </div>
      </div>
      <div className="mt-2 flex content-center justify-center sm:mt-0">
        {/**
         * TODO: This Review image Component will be replaced later with actual component in next story.
         * Currently, the image is used to design the layout of the Hero component.
         */}
        <div className="content-center">
          <Image
            src={'/Review.png'}
            width={280}
            height={72}
            alt={'review component'}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
