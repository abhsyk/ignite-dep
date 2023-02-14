import { FetchGamesData, Option } from '../../util/types';
import { GamesAction } from '../actions/gamesAction';
import { ActionType } from '../actionTypes';

type GamesData = { [key in Option]: FetchGamesData };

interface GamesState extends GamesData {
  loading: boolean;
  errorMsg: string | null;
  searchWord: string;
}
const initData = { games: [], count: 0, page: 1 } satisfies FetchGamesData;
const initialState = {
  popular: initData,
  newGames: initData,
  upcoming: initData,
  searched: initData,
  loading: false,
  errorMsg: null,
  searchWord: '',
} satisfies GamesState;

const reducer = (state: GamesState = initialState, action: GamesAction) => {
  switch (action.type) {
    case ActionType.FETCH_GAMES:
      return {
        ...state,
        loading: true,
      };
    case ActionType.FETCH_GAMES_ERROR:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      };
    case ActionType.FETCH_GAMES_COMPLETE: {
      const { option, games: newGames, count } = action.payload;

      // If page is 1, make array new
      const games =
        state[option].page === 1
          ? newGames
          : [...state[option].games, ...newGames];

      return {
        ...state,
        [option]: {
          ...state[option],
          games,
          count,
        },
        loading: false,
      };
    }
    case ActionType.CLEAR_SEARCHED:
      return {
        ...state,
        searched: {
          ...state.searched,
          games: [],
          page: 1,
          count: 0,
        },
      };
    case ActionType.SET_PAGE:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          page: state[action.payload].page + 1,
        },
      };
    case ActionType.SET_SEARCH_WORD:
      return { ...state, searchWord: action.payload };
    default:
      return state;
  }
};

export default reducer;
