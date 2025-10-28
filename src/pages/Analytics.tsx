import { useState, useEffect } from 'react';
import { Calendar, Download } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';
import EngagementChart from '../components/charts/EngagementChart';
import GrowthChart from '../components/charts/GrowthChart';
import { generateEngagementData, generatePlatformMetrics } from '../lib/mockData';
import type { EngagementData, PlatformMetrics } from '../types';

function Analytics() {
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [engagementData, setEngagementData] = useState<EngagementData[]>([]);
  const [platformData, setPlatformData] = useState<PlatformMetrics[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 600));

      const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
      setEngagementData(generateEngagementData(days));
      setPlatformData(generatePlatformMetrics());
      setIsLoading(false);
    };

    fetchData();
  }, [timeRange]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <LoadingSpinner size="lg" text="Loading analytics..." />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">
            Deep dive into your performance metrics
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
            <button
              onClick={() => setTimeRange('7d')}
              className={`px-3 py-1.5 text-sm font-medium rounded ${
                timeRange === '7d'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              7 Days
            </button>
            <button
              onClick={() => setTimeRange('30d')}
              className={`px-3 py-1.5 text-sm font-medium rounded ${
                timeRange === '30d'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              30 Days
            </button>
            <button
              onClick={() => setTimeRange('90d')}
              className={`px-3 py-1.5 text-sm font-medium rounded ${
                timeRange === '90d'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              90 Days
            </button>
          </div>

          <button className="btn btn-secondary flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Engagement Trends */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Engagement Trends
        </h3>
        <EngagementChart data={engagementData} />
      </div>

      {/* Platform Growth */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Platform Growth Rate
        </h3>
        <GrowthChart data={platformData} />
      </div>

      {/* Detailed Metrics Table */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Platform Breakdown
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Platform
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Followers
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Posts
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {platformData.map((platform) => (
                <tr key={platform.platform} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {platform.platform}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {platform.followers.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {platform.engagement.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {platform.posts}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        platform.growth >= 0
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {platform.growth >= 0 ? '+' : ''}
                      {platform.growth}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
