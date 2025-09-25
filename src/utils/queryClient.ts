import { QueryClient } from '@tanstack/react-query';

import { CACHE_TIMES } from '../api';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CACHE_TIMES.STALE_TIME,
      gcTime: CACHE_TIMES.CACHE_TIME,
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

export const QUERY_KEYS = {
  LEAGUES: ['leagues'] as const,
  LEAGUE_SEASONS: (id: string) => ['league-seasons', id] as const,
} as const; 