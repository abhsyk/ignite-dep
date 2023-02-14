import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { gameDetailsURL, gameScreenshotURL } from '../../util/api';
import { GameDetailsAction } from '../actions/gameDetailsAction';
import { ActionType } from '../actionTypes';

export const loadGameDetails =
  (slug: string) => async (dispatch: Dispatch<GameDetailsAction>) => {
    dispatch({ type: ActionType.GET_DETAILS });

    try {
      const { data: detailData } = await axios.get(gameDetailsURL(slug));
      const { data: screenShotData } = await axios.get(gameScreenshotURL(slug));

      dispatch({
        type: ActionType.GET_DETAILS_COMPLETE,
        payload: { game: detailData, screen: screenShotData },
      });
    } catch (err: any) {
      dispatch({ type: ActionType.GET_DETAILS_ERROR, payload: err.message });
    }
  };
