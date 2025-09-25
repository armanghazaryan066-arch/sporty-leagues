import axios from 'axios';
import { API_ENDPOINTS } from './config';
import { LeaguesResponse, SeasonsResponse, ApiError } from '../types';

const apiClient = axios.create({
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const apiError: ApiError = {
      message: error.response?.data?.message || error.message || 'An error occurred',
      status: error.response?.status,
    };
    return Promise.reject(apiError);
  }
);

export const getAllLeagues = async (): Promise<LeaguesResponse> => {
  const response = await apiClient.get<LeaguesResponse>(API_ENDPOINTS.ALL_LEAGUES);
  return response.data;
};

export const getLeagueSeasons = async (leagueId: string): Promise<SeasonsResponse> => {
  const response = await apiClient.get<SeasonsResponse>(
    `${API_ENDPOINTS.SEARCH_SEASONS}?badge=1&id=${leagueId}`
  );
  return response.data;
}; 