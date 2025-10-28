import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders spinner with default size', () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByRole('img', { hidden: true });
    expect(spinner).toBeInTheDocument();
  });

  it('renders spinner with custom text', () => {
    render(<LoadingSpinner text="Loading data..." />);
    expect(screen.getByText('Loading data...')).toBeInTheDocument();
  });

  it('renders with small size', () => {
    render(<LoadingSpinner size="sm" />);
    const spinner = screen.getByRole('img', { hidden: true });
    expect(spinner).toHaveClass('w-4', 'h-4');
  });

  it('renders with large size', () => {
    render(<LoadingSpinner size="lg" />);
    const spinner = screen.getByRole('img', { hidden: true });
    expect(spinner).toHaveClass('w-12', 'h-12');
  });
});
