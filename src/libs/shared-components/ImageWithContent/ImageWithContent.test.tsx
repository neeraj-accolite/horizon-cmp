import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageWithContent from './ImageWithContent';
import { ImageWithContentProps } from './ImageWithContent.model';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

jest.mock('../Button', () => ({
  __esModule: true,
  Button: ({ children, url }: { children: React.ReactNode; url: string }) => (
    <a href={url}>{children}</a>
  ),
}));

const defaultProps: ImageWithContentProps = {
  image: '/testImage.svg',
  title: 'Test Title',
  description: 'Test Description',
  buttonText: 'Test Button',
  buttonUrl: '/test-url',
};

describe('ImageWithContent', () => {
  it('renders the image with the correct src and alt attributes', () => {
    render(<ImageWithContent {...defaultProps} />);
    const img = screen.getByAltText('Test Title');
    expect(img).toHaveAttribute('src', '/testImage.svg');
  });

  it('renders the title', () => {
    render(<ImageWithContent {...defaultProps} />);
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<ImageWithContent {...defaultProps} />);
    const description = screen.getByText('Test Description');
    expect(description).toBeInTheDocument();
  });

  it('renders the button with the correct text and url', () => {
    render(<ImageWithContent {...defaultProps} />);
    const button = screen.getByText('Test Button');
    expect(button).toBeInTheDocument();
    expect(button.closest('a')).toHaveAttribute('href', '/test-url');
  });

  it('renders fallback image when no image is provided', () => {
    render(<ImageWithContent {...defaultProps} image={'/fallbackImage.svg'} />);
    const img = screen.getByAltText('Test Title');
    expect(img).toHaveAttribute('src', '/fallbackImage.svg');
  });
});
