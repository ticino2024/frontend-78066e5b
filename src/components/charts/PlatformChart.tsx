import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { PlatformMetrics } from '../../types';

interface PlatformChartProps {
  data: PlatformMetrics[];
}

function PlatformChart({ data }: PlatformChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="platform" stroke="#6b7280" fontSize={12} />
        <YAxis stroke="#6b7280" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
          }}
        />
        <Legend />
        <Bar dataKey="followers" fill="#3b82f6" name="Followers" />
        <Bar dataKey="engagement" fill="#10b981" name="Engagement" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default PlatformChart;
