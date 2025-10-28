import { render, screen, fireEvent } from '@testing-library/react';
import ErrorFallback from '../ErrorFallback';

describe('ErrorFallback', () => {
  const mockError = new Error('Test error message');
  const mockResetErrorBoundary = jest.fn();

  it('renders error message', () => {
    render(
      <ErrorFallback
        error={mockError}
        resetErrorBoundary={mockResetErrorBoundary}
      />
    );

    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  it('calls reset function when button is clicked', () => {
    render(
      <ErrorFallback
        error={mockError}
        resetErrorBoundary={mockResetErrorBoundary}
      />
    );

    const button = screen.getByRole('button', { name: /try again/i });
    fireEvent.click(button);

    expect(mockResetErrorBoundary).toHaveBeenCalledTimes(1);
  });
});
