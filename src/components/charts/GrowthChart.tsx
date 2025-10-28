import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import type { PlatformMetrics } from '../../types';

interface GrowthChartProps {
  data: PlatformMetrics[];
}

function GrowthChart({ data }: GrowthChartProps) {
  const getColor = (value: number) => {
    if (value >= 10) return '#10b981'; // green
    if (value >= 5) return '#3b82f6'; // blue
    return '#f59e0b'; // orange
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="platform" stroke="#6b7280" fontSize={12} />
        <YAxis stroke="#6b7280" fontSize={12} label={{ value: 'Growth %', angle: -90, position: 'insideLeft' }} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
          }}
          formatter={(value: number) => `${value}%`}
        />
        <Bar dataKey="growth" name="Growth Rate">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.growth)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default GrowthChart;
