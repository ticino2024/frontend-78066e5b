import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import clsx from 'clsx';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  iconColor?: string;
}

function MetricCard({ title, value, change, icon: Icon, iconColor = 'text-primary-600' }: MetricCardProps) {
  const isPositive = change !== undefined && change >= 0;
  const showChange = change !== undefined;

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
          {showChange && (
            <div className="mt-2 flex items-center gap-1">
              {isPositive ? (
                <TrendingUp className="w-4 h-4 text-green-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600" />
              )}
              <span
                className={clsx(
                  'text-sm font-medium',
                  isPositive ? 'text-green-600' : 'text-red-600'
                )}
              >
                {isPositive ? '+' : ''}{change}%
              </span>
              <span className="text-sm text-gray-500">vs last period</span>
            </div>
          )}
        </div>
        <div className={clsx('p-3 bg-gray-50 rounded-lg', iconColor)}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default MetricCard;
