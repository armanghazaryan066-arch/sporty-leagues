export const API_BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3';

export const API_ENDPOINTS = {
  ALL_LEAGUES: `${API_BASE_URL}/all_leagues.php`,
  SEARCH_SEASONS: `${API_BASE_URL}/search_all_seasons.php`,
} as const;

export const CACHE_TIMES = {
  STALE_TIME: 5 * 60 * 1000, // 5 minutes
  CACHE_TIME: 10 * 60 * 1000, // 10 minutes
} as const; 