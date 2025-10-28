import { useMutation } from '@tanstack/react-query';
import apiClient from '../lib/axios';
import { useAuthStore } from '../store/authStore';
import type { LoginCredentials, SignupData, AuthResponse } from '../types';

export const useLogin = () => {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: async (credentials: LoginCredentials): Promise<AuthResponse> => {
      const response = await apiClient.post<AuthResponse>('/auth/login', credentials);
      return response.data;
    },
    onSuccess: (data) => {
      login(data.user, data.token);
    },
  });
};

export const useSignup = () => {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: async (data: SignupData): Promise<AuthResponse> => {
      const response = await apiClient.post<AuthResponse>('/auth/signup', data);
      return response.data;
    },
    onSuccess: (data) => {
      login(data.user, data.token);
    },
  });
};

export const useLogout = () => {
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: async () => {
      await apiClient.post('/auth/logout');
    },
    onSuccess: () => {
      logout();
    },
  });
};
