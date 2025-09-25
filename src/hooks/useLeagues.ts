import { useQuery } from '@tanstack/react-query';

import { getAllLeagues, getLeagueSeasons } from '../api';
import { QUERY_KEYS } from '../utils/queryClient';
import { LeaguesResponse, SeasonsResponse } from '../types';

export const useLeagues = () => {
  const query = useQuery<LeaguesResponse>({
    queryKey: QUERY_KEYS.LEAGUES,
    queryFn: getAllLeagues,
  });

  return {
    ...query,
    leagues: query.data?.leagues || [],
  };
};

export const useLeagueSeasons = (leagueId: string) => {
  const query = useQuery<SeasonsResponse>({
    queryKey: QUERY_KEYS.LEAGUE_SEASONS(leagueId),
    queryFn: () => getLeagueSeasons(leagueId),
    enabled: !!leagueId,
  });

  return {
    ...query,
    seasons: query.data?.seasons || [],
  };
}; 