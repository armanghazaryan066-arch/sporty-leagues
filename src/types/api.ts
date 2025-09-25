export interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
}

export interface LeaguesResponse {
  leagues: League[];
}

export interface Season {
  strSeason: string;
  strBadge: string;
}

export interface SeasonsResponse {
  seasons: Season[];
}

export interface ApiError {
  message: string;
  status?: number;
} 