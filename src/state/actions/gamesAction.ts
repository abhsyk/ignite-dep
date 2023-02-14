import { GameType, Option } from '../../util/types';
import { ActionType } from '../actionTypes';

/* Fetch */
export interface FetchGamesAction {
  type: ActionType.FETCH_GAMES;
}

export interface FetchGamesCompleteAction {
  type: ActionType.FETCH_GAMES_COMPLETE;
  payload: { option: Option; games: GameType[]; count: number };
}
/* Fetch Error */
export interface FetchGamesErrorAction {
  type: ActionType.FETCH_GAMES_ERROR;
  payload: string;
}

export interface ClearSearchedAction {
  type: ActionType.CLEAR_SEARCHED;
}
export interface SetPageAction {
  type: ActionType.SET_PAGE;
  payload: Option;
}

export interface SetSearchWordAction {
  type: ActionType.SET_SEARCH_WORD;
  payload: string;
}

export type GamesAction =
  | FetchGamesAction
  | FetchGamesErrorAction
  | ClearSearchedAction
  | SetPageAction
  | FetchGamesCompleteAction
  | SetSearchWordAction;
