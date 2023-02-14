import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchGameURL,
} from '../../util/api';
import { GameType, Option } from '../../util/types';
import {
  ClearSearchedAction,
  GamesAction,
  SetPageAction,
  SetSearchWordAction,
} from '../actions/gamesAction';
import { ActionType } from '../actionTypes';
import { RootState } from '../reducers';

/* Change the URL by option and page number */
const getUrl = (option: Option, page: number, searchWord?: string) => {
  // Only use for search action
  if (searchWord) return searchGameURL(searchWord, page);

  switch (option) {
    case 'popular':
      return popularGamesURL(page);
    case 'newGames':
      return newGamesURL(page);
    case 'upcoming':
      return upcomingGamesURL(page);
    default:
      return;
  }
};

export const fetchGames =
  (option: Option, page: number, searchWord?: string) =>
  async (dispatch: Dispatch<GamesAction>, getState: () => RootState) => {
    /* Get games from state by option */
    const { games } = getState().games[option];

    /* Avoid reducer errors. 12 is the number to display on one page */
    if (games.length / page === 12) return;

    /* Change URL by option and page num */
    const url = getUrl(option, page, searchWord)!;

    dispatch({ type: ActionType.FETCH_GAMES });
    try {
      const { data } = await axios.get<{ results: GameType[]; count: number }>(
        url
      );

      dispatch({
        type: ActionType.FETCH_GAMES_COMPLETE,
        payload: { option, games: data.results, count: data.count },
      });
    } catch (err: any) {
      dispatch({ type: ActionType.FETCH_GAMES_ERROR, payload: err.message });
    }
  };

/* Increase the page number of the Option 
  whenever the number of pages increases, fetchGames is executed */
export const setPage = (option: Option): SetPageAction => {
  return { type: ActionType.SET_PAGE, payload: option };
};
/* Clear searched games */
export const clearSearched = (): ClearSearchedAction => {
  return { type: ActionType.CLEAR_SEARCHED };
};

export const setSearchWord = (searchWord: string): SetSearchWordAction => {
  return { type: ActionType.SET_SEARCH_WORD, payload: searchWord };
};
