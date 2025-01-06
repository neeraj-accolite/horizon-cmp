import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BasicHeaderContent from './BasicHeaderContent';

test('renders title and description correctly', () => {
  const { getByText } = render(
    <BasicHeaderContent
      titleText="Test Title"
      descriptionText="Test Description"
    />,
  );

  const titleElement = getByText('Test Title');
  const descriptionElement = getByText('Test Description');

  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});

test('applies custom class names to title and description', () => {
  const { getByText } = render(
    <BasicHeaderContent
      titleText="Custom Title"
      descriptionText="Custom Description"
      titleClassName="custom-title-class"
      descriptionClassName="custom-description-class"
    />,
  );

  const titleElement = getByText('Custom Title');
  const descriptionElement = getByText('Custom Description');

  expect(titleElement).toHaveClass('custom-title-class');
  expect(descriptionElement).toHaveClass('custom-description-class');
});

test('applies default gap styles and responsive adjustments', () => {
  const { container } = render(
    <BasicHeaderContent
      titleText="Test Title"
      descriptionText="Test Description"
    />,
  );

  const containerElement = container.firstChild;

  expect(containerElement).toHaveClass(
    'flex',
    'flex-col',
    'gap-[2.125rem]',
    'sm:gap-10',
  );
});

test('matches snapshot', () => {
  const { asFragment } = render(
    <BasicHeaderContent
      titleText="Snapshot Title"
      descriptionText="Snapshot Description"
    />,
  );

  expect(asFragment()).toMatchSnapshot();
});
