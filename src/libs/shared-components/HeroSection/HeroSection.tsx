import Image from 'next/image';
import { Button } from '../Button';
import { HeroSectionProps } from './HeroSection.model';

const HeroSection = (props: HeroSectionProps) => {
  return (
    <div className="mx-auto grid grid-cols-1 justify-between bg-hero-background px-4 py-10 sm:grid-cols-2 sm:px-24 sm:py-14">
      <div className="content-center justify-center sm:mr-28">
        <h1 className="text-center text-hero-heading sm:text-left">
          {props.title}
        </h1>
        <p className="py-4 text-hero-overview sm:py-6">
          Whether your problem feels like a drop in the bucket or a giant puddle
          of woes, Horizon is here to help. <br /> <br /> Our highly trained
          plumbers handle it all, from minor leak repairs to full system
          replacement and installation.
        </p>
        <div>
          <span className="font-bold text-hero-callout">
            {props.calloutText}
          </span>
        </div>
        <div className="mt-4">
          <Button label={props.ctaButtonText} color="primary" />
        </div>
      </div>
      <div className="mt-3 flex content-center justify-center sm:mt-0">
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
