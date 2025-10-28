import { useEffect, useState } from 'react';
import { Users, Heart, FileText, TrendingUp } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import LoadingSpinner from '../components/LoadingSpinner';
import EngagementChart from '../components/charts/EngagementChart';
import PlatformChart from '../components/charts/PlatformChart';
import RealtimeWidget from '../components/RealtimeWidget';
import {
  generateMockMetrics,
  generateEngagementData,
  generatePlatformMetrics,
} from '../lib/mockData';
import type { DashboardMetrics, EngagementData, PlatformMetrics } from '../types';

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [engagementData, setEngagementData] = useState<EngagementData[]>([]);
  const [platformData, setPlatformData] = useState<PlatformMetrics[]>([]);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      setMetrics(generateMockMetrics());
      setEngagementData(generateEngagementData(30));
      setPlatformData(generatePlatformMetrics());
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <LoadingSpinner size="lg" text="Loading dashboard..." />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Overview of your social media performance
        </p>
      </div>

      {/* Real-time Widget */}
      <RealtimeWidget />

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Followers"
          value={metrics?.totalFollowers.toLocaleString() ?? '0'}
          change={metrics?.followersChange}
          icon={Users}
          iconColor="text-blue-600"
        />
        <MetricCard
          title="Total Engagement"
          value={metrics?.totalEngagement.toLocaleString() ?? '0'}
          change={metrics?.engagementChange}
          icon={Heart}
          iconColor="text-red-600"
        />
        <MetricCard
          title="Total Posts"
          value={metrics?.totalPosts ?? 0}
          change={metrics?.postsChange}
          icon={FileText}
          iconColor="text-green-600"
        />
        <MetricCard
          title="Avg. Engagement Rate"
          value={`${metrics?.avgEngagementRate ?? 0}%`}
          change={metrics?.engagementRateChange}
          icon={TrendingUp}
          iconColor="text-purple-600"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Engagement Over Time
          </h3>
          <EngagementChart data={engagementData} />
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Platform Performance
          </h3>
          <PlatformChart data={platformData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
