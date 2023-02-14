import { GameType, ScreenType } from '../../util/types';
import { ActionType } from '../actionTypes';

export interface GetDetailsAction {
  type: ActionType.GET_DETAILS;
}
export interface GetDetailsCompleteAction {
  type: ActionType.GET_DETAILS_COMPLETE;
  payload: { game: GameType; screen: ScreenType };
}
export interface GetDetailsErrorAction {
  type: ActionType.GET_DETAILS_ERROR;
  payload: string;
}

export type GameDetailsAction =
  | GetDetailsAction
  | GetDetailsCompleteAction
  | GetDetailsErrorAction;
