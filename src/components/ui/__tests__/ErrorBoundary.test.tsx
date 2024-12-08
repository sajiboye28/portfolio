import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

const ProblemChild = () => {
  throw new Error('Test Error');
};

describe('ErrorBoundary', () => {
  const originalError = console.error;
  beforeEach(() => {
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = originalError;
  });

  test('renders fallback UI when child component throws', () => {
    const fallbackText = 'Something went wrong';
    
    render(
      <ErrorBoundary fallback={<div>{fallbackText}</div>}>
        <ProblemChild />
      </ErrorBoundary>
    );

    expect(screen.getByText(fallbackText)).toBeInTheDocument();
  });

  test('does not catch error outside child component', () => {
    const TestComponent = () => {
      return (
        <ErrorBoundary fallback={<div>Error</div>}>
          <div>Normal Content</div>
        </ErrorBoundary>
      );
    };

    render(<TestComponent />);
    expect(screen.getByText('Normal Content')).toBeInTheDocument();
  });
});
