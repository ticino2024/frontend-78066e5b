export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  name: string;
}

export interface DashboardMetrics {
  totalFollowers: number;
  followersChange: number;
  totalEngagement: number;
  engagementChange: number;
  totalPosts: number;
  postsChange: number;
  avgEngagementRate: number;
  engagementRateChange: number;
}

export interface EngagementData {
  date: string;
  likes: number;
  comments: number;
  shares: number;
  views: number;
}

export interface ContentPost {
  id: string;
  title: string;
  platform: 'twitter' | 'facebook' | 'instagram' | 'linkedin';
  publishedAt: string;
  likes: number;
  comments: number;
  shares: number;
  views: number;
  engagementRate: number;
}

export interface PlatformMetrics {
  platform: string;
  followers: number;
  engagement: number;
  posts: number;
  growth: number;
}

export interface TimeSeriesData {
  timestamp: string;
  value: number;
  metric: string;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}
