import { useEffect, useState } from 'react';
import { Activity, Users, Heart } from 'lucide-react';
import { generateRealtimeData } from '../lib/mockData';

interface RealtimeData {
  activeUsers: number;
  newFollowers: number;
  recentEngagement: number;
  timestamp: string;
}

function RealtimeWidget() {
  const [data, setData] = useState<RealtimeData>(generateRealtimeData());

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setData(generateRealtimeData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card bg-gradient-to-r from-primary-500 to-primary-600 text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Activity className="w-5 h-5 animate-pulse" />
          Real-time Activity
        </h3>
        <span className="text-sm text-primary-100">
          Live updates every 5 seconds
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4" />
            <span className="text-sm text-primary-100">Active Users</span>
          </div>
          <p className="text-3xl font-bold">{data.activeUsers}</p>
        </div>

        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4" />
            <span className="text-sm text-primary-100">New Followers</span>
          </div>
          <p className="text-3xl font-bold">+{data.newFollowers}</p>
        </div>

        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-4 h-4" />
            <span className="text-sm text-primary-100">Recent Engagement</span>
          </div>
          <p className="text-3xl font-bold">{data.recentEngagement}</p>
        </div>
      </div>
    </div>
  );
}

export default RealtimeWidget;
