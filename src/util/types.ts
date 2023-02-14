export type Option = 'popular' | 'newGames' | 'upcoming' | 'searched';

export type PathId = 'popular-games' | 'new-games' | 'upcoming-games';

export type FetchGamesData = {
  games: GameType[];
  count: number;
  page: number;
};

export type Platform = {
  platform: { id: number; name: string; slug: string };
};

export interface ScreenType {
  results: {
    id: number;
    image: string;
    width: number;
    height: number;
    is_deleted: boolean;
  }[];
}

export interface GameType {
  id: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  platforms: Platform[];
  description_raw: string;
  website: string;
  slug: string;
}
