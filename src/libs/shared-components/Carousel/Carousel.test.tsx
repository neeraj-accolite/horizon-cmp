import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';
import '@testing-library/jest-dom';

describe('CarouselComp', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'innerWidth', { value: 1024 });
    window.dispatchEvent(new Event('resize'));
  });

  test('should render the carousel with children items', () => {
    render(
      <Carousel>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Carousel>,
    );

    const items = screen.getAllByText(/Item/i);
    expect(items).toHaveLength(3);
  });

  test('should have carousel container class applied', () => {
    render(
      <Carousel>
        <div>Item 1</div>
        <div>Item 2</div>
      </Carousel>,
    );
    screen.debug();
    // Check if the container has the correct class
    const carouselContainer = screen.getByRole('list');
    expect(carouselContainer).toHaveClass('react-multi-carousel-track');
  });
});
