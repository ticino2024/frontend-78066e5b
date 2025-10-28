import { addDays, subDays, format } from 'date-fns';
import type { DashboardMetrics, EngagementData, ContentPost, PlatformMetrics } from '../types';

// Mock data generator for development/demo purposes
export const generateMockMetrics = (): DashboardMetrics => ({
  totalFollowers: 45823,
  followersChange: 12.5,
  totalEngagement: 28945,
  engagementChange: 8.3,
  totalPosts: 156,
  postsChange: -2.1,
  avgEngagementRate: 4.8,
  engagementRateChange: 5.6,
});

export const generateEngagementData = (days: number = 30): EngagementData[] => {
  const data: EngagementData[] = [];
  const today = new Date();

  for (let i = days; i >= 0; i--) {
    const date = subDays(today, i);
    data.push({
      date: format(date, 'yyyy-MM-dd'),
      likes: Math.floor(Math.random() * 500) + 200,
      comments: Math.floor(Math.random() * 100) + 50,
      shares: Math.floor(Math.random() * 80) + 20,
      views: Math.floor(Math.random() * 2000) + 1000,
    });
  }

  return data;
};

export const generateContentPosts = (count: number = 10): ContentPost[] => {
  const platforms: Array<'twitter' | 'facebook' | 'instagram' | 'linkedin'> = [
    'twitter',
    'facebook',
    'instagram',
    'linkedin',
  ];
  const titles = [
    'New product launch announcement',
    'Behind the scenes of our latest campaign',
    'Customer success story',
    'Industry insights and trends',
    'Team spotlight',
    'Event highlights and recap',
    'Tips and best practices',
    'Company milestone celebration',
    'Community engagement post',
    'Educational content series',
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: `post-${i + 1}`,
    title: titles[i % titles.length],
    platform: platforms[Math.floor(Math.random() * platforms.length)],
    publishedAt: format(subDays(new Date(), Math.floor(Math.random() * 30)), 'yyyy-MM-dd\'T\'HH:mm:ss'),
    likes: Math.floor(Math.random() * 1000) + 100,
    comments: Math.floor(Math.random() * 200) + 20,
    shares: Math.floor(Math.random() * 150) + 10,
    views: Math.floor(Math.random() * 5000) + 500,
    engagementRate: Math.random() * 10 + 2,
  }));
};

export const generatePlatformMetrics = (): PlatformMetrics[] => [
  {
    platform: 'Instagram',
    followers: 18500,
    engagement: 12400,
    posts: 45,
    growth: 15.2,
  },
  {
    platform: 'Twitter',
    followers: 12300,
    engagement: 8900,
    posts: 62,
    growth: 8.7,
  },
  {
    platform: 'Facebook',
    followers: 9800,
    engagement: 5200,
    posts: 32,
    growth: 5.1,
  },
  {
    platform: 'LinkedIn',
    followers: 5223,
    engagement: 2445,
    posts: 17,
    growth: 12.3,
  },
];

export const generateRealtimeData = () => ({
  activeUsers: Math.floor(Math.random() * 200) + 50,
  newFollowers: Math.floor(Math.random() * 20),
  recentEngagement: Math.floor(Math.random() * 100) + 20,
  timestamp: new Date().toISOString(),
});
