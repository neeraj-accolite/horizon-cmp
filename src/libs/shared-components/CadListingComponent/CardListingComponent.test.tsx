import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardListingComponent from './CardListingComponent';
import { CardListingComponentProps } from './CardListingComponent.model';

jest.mock('../Link', () => ({
  __esModule: true,
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

const mockProps: CardListingComponentProps = {
  title: 'Our Plumbing Services',
  cards: [
    {
      title: 'Water Heaters',
      children: (
        <div>
          Keep your hot water flowing with our expert repair, proactive
          maintenance, and full installation services.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [{ text: 'View Water Heaters Services', url: '/water-heaters' }],
    },
    {
      title: 'Kitchen & Bathroom',
      children: (
        <div>
          Our expertise in repairing and installing kitchen and bathroom
          fixtures ensures these workhorses will have your back for years to
          come.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [
        { text: 'View Kitchen & Bathroom Services', url: '/kitchen-bathroom' },
      ],
    },
    {
      title: 'Water Lines',
      children: (
        <div>
          Water belongs in your pipes, not in a puddle on your floor. Trade in
          your mop for our water line repair and replacement services.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [{ text: 'View Water Lines Services', url: '/water-lines' }],
    },
    {
      title: 'Drains & Sewer Lines',
      children: (
        <div>
          Whether you’re saddled with a clogged drain or a more serious sewer
          line issue, our team is here to help.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [
        {
          text: 'View Drains & Sewer Lines Services',
          url: '/drains-sewer-lines',
        },
      ],
    },
    {
      title: 'Gas Lines',
      children: (
        <div>
          Gas leaks can be dangerous. Leave it to the professionals to ensure
          your gas lines are in safe working order.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [{ text: 'View Gas Lines Services', url: '/gas-lines' }],
    },
    {
      title: 'Sump Pumps',
      children: (
        <div>
          With our sump pump repair and installation services, we can make sure
          your home stays dry, no matter the weather outside.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [{ text: 'View Sump Pumps Services', url: '/sump-pumps' }],
    },
    {
      title: 'Well Pumps',
      children: (
        <div>
          If your home relies on well water, a broken well pump spells disaster.
          Whether it’s in need of repair or a full replacement, we’re here to
          help.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [{ text: 'View Well Pumps Services', url: '/well-pumps' }],
    },
    {
      title: 'Water Treatment',
      children: (
        <div>
          Ensure your water is clean and safe with our comprehensive water
          treatment services.
        </div>
      ),
      className: 'border border-gray-300 rounded-lg',
      links: [
        { text: 'View Water Treatment Services', url: '/water-treatment' },
      ],
    },
  ],
  backgroundColor: '#F5F6F6',
};

describe('CardListingComponent', () => {
  it('renders the component with the given title', () => {
    render(<CardListingComponent {...mockProps} />);
    expect(screen.getByText('Our Plumbing Services')).toBeInTheDocument();
  });

  it('renders all cards with their titles and children', () => {
    render(<CardListingComponent {...mockProps} />);
    mockProps.cards.forEach((card) => {
      // Ensure card.title is a string
      if (typeof card.title === 'string') {
        expect(screen.getByText(card.title)).toBeInTheDocument();
      }
    });
    expect(screen.getByText(/Keep your hot water flowing/)).toBeInTheDocument();
    expect(screen.getByText(/Water belongs in your pipes/)).toBeInTheDocument();
    expect(screen.getByText(/Gas leaks can be dangerous/)).toBeInTheDocument();
  });

  it('renders links with correct text and URL', () => {
    render(<CardListingComponent {...mockProps} />);
    mockProps.cards.forEach((card) => {
      card.links?.forEach((link) => {
        const linkElement = screen.getByText(link.text);
        expect(linkElement).toBeInTheDocument();
        const anchorElement = linkElement.closest('a');
        expect(anchorElement).toBeInTheDocument();
        expect(anchorElement).toHaveAttribute('href', link.url);
      });
    });
  });

  it('renders cards in grid view on desktop', () => {
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
    const { container } = render(<CardListingComponent {...mockProps} />);

    // Log the rendered HTML for debugging
    console.log(container.innerHTML);

    mockProps.cards.forEach((card) => {
      // Ensure card.title is a string
      if (typeof card.title === 'string') {
        expect(screen.getByText(card.title)).toBeInTheDocument();
      }
      card.links?.forEach((link) => {
        // Use a more flexible matcher to find the link text
        const linkElement = screen.getByText(link.text, { exact: false });
        expect(linkElement).toBeInTheDocument();
        const anchorElement = linkElement.closest('a');
        expect(anchorElement).toBeInTheDocument();
        expect(anchorElement).toHaveAttribute('href', link.url);
      });
    });
  });

  it('handles window resize events', () => {
    render(<CardListingComponent {...mockProps} />);

    // Simulate mobile view
    global.innerWidth = 390;
    global.dispatchEvent(new Event('resize'));
    mockProps.cards.forEach((card) => {
      if (typeof card.title === 'string') {
        expect(screen.getByText(card.title)).toBeInTheDocument();
      }
    });

    // Simulate desktop view
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
    mockProps.cards.forEach((card) => {
      if (typeof card.title === 'string') {
        expect(screen.getByText(card.title)).toBeInTheDocument();
      }
    });
  });

  it('renders Accordion component in mobile view', () => {
    global.innerWidth = 390;
    global.dispatchEvent(new Event('resize'));
    render(<CardListingComponent {...mockProps} />);
    expect(
      screen.getByRole('button', { name: /Water Heaters/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Kitchen & Bathroom/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Water Lines/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Drains & Sewer Lines/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Gas Lines/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Sump Pumps/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Well Pumps/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Water Treatment/ }),
    ).toBeInTheDocument();
  });
});
