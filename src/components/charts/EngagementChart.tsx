import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { EngagementData } from '../../types';

interface EngagementChartProps {
  data: EngagementData[];
}

function EngagementChart({ data }: EngagementChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          dataKey="date"
          stroke="#6b7280"
          fontSize={12}
          tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        />
        <YAxis stroke="#6b7280" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
          }}
          labelFormatter={(value) => new Date(value).toLocaleDateString()}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="likes"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={false}
          name="Likes"
        />
        <Line
          type="monotone"
          dataKey="comments"
          stroke="#10b981"
          strokeWidth={2}
          dot={false}
          name="Comments"
        />
        <Line
          type="monotone"
          dataKey="shares"
          stroke="#f59e0b"
          strokeWidth={2}
          dot={false}
          name="Shares"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default EngagementChart;
