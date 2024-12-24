'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './Carousel.module.scss';
interface CarouselProps {
  children: React.ReactNode;
}

const CarouselComp: React.FC<CarouselProps> = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        itemClass={`carousel-item-padding-40-px ${styles[`container-with-dots`]}`}
        showDots={true}
        responsive={responsive}
        containerClass={`react-multi-carousel-list  ${styles[`container-with-dots`]}`}
        dotListClass="dot-list-class"
      >
        {children}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
