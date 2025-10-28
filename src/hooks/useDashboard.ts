import { useQuery } from '@tanstack/react-query';
import apiClient from '../lib/axios';
import {
  generateMockMetrics,
  generateEngagementData,
  generatePlatformMetrics,
  generateContentPosts,
} from '../lib/mockData';
import type { DashboardMetrics, EngagementData, PlatformMetrics, ContentPost } from '../types';

// Using mock data for now - replace with actual API calls
export const useDashboardMetrics = () => {
  return useQuery({
    queryKey: ['dashboard', 'metrics'],
    queryFn: async (): Promise<DashboardMetrics> => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Replace with actual API call:
      // const response = await apiClient.get<DashboardMetrics>('/dashboard/metrics');
      // return response.data;
      
      return generateMockMetrics();
    },
  });
};

export const useEngagementData = (days: number = 30) => {
  return useQuery({
    queryKey: ['engagement', days],
    queryFn: async (): Promise<EngagementData[]> => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Replace with actual API call:
      // const response = await apiClient.get<EngagementData[]>(`/analytics/engagement?days=${days}`);
      // return response.data;
      
      return generateEngagementData(days);
    },
  });
};

export const usePlatformMetrics = () => {
  return useQuery({
    queryKey: ['platforms', 'metrics'],
    queryFn: async (): Promise<PlatformMetrics[]> => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Replace with actual API call:
      // const response = await apiClient.get<PlatformMetrics[]>('/platforms/metrics');
      // return response.data;
      
      return generatePlatformMetrics();
    },
  });
};

export const useContentPosts = () => {
  return useQuery({
    queryKey: ['content', 'posts'],
    queryFn: async (): Promise<ContentPost[]> => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Replace with actual API call:
      // const response = await apiClient.get<ContentPost[]>('/content/posts');
      // return response.data;
      
      return generateContentPosts(20);
    },
  });
};
