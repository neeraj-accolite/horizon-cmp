import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardListingComponent from './ServiceDetailCards';
import { ServiceDetailCardsProps } from './ServiceDetailCards.model';

jest.mock('../Link', () => ({
  __esModule: true,
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

const mockProps: ServiceDetailCardsProps = {
  title: 'Our Plumbing Services',
  cards: [
    {
      title: 'Water Heaters',
      description:
        'Keep your hot water flowing with our expert repair, proactive maintenance, and full installation services.',
      link_text: 'View Water Heaters Services',
      link_url: '/water-heaters',
    },
    {
      title: 'Kitchen & Bathroom',
      description:
        'Our expertise in repairing and installing kitchen and bathroom fixtures ensures these workhorses will have your back for years to come.',
      link_text: 'View Kitchen & Bathroom Services',
      link_url: '/kitchen-bathroom',
    },
    {
      title: 'Water Lines',
      description:
        'Water belongs in your pipes, not in a puddle on your floor. Trade in your mop for our water line repair and replacement services.',
      link_text: 'View Water Lines Services',
      link_url: '/water-lines',
    },
    {
      title: 'Drains & Sewer Lines',
      description:
        'Whether you’re saddled with a clogged drain or a more serious sewer line issue, our team is here to help.',
      link_text: 'View Drains & Sewer Lines Services',
      link_url: '/drains-sewer-lines',
    },
    {
      title: 'Gas Lines',
      description:
        'Gas leaks can be dangerous. Leave it to the professionals to ensure your gas lines are in safe working order.',
      link_text: 'View Gas Lines Services',
      link_url: '/gas-lines',
    },
    {
      title: 'Sump Pumps',
      description:
        'With our sump pump repair and installation services, we can make sure your home stays dry, no matter the weather outside.',
      link_text: 'View Sump Pumps Services',
      link_url: '/sump-pumps',
    },
    {
      title: 'Well Pumps',
      description:
        'If your home relies on well water, a broken well pump spells disaster. Whether it’s in need of repair or a full replacement, we’re here to help.',
      link_text: 'View Well Pumps Services',
      link_url: '/well-pumps',
    },
    {
      title: 'Water Treatment',
      description:
        'Ensure your water is clean and safe with our comprehensive water treatment services.',
      link_text: 'View Water Treatment Services',
      link_url: '/water-treatment',
    },
  ],
};

describe('CardListingComponent', () => {
  it('renders the component with the given title', () => {
    render(<CardListingComponent {...mockProps} />);
    expect(screen.getByText('Our Plumbing Services')).toBeInTheDocument();
  });

  it('renders all cards with their titles and descriptions', () => {
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
