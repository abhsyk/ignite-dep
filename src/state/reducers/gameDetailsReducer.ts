import { GameType, ScreenType } from '../../util/types';
import { GameDetailsAction } from '../actions/gameDetailsAction';
import { ActionType } from '../actionTypes';

interface GameDetailsState {
  game: GameType | null;
  screen: ScreenType | null;
  loading: boolean;
  errorMsg: string | null;
}

const initialState = {
  game: null,
  screen: null,
  loading: false,
  errorMsg: null,
} satisfies GameDetailsState;

const reducer = (
  state: GameDetailsState = initialState,
  action: GameDetailsAction
) => {
  switch (action.type) {
    case ActionType.GET_DETAILS:
      return { ...state, loading: true };
    case ActionType.GET_DETAILS_COMPLETE:
      const { game, screen } = action.payload;
      return {
        ...state,
        game,
        screen,
        loading: false,
      };
    case ActionType.GET_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
