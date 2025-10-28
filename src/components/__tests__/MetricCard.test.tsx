import { render, screen } from '@testing-library/react';
import { Users } from 'lucide-react';
import MetricCard from '../MetricCard';

describe('MetricCard', () => {
  it('renders metric information correctly', () => {
    render(
      <MetricCard
        title="Total Followers"
        value="45,823"
        change={12.5}
        icon={Users}
      />
    );

    expect(screen.getByText('Total Followers')).toBeInTheDocument();
    expect(screen.getByText('45,823')).toBeInTheDocument();
    expect(screen.getByText('+12.5%')).toBeInTheDocument();
  });

  it('displays positive change with green color', () => {
    render(
      <MetricCard
        title="Engagement"
        value="1000"
        change={5.3}
        icon={Users}
      />
    );

    const changeElement = screen.getByText('+5.3%');
    expect(changeElement).toHaveClass('text-green-600');
  });

  it('displays negative change with red color', () => {
    render(
      <MetricCard
        title="Posts"
        value="50"
        change={-2.1}
        icon={Users}
      />
    );

    const changeElement = screen.getByText('-2.1%');
    expect(changeElement).toHaveClass('text-red-600');
  });

  it('does not display change when not provided', () => {
    render(
      <MetricCard
        title="Total Users"
        value="100"
        icon={Users}
      />
    );

    expect(screen.queryByText(/vs last period/)).not.toBeInTheDocument();
  });
});
